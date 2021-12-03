import { FC, useContext, useEffect, useState } from 'react';
import { Storage } from '../../storage';
import { 
  Box,
  ButtonGroup,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Typography,
  Chip,
  IconButton
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import { Priorities, PriorityColors, priorityList } from './shared';
import { Utilities } from '../../shared/utilities';
import { IField } from '../../shared/type';

export const TaskDialog: FC = () => {
  const { state, dispatch } = useContext(Storage.Context);
  const [selectedPriority, setSelectedPriority] = useState<Priorities>('low');
  const [fields, setFields] = useState<IField>({
    title: {
      type: 'text',
      value: '',
      validation: false,
      required: true
    },
    description: {
      type: 'text',
      value: '',
      validation: false,
      required: true
    },
    indicators: {
      type: 'text',
      value: '',
      validation: false,
      required: false
    }
  });

  const title = () => {
    switch (state.general.taskDialog.mood) {
      case 'add':
        return 'Create new task';
      case 'edit':
        return 'Edit task';
      case 'view':
        return fields.title.value;
    }
  }

  useEffect(() => {
    if(state.general.taskDialog.show) {
      if(state.general.taskDialog.mood !== 'add') { getData() }
    }
    else {
      clearForm();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.general.taskDialog.show]);


  const getData = () => {
    const tasks = state.task.items;
    const index = tasks.findIndex(x=> x.id === state.general.taskDialog.id);
    if(index > -1){
        const item = tasks[index];
        setFields({
            ...fields,
            title: {
                ...fields.title,
                value: item.title,
            },
            description: {
                ...fields.description,
                value: item.description,
            },
            indicators: {
                ...fields.indicators,
                value: item.indicators,
            }
        });
        setSelectedPriority(item.priority);
    }
    else{
        handleClose();
    }
  }

  const clearForm = () => {
    setTimeout(() => {
      setFields({
        title: {
          ...fields.title,
          value: '',
          validation: false
        },
        description: {
          ...fields.description,
          value: '',
          validation: false
        },
        indicators: {
          ...fields.indicators,
          value: '',
          validation: false
        }
      });
      setSelectedPriority('low');
    }, 100);
  }

  const handleClose = () => {
    Storage.Action('SET', dispatch, 'general', { 
      taskDialog: {
        ...state.general.taskDialog,
        show: false,
      }
     });
  };

  const handleChange = (event: React.ChangeEvent<any>, field: string) => {
    const value = fields[field].type === 'text' ? event.target.value : event.target.checked;
    setFields({
      ...fields,
      [field]: {
        ...fields[field],
        value: value,
        validation: false,
      }
    });
  };

  const save = () => { 
    if(Utilities.validation(fields)){
        state.general.taskDialog.mood === 'add' ? add() : edit()
    }
    else{
        setFields(Utilities.fieldsValidation(fields));
    } 
  }

  const add = () => {
    Storage.Action('SET', dispatch, 'task', {
      items: [
        ...state.task.items,
        {
          id: Utilities.uuidv4(),
          title: fields.title.value,
          description: fields.description.value,
          indicators: fields.indicators.value,
          priority: selectedPriority,
          complete: false
        }
      ]
    });
    handleClose();
  }

  const edit = () => {
    const tasks = state.task.items;
    const index = tasks.findIndex(x=> x.id === state.general.taskDialog.id);
    tasks[index] = {
        ...tasks[index],
        title: fields.title.value,
        description: fields.description.value,
        indicators: fields.indicators.value,
        priority: selectedPriority
    }

    Storage.Action('SET', dispatch, 'task', { items: tasks });
    handleClose();
  }

  const remove = () => {
    const tasks = state.task.items;
    const index = tasks.findIndex(x=> x.id === state.general.taskDialog.id);
    tasks.splice(index, 1);

    Storage.Action('SET', dispatch, 'task', { items: tasks });
    handleClose();
  }

  const markAsComplete = () => {
    const tasks = state.task.items;
    const index = tasks.findIndex(x=> x.id === state.general.taskDialog.id);
    tasks[index] = {
        ...tasks[index],
        complete: true
    }

    Storage.Action('SET', dispatch, 'task', { items: tasks });
    handleClose();
  }

  return (
    <Dialog
      fullWidth={true}
      open={state.general.taskDialog.show}
      onClose={handleClose}>
      <DialogTitle>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          {title()}
          {state.general.taskDialog.mood === 'view' &&
            <div>
              <Chip
                sx={{ marginRight: 1 }}
                label={selectedPriority}
                color={PriorityColors[selectedPriority]}
                size="small"
              />
              <IconButton
                size="small"
                color="primary"
                onClick={markAsComplete}
              ><TaskAltIcon /></IconButton>
              <IconButton
                size="small"
                color="primary"
                onClick={() => {
                  Storage.Action('SET', dispatch, 'general', {
                    taskDialog: {
                      ...state.general.taskDialog,
                      mood: 'edit'
                    }
                  });
                }}
              ><EditIcon /></IconButton>
              <IconButton
                color="error"
                size="small"
                onClick={remove}
              ><DeleteIcon /></IconButton>
            </div>
          }
        </Box>
      </DialogTitle>
      <DialogContent>
        {state.general.taskDialog.mood !== 'view' ?
        <>
          <TextField
            autoFocus
            type="text"
            value={fields.title.value}
            onChange={e => handleChange(e, 'title')}
            error={fields.title.validation}
            label="Title"
            variant="outlined"
            margin="dense"
            size="small"
            fullWidth
          />
          <TextField
            type="text"
            value={fields.description.value}
            onChange={e => handleChange(e, 'description')}
            error={fields.description.validation}
            label="Description"
            variant="outlined"
            margin="dense"
            size="small"
            fullWidth
            multiline
            rows={3}
          />
          <TextField
            type="text"
            value={fields.indicators.value}
            onChange={e => handleChange(e, 'indicators')}
            error={fields.indicators.validation}
            label="Indicators"
            variant="outlined"
            margin="dense"
            size="small"
            fullWidth
            multiline
            rows={2}
          />
          <Box sx={{ marginTop: 1 }}>
            <Typography
              sx={{
                display: 'inline-block',
                marginRight: 1
              }}>Priority:</Typography>
            <ButtonGroup variant="outlined">
              {priorityList.map((priority, index) =>
                <Button
                  key={index}
                  onClick={() => setSelectedPriority(priority.value)}
                  variant={priority.value === selectedPriority ? 'contained' : 'outlined'}
                  color={priority.color}
                  disableElevation>
                  {priority.value}
                </Button>
              )}
            </ButtonGroup>
          </Box>
        </>
        :
        <>
          <Typography variant="body1" gutterBottom>{fields.description.value}</Typography>
          <Typography variant="body2">{fields.indicators.value}</Typography>
        </>
        }
      </DialogContent>
      <DialogActions>
        <Button
          onClick={handleClose}
          variant="outlined">
          {state.general.taskDialog.mood === 'view' ? 'Close' : 'Cancel'}
        </Button>
        {state.general.taskDialog.mood !== 'view' &&
          <Button
            onClick={save}
            variant="contained"
            disableElevation>
            {state.general.taskDialog.mood}
          </Button>
        }
      </DialogActions>
    </Dialog>
  )
}
