import { FC, useContext } from 'react';
import { Storage } from '../../storage';
import { ITask } from '../../storage/data-model/models/task.model';
import { PriorityColors } from './shared';
import { Box, Chip, Divider, IconButton, ListItem, ListItemButton, ListItemText } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import TaskAltIcon from '@mui/icons-material/TaskAlt';

const TaskListItem: FC<{
    item: ITask;
    disableAction?: boolean;
}> = ({
    item,
    disableAction = false
}) => {
    const { state, dispatch } = useContext(Storage.Context);

    const openTask = (mood: 'edit' | 'view') => {
        Storage.Action('SET', dispatch, 'general', {
            taskDialog: {
                show: true,
                mood: mood,
                id: item.id
            }
        });
    }

    const markAsComplete = () => {
        const tasks = state.task.items;
        const index = tasks.findIndex(x=> x.id === item.id);
        tasks[index] = {
            ...tasks[index],
            complete: true
        }
    
        Storage.Action('SET', dispatch, 'task', { items: tasks });
    }

    const listItemContent = () => {
        return (
            <ListItemText
                primary={
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between'
                        }}
                    >
                        {item.title}
                        <div>
                            <Chip
                                sx={{ marginRight: 1 }}
                                label={item.priority}
                                color={PriorityColors[item.priority]}
                                size="small"
                            />
                            {!disableAction &&
                                <>
                                    <IconButton
                                        size="small"
                                        color="primary"
                                        onClick={(event) => {
                                            event.stopPropagation();
                                            markAsComplete();
                                        }}
                                    ><TaskAltIcon /></IconButton>
                                    <IconButton
                                        size="small"
                                        color="primary"
                                        onClick={(event) => {
                                            event.stopPropagation();
                                            openTask('edit');
                                        }}
                                    ><EditIcon /></IconButton>
                                </>
                            }
                        </div>
                    </Box>
                }
                secondary={item.description}
            />  
        )
    }

    return (
        <>        
            <ListItem disablePadding>
                {disableAction ?
                    listItemContent()
                :
                    <ListItemButton divider onClick={() => openTask('view')}>
                        {listItemContent()}
                    </ListItemButton>
                }
            </ListItem>
            {disableAction && <Divider component="li" />}
        </>
    )
}

export default TaskListItem;
