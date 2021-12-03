import { FC, useContext } from 'react';
import { Storage } from '../../storage';
import { 
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  List} from '@mui/material';
import TaskListItem from './task-list-item';

export const CompleteTaskListDialog: FC = () => {
  const { state, dispatch } = useContext(Storage.Context);

  const handleClose = () => {
    Storage.Action('SET', dispatch, 'general', {
        completeTaskListDialog: false
     });
  };

  return (
    <Dialog
      fullWidth={true}
      open={state.general.completeTaskListDialog}
      onClose={handleClose}>
      <DialogTitle>Done Tasks</DialogTitle>
      <DialogContent>
        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
            {state.task.items.filter(x=> x.complete === true).map((item, index) => <TaskListItem key={index} item={item} disableAction />)}
        </List>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} variant="outlined">Close</Button>
      </DialogActions>
    </Dialog>
  )
}
