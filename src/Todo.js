import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Todo = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        // fetch('http://localhost:5000/todo/todo')
        // fetch('http://localhost:5000/todo/')
        // fetch('http://localhost:5000/todo/todolimit')
        fetch('http://localhost:5000/todo/', {
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                console.log(res);
                return res.json();
            })
            .then(data => {
                if (data.error) {
                    alert(data.error);
                }
                if (data.message) {
                    setTodos(data.result);
                }
            })
    }, []);

    const handleOnSubmit = e => {
        e.preventDefault();
        const title = e.target.title.value;
        const description = e.target.description.value;
        const status = e.target.status.value;
        fetch('http://localhost:5000/todo/', {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({ title, description, status })
        })
            .then(res => {
                console.log(res);
                return res.json();
            })
            .then(data => {
                if (data.message) {
                    alert(data.message);
                    e.target.reset();
                }
                if (data.error) {
                    alert(data.error);
                }
            })
    }

    const handlePostMutiple = () => {
        const multiple = [
            { title: "node.js", description: "nothing", status: "active" },
            { title: "react.js", description: "something", status: "inactive" },
            { title: "python", description: "everything", status: "active" },
        ]
        fetch('http://localhost:5000/todo/all', {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(multiple)
        })
            .then(res => {
                console.log(res);
                return res.json();
            })
            .then(data => {
                if (data.message) {
                    alert(data.message);
                }
                if (data.error) {
                    alert(data.error);
                }
            })
    }

    const navigate = useNavigate();
    const handleNavigate = id => {
        navigate(`/todo/${id}`);
    }


    return (
        <div className="App">
            <form onSubmit={handleOnSubmit}>
                <input type="text" name="title" id="title" placeholder='title' />
                <input type="text" name="description" id="description" placeholder='description' />
                <input type="text" name="status" id="status" placeholder='status' />
                <input type="submit" value="Submit" />
            </form>
            <button onClick={handlePostMutiple}>Post Multiple</button>
            <div>
                {
                    todos.map(todo => (<div key={todo._id}>
                        <h1>{todo?._id}</h1>
                        <h1>{todo.title}</h1>
                        <h2>{todo.description}</h2>
                        <h3>{todo.status}</h3>
                        <button onClick={() => handleNavigate(todo._id)}>Manage</button>
                    </div>))
                }
            </div>
        </div>
    );
};

export default Todo;

