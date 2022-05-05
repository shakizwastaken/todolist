import React , {useState} from 'react';
import Task from './Task';
import TasksModifier from './TasksModifier';
import './Tasks.css';
function TasksManager() {

    
    let [currentTasks,SetCurrentTasks] = useState([
        {
            id :0,
            title:"This is an example task",
            content:"This task is for display purposes, you can feel free to delete it and add your own ones!",
            editMode:false
        }
        ,
        {
            id :1,
            title:"This qweqis an example task",
            content:"This task iqwqweqs for display purposes, you can feel free to delete it and add your own ones!",
            editMode:false
        }
    ]);

    const addTask = (title,content) => {
        let id = currentTasks.length;
            SetCurrentTasks(currentTasks.concat({
                id:id,
                title:title,
                content:content,
                editMode:false
        }));
    }

    const toggleEditMode = (id) => {

        const task = currentTasks[id];
        let result = [...currentTasks];

        task.editMode = !task.editMode;
        result[id] = task;
        
        SetCurrentTasks(result);
    }

    const setTask = (id,title,content) => {

        const task = currentTasks[id];
        let result = [...currentTasks];

        task.title = title;
        task.content = content
        result[id] = task;

        SetCurrentTasks(result);
    }
    
    const isEditing = ()=>{
        let value = false
        
        currentTasks.forEach((el)=>{
            if(el.editMode){
                value = true;
            }
        });
        return value;
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

    const renderTask = (task) => {
        return <Task {...task} key={task.id} setTask={setTask} removeTask={removeTask} toggleEditMode={toggleEditMode} />
    }

    const renderTasks = () =>{

        if(!isEditing()){
            
            return currentTasks.map(
                (task)=> renderTask(task)
            );

        }else{
            return currentTasks.map(
                (task)=> task.editMode?renderTask(task):null
            );
        }
    }

    return (
        <div>
            <TasksModifier currentTasks={currentTasks} addTask={addTask} />
           
            <div className='tasksContainer'>
                {currentTasks.length !== 0 ?renderTasks():<h1 id='noTask' >You currently have 0 active tasks</h1>}
            </div>
        </div>
    );
}

export default TasksManager;