import React,{useState} from 'react';

function TasksModifier({currentTasks,addTask}) {

    const [inputTitle,SetTitle] = useState('');
    const [inputContent,SetContent] = useState('');

    const handleKey = (e)=> {
        if(e.key === 'Enter'){
            submit();
        }
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        submit();
    }

    const submit=()=>{
        if(checkValues()){
            addTask(inputTitle,inputContent);
            clearStates();
        }
    }

    const checkValues = () =>{
        if(!inputTitle || !inputContent){
            return false;
        }
        return true;
    }

    const clearStates = () => {
        SetTitle('');
        SetContent('');
    }   

    return (
        <div className='tasksModifier'>
            <form>

                <label>
                    title
                    <input onKeyDown={(e)=>{handleKey(e)}} placeholder='title' name='title' value= {inputTitle} onChange={(e)=>{SetTitle(e.target.value)}} ></input>
                </label>
                    <label>
                    content
                    <input onKeyDown={(e)=>{handleKey(e)}} placeholder='content' name='content' value= {inputContent} onChange={(e)=>{SetContent(e.target.value)}} ></input>
                </label>
                
            </form>

            <button type='button' id='createTaskBtn' onClick={(e)=>{handleSubmit(e)}} >create task</button>


        </div>
    );
}

export default TasksModifier;