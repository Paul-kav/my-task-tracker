import {useState} from 'react'

const AddTask = ({onAdd}) => {
    //state variables
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setreminder] = useState(false)

    const onSubmit = () => {
        e.preventDefault()

        if(!text){
            alert("please add text")
            return
        }
        onAdd("text, day, reminder")
        setText('')
        setDay('')
        setreminder(false)
    }

  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control'>
        <label>Task</label>
        <input type='text' placeholder='Add Task' 
        value = {text}
        onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label>Day & Time</label>
        <input type='text' placeholder='Add Day & Time' 
        value = {day}
        onChange={(e) => setDay(e.target.value)}
        />
      </div>
      <div className='form-control
      form-control-check'>
        <label>Set Reminder</label>
        <input type='checkbox'
        value = {reminder}
        onChange = {(e) => setreminder(e.currentTarget.checked)}
        />
      </div>
      <input type='submit' value='Save Task' className='btn btn-block'/>
    </form>
  )
}

export default AddTask
