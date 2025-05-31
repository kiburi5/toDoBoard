import { useState } from 'react'

const Input = ({taskList, setTaskList}) => {
    const [input, setInput] = useState('')
    const handleAddTask = (e) => {
        e.preventDefault();
        setTaskList([...taskList, input]);
        setInput('');
    }
    return(
        <>
            <form className="flex flex-row items-center gap-3">
                <input className="border rounded-lg px-2.5 text-lg py-1.5 "
                    type="text"
                    placeholder="Add a task"
                    value={input}
                    onChange={(e)=>setInput(e.target.value)}

                />
                <button className="bg-violet-400 text-white py-2 px-3.5 rounded-lg
                hover:opacity-80 font-semibold"
                        onClick={(e) => handleAddTask(e)}>Add</button>
            </form>
        </>
    )
}
export default Input;