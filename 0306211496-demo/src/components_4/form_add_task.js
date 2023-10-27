import { useDispatch } from 'react-redux'
import { add } from '../reducers/task_slice';
import { useRef } from 'react';

function FormAddTask() {
    const taskName = useRef()
    const dispatch = useDispatch();

    const addTask = () => {
        dispatch(add(taskName.current.value));
    }

    return (
        <>
        <div >
            <label>Tên Task:</label>
            <input type="text" className='task' placeholder="Nhập tên task" ref={taskName} />
            <button className="add" onClick={addTask}>Add</button>
        </div>
        </>
    );
}

export default FormAddTask;