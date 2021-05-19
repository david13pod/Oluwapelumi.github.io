import { useState } from "react"


const AddTask = ({onAdd}) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit =(e) => {
        e.preventDefault()

        if (!text) {
            alert('Please add task')
            return
        }

        onAdd({text, day, reminder})

        //clears the form
        setText('')
        setDay('')
        setReminder(false)
      }

    return (
        <form className='add-form' onSubmit={onSubmit} >
            <div className='form-control'>
                <label>Task</label>
                <input type="text" placeholder='Enter task' 
                value={text} onChange={(e) => setText(e.target.value)} />
            </div>
            <div className='form-control'>
                <label>Day & Time</label>
                <input type="text" placeholder='Enter day and time'  
                value={day} onChange={(e) => setDay(e.target.value)} />
            </div>
            <div className='form-control form-control-check'>
                <label>Set Reminder</label>
                <input type="checkbox"  value={reminder} checked={reminder}
                onChange={(e) => setReminder(e.currentTarget.checked)} />
            </div>
            <input type="Submit" value='Save Task' 
            className='btn btn-block' />
        </form>
    )
}

export default AddTask
