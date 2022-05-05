import React,{useState} from 'react';

const Task = ({title,content,id,removeTask,editMode,toggleEditMode,setTask}) => {

    const [inputTitle,SetTitle] = useState(title);
    const [inputContent,SetContent] = useState(content);

    const nonEditable = () => {
       return(<div className='info'>
                <h2>{title}</h2>
                <p>{content}</p>
            </div>);
    }

    const saveEdit = () => {
        setTask(id,inputTitle,inputContent);
        toggleEditMode(id);
    }

    const editable = () => {
        return (
        <div className='editing' >
            <input className='title' onChange={(e)=>{SetTitle(e.target.value)}} value={inputTitle}></input>
            <input className='content' onChange={(e)=>{SetContent(e.target.value)}} value={inputContent}></input>
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