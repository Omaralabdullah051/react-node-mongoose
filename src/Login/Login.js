import React from 'react';

const Login = () => {
    const handleOnSubmit = e => {
        e.preventDefault();
        const userName = e.target.userName.value;
        const password = e.target.password.value;

        fetch('http://localhost:5000/user/login', {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({ userName, password })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                localStorage.setItem('accessToken', data.access_Token);
            })
    }
    return (
        <div>
            <form onSubmit={handleOnSubmit}>
                <input type="text" name="userName" id="userName" placeholder='User Name' />
                <input type="password" name="password" id="password" placeholder='Password' />
                <input type="submit" value="login" />
            </form>
        </div>
    );
};

export default Login;