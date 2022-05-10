import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const TodoDetails = () => {
    const [todo, setTodo] = useState({});
    const { id } = useParams();
    useEffect(() => {
        fetch(`http://localhost:5000/todo/${id}`)
            .then(res => {
                console.log(res);
                return res.json();
            })
            .then(data => {
                console.log(data);
                if (data.error) {
                    alert(data.error);
                }
                if (data.message) {
                    setTodo(data.result[0]);
                }
            })
    }, [id]);

    const handleUpdate = () => {
        const description = 'Hello from client';
        fetch(`http://localhost:5000/todo/updatetodo/${id}`, {
            method: "PUT",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({ description })
        })
            .then(res => {
                console.log(res);
                return res.json();
            })
            .then(data => {
                console.log(data);
                if (data.error) {
                    alert(data.error);
                }
                if (data.message) {
                    alert(data.message);
                    // setTodo(data.result);
                }
            })
    }
    const handleDelete = () => {
        fetch(`http://localhost:5000/todo/deletetodo/${id}`, {
            method: "DELETE",
        })
            .then(res => {
                console.log(res);
                return res.json();
            })
            .then(data => {
                console.log(data);
                if (data.error) {
                    alert(data.error);
                }
                if (data.message) {
                    alert(data.message);
                    setTodo([]);
                }
            })
    }
    return (
        <div>
            <h1>{todo._id}</h1>
            <h2>{todo.description}</h2>
            <h3>{todo.date}</h3>
            <button onClick={handleUpdate}>Update</button>
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
};

export default TodoDetails;