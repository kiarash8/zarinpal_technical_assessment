import { FC, useContext } from 'react';
import { Storage } from '../../storage';
import { TaskDialog } from './task-dialog';
import { CompleteTaskListDialog } from './complete-task-list-dialog';
import TaskListItem from './task-list-item';
import { Alert, Box, Button, Fab, List, Toolbar, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const TaskList: FC = () => {
    const { state, dispatch } = useContext(Storage.Context);
    const isEmpty = state.task.items.length === 0;
    const hasRemainingTask = state.task.items.findIndex(x=> x.complete === false) > -1;
    const hasCompleteTask = state.task.items.findIndex(x=> x.complete === true) > -1;

    const createNewTask = () => {
        Storage.Action('SET', dispatch, 'general', {
            taskDialog: {
                show: true,
                mood: 'add'
            }
        });
    }
  
    return (
    <>
        <Box
            sx={{ 
                position: 'relative',
                width: '100%',
                maxWidth: 800,
                height: '95vh',
                margin: 'auto'
             }}
        >
            <Toolbar sx={{ position: 'relative' }}>
                <Typography
                    sx={{
                        flexGrow: 1,
                        textAlign: `${!isEmpty ? 'left' : 'center'}`
                    }}
                    variant="h6"
                    component="div">Hello World</Typography>
                {!isEmpty &&
                <Button
                    disabled={!hasCompleteTask}
                    onClick={() => {
                        Storage.Action('SET', dispatch, 'general', {
                            completeTaskListDialog: true
                        });
                    }}
                    color="primary"
                    variant="outlined"
                    disableElevation>View Done Tasks</Button>}
            </Toolbar>
            <Box sx={{ textAlign: 'center', paddingX: 3 }}>
                {!isEmpty ?
                (hasRemainingTask ?                
                    <List sx={{
                        width: '100%',
                        bgcolor: 'background.paper',
                        height: '85vh',
                        overflowX: 'auto'
                    }}>
                        {state.task.items.filter(x=> x.complete === false).map((item, index) => <TaskListItem key={index} item={item} />)}
                    </List>
                :
                    <Alert icon={false} severity="info">well done, you did it great.</Alert>
                )
                :
                    <Button
                        onClick={createNewTask}
                        sx={{
                            marginTop: 6
                        }}
                        color="primary"
                        variant="outlined"
                        disableElevation>Create Your First Task ;)</Button>
                }
            </Box>
            {!isEmpty &&
            <Fab
                onClick={createNewTask}
                sx={{
                    position: 'absolute',
                    bottom: 16,
                    right: 16,
                }}
                color="primary"
                aria-label="add">
                <AddIcon />
            </Fab>}
        </Box>
        <TaskDialog />
        <CompleteTaskListDialog />
    </>
    );
}

export default TaskList;
