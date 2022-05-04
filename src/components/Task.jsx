import React,{useState} from 'react';

const Task = ({title,content,id,removeTask}) => {

    let [editMode, SetEditMode] = useState(false);

    const renderEditButtons = () => {
        //edit buttons...
        return(
        <div className='editBtns'>
            <>comming soon...</>
            <button onClick={()=>{toggleEditMode()}} >cancel</button>
        </div>
        );
    }

    const renderSettingsBtns = () => {
        return(
            <div className='taskSettings'>
                <button onClick={()=>{removeTask(id)}} >delete</button>
                <button onClick={()=>{toggleEditMode()}}>edit</button>
            </div>
        );
    }

    const toggleEditMode = () => {
        SetEditMode(!editMode);
    }

    return (
        <div className='task' >
            <div className='info'>
                <h2>{title}</h2>
                <p>{content}</p>
            </div>
            <div className='btns'>
                {editMode ? renderEditButtons():renderSettingsBtns()}
            </div>
        </div>   
    );
};

export default Task;