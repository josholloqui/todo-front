import React from 'react';
import { fetchTask, createTask } from '../todo-api.js'

class TodoList extends React.Component {
    state = {
        tasks: [],
        newTask: '',
        completed: false
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
                tasks: taskData.body
            });
        } catch(e) {
            return { error: e.message };
        }
    }

    render() { 
        return (
            <main>
                <div>
                    <form onSubmit={this.handleNewTask}>
                        <label>
                            New Todo
                            <input onChange={(e) => this.setState({ newTask: e.target.value })} value={this.state.newTask} />
                            <button>Submit</button>
                        </label>
                    </form>
                </div>
                <div>
                    <div>
                        {
                            this.state.tasks.map((task) => {
                                return <div>
                                <div>todo: {task.task}</div>
                                <div>{task.completed ? 'Task completed' : 'still waiting'}</div>
                                </div>
                            })
                        }
                    </div>
                </div>
            </main>
        );
    }
}
 
export default TodoList;