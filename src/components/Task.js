// imports Font awesome from the npm module, "react-icons": "^4.2.0"
import { FaTimes } from 'react-icons/fa'

//task function which has the task, onDelete and onToggle arguments passed into the function
const task = ({ task, onDelete, onToggle }) => {
	return (
        // wraps each task item in a div
		<div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(task.id)}>
			<h3>
				{task.text} <FaTimes style={{ color: 'red', cursor: 'pointer' }} onClick={() => onDelete(task.id)} />
			</h3>
			<p>
				{task.day}
			</p>
		</div>
	)
}

export default task
