import React from 'react';
import { fetchTask, createTask, updateTask, deleteTask } from '../todo-api.js'
import './todo.css';

class TodoList extends React.Component {
    state = {
        tasks: [],
        newTask: '',
        completed: false,
        clicked: false
    }

    componentDidMount = async () => {
        if(!this.props.token) {
            this.props.history.push('/login');
        } else {
            const taskData = await fetchTask(this.props.token)

            this.setState({
                tasks: taskData.body
            })
        }
    }

    handleNewTask = async (e) => {
        e.preventDefault();

        try {
            await createTask({
                task: this.state.newTask,
                completed: this.state.completed
            });

            const taskData = await fetchTask(this.props.token);

            this.setState({
                tasks: taskData.body,
                clicked: false
            });
        } catch(e) {
            return { error: e.message };
        }
    }

    handleUpdate = async (id, task) => {
        await updateTask(id, 
            {
                task: task.task,
                completed: true
            }
        )

        const taskData = await fetchTask(this.props.token);

        this.setState({
            tasks: taskData.body
        })
    }

    handleDelete = async (id) => {
        await deleteTask(id);

        const taskData = await fetchTask(this.props.token);

        this.setState({
            tasks: taskData.body
        })
    }

    render() { 
        return (
            <main className='todo-page'>
                <h2 className='todo-h2'>Dodo Dashboard</h2>
                <div className='dashboard'>
                    <div className='dash-add'>
                        <button className='dash-button' onClick={e => this.setState({ clicked: true })}>New Task</button>
                        <div className={`${this.state.clicked ? 'not-hidden' : 'hidden'}`}>
                            <form onSubmit={this.handleNewTask}>
                                <label className='add-task'>
                                    <div className='add-text'>Add to the to-do list:</div>
                                    <input className='task-input' onChange={(e) => this.setState({ newTask: e.target.value })} value={this.state.newTask} />
                                    <button className='add-task-button'>Add</button>
                                </label>
                            </form>
                        </div>
                    </div>
                    <ul>
                        {
                            this.state.tasks.map((task) => {
                                if(task.completed === false) {
                                    return <li key={`${task.task}+${task.id}`} onClick={() => this.handleUpdate(task.id, task)}>
                                    <button className='delete' onClick={() => this.handleDelete(task.id)}>x</button>
                                    <h3>{task.task}</h3>
                                    <p>{task.completed ? 'Task completed' : 'Not Yet Completed'}</p>
                                    </li>
                                } else {
                                    return <li className='completed' key={`${task.task}+${task.id}`}>
                                    <button className='delete-completed' onClick={() => this.handleDelete(task.id)}>x</button>
                                    <h3 className='task-completed'>{task.task}</h3>
                                    <p className='task-completed'>{task.completed ? 'Task completed' : 'Not Yet Completed'}</p>
                                    </li>
                                }
                                
                                })
                        }
                    </ul>
                </div>
            </main>
        );
    }
}
 
export default TodoList;