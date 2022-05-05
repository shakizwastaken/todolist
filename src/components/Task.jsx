import React from 'react';

const Task = ({title,content,id,removeTask,editMode,toggleEditMode,setTask}) => {

    const inputTitle = title;
    const inputContent = content;

    const nonEditable = () => {
       return(<div className='info'>
                <h2>{title}</h2>
                <p>{content}</p>
            </div>);
    }

    const handleTitleInput = (e) => {
        inputTitle = e.target.value;
    }
    const handleContentInput = (e) => {
        inputTitle = e.target.value;
    }

    const saveEdit = () => {
        setTask(id,inputTitle,inputContent);
        toggleEditMode(id);
    }

    const editable = () => {
        return (
        <div className='editing' >
            <input className='title' onInput={()=>{handleTitleInput()}} value={inputTitle}></input>
            <input className='content' onInput={()=>{handleContentInput()}} value={inputContent}></input>
        </div>
        );
    }

    const renderEditButtons = () => {
        //edit buttons...
        return(
        <div className='editBtns'>
            <button id='saveBtn' onClick={()=>{saveEdit()}}>Save</button>
            <button id='cancelBtn' onClick={()=>{toggleEditMode(id)}} >Cancel</button>
        </div>
        );
    }

    const renderSettingsBtns = () => {
        return(
            <div className='taskSettings'>
                <button id='editBtn' onClick={()=>{toggleEditMode(id)}}>Edit</button>
                <button id='delBtn' onClick={()=>{removeTask(id)}} >Delete</button>
            </div>
        );
    }

    return (
        <div className='task' >
            <div>
                {editMode?editable():nonEditable()}
            </div>
            <div className='btns'>
                {editMode ? renderEditButtons():renderSettingsBtns()}
            </div>
        </div>   
    );
};

export default Task;