import {useState} from 'react'

function AddTask({onAdd}) {

    const [text, setName] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)
    
    const onSubmit = (e)=>{
        e.preventDefault()
        if(!text)
        {
            return (alert('Please Add a Task First'));
        }
        onAdd({text, day, reminder})

        setName ('')
        setDay ('')
        setReminder (false)
        
    };

    return (
        <form className='add-form' onSubmit={onSubmit}>
        <div className='form-control'>
            <label>Task:</label>
            <input type='text' placeholder='Type the Task' value={text} onChange={(e)=>setName(e.target.value )}/>
        </div>
        <div className='form-control'>
            <label>Set Schedule:</label>
            <input type='text' placeholder='Type the day and time' value={day} onChange={(e)=>setDay(e.target.value )}/>
        </div>
        <div className='form-control form-control-check'>
                <label>Set Reminder</label>
                <input type='checkbox' checked={reminder} value={reminder} onChange={(e)=>setReminder(e.currentTarget.checked )}/>
        </div>
            <button type='submit' className='btn btn-block'>Save Task</button>
         </form>
    )
}

export default AddTask
