import './BaseForm.css'

const BaseForm = (props) => {

  return (
    <div className='form-wrap'>
      {/* <label>Enter task: </label> */}
      <input
        type="text"
        placeholder="search recipe"
        name="task"
        value={props.value}
        onChange={props.handleChange}
      />
      <button onClick={props.addTask}>submit</button>
    </div>
  )
}

export default BaseForm