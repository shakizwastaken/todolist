import React,{useState} from 'react';

function TasksModifier({currentTasks,addTask}) {

    const [inputTitle,SetTitle] = useState('');
    const [inputContent,SetContent] = useState('');

    const handleSubmit = (e) =>{
        
        e.preventDefault();
        console.log(inputTitle,inputContent);

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
                    <input placeholder='title' name='title' value= {inputTitle} onChange={(e)=>{SetTitle(e.target.value)}} ></input>
                </label>
                    <label>
                    content
                    <input placeholder='content' name='content' value= {inputContent} onChange={(e)=>{SetContent(e.target.value)}} ></input>
                </label>
                
            </form>

            <button type='button' id='createTaskBtn' onClick={(e)=>{handleSubmit(e)}} >create task</button>


        </div>
    );
}

export default TasksModifier;