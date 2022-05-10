import React from 'react';

const SignUp = () => {
    const handleOnSubmit = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const userName = e.target.userName.value;
        const password = e.target.password.value;

        fetch('http://localhost:5000/user/signup', {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({ name, userName, password })
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }
    return (
        <div>
            <form onSubmit={handleOnSubmit}>
                <input type="text" name="name" id="name" placeholder='Name' />
                <input type="text" name="userName" id="userName" placeholder='User Name' />
                <input type="password" name="password" id="password" placeholder='Password' />
                <input type="submit" value="Signup" />
            </form>
        </div>
    );
};

export default SignUp;