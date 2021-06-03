import React from 'react';
import {TodoList} from "./TodoList";
import {AddTodoForm} from "./AddTodoForm";
import './App.css';


const initialTodos: Todo[] = [
    {
        text: 'Walk the dog',
        complete: false,
    },
    {
        text: 'Write app',
        complete: false,
    },
];


function App() {
    const [todos, setTodos] = React.useState(initialTodos);

    const toggleTodo = (selectedTodo: Todo) => {
        const newTodos = todos.map(todo => {
            if (todo === selectedTodo) {
                return {
                    ...todo,
                    complete: !todo.complete,
                };
            }
            return todo;
        });
        setTodos(newTodos);
    }

    const addTodo: AddTodo = (text: string) => {
        const newTodo = { text, complete: false };
        setTodos([...todos, newTodo]);
    };


    return (
        <div className="container">
          <TodoList todos={todos} toggleTodo={toggleTodo}/>
          <AddTodoForm addTodo={addTodo}/>
        </div>
    )
}

export default App;
