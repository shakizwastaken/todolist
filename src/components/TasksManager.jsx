import React , {useState} from 'react';
import Task from './Task';
import TasksModifier from './TasksModifier';
import './Tasks.css';
function TasksManager() {

    
    let [currentTasks,SetCurrentTasks] = useState([
        {
            id :0,
            title:"this is an example task",
            content:"this task is for display purposes, you can feel free to delete it and add your own ones!"
        }
        ,
        {
            id :1,
            title:"this qweqis an example task",
            content:"this task iqwqweqs for display purposes, you can feel free to delete it and add your own ones!"
        }
    ]);

    const addTask = (title,content) => {
        let id = currentTasks.length;
            SetCurrentTasks(currentTasks.concat({
                id:id,
                title:title,
                content:content
        }));
    }

    const removeTask = (id) => {
        let newArr = [...currentTasks];
        currentTasks.forEach((el,i)=>{
    	    if(i === id){
                newArr.splice(i,1);
            }
            else if(i>id){
                el.id = el.id-1;
            }
        });
        SetCurrentTasks(newArr);
    }

    const renderTasks = () =>{
        return currentTasks.map(
            (task)=> <Task {...task} key={task.id} removeTask={removeTask} />
        );
    }

    return (
        <div>
            
            <div className='tasksContainer'>

                {currentTasks.length !== 0 ?renderTasks():<h1 id='noTask' >You currently have 0 active tasks</h1>}
            
            </div>

            <TasksModifier currentTasks={currentTasks} addTask={addTask} />

        </div>
    );
}

export default TasksManager;