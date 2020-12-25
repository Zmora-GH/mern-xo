import React, {useState} from 'react';
import {Button, Form} from 'react-bootstrap';
import axios from 'axios';

export default function LoginForm() {
    const [formData, setFormData] = useState({username: "", password: ""})

    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value});
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        await axios.post('/api/auth/signin', {...formData})
        .then(res => {
            localStorage.setItem('userData' , JSON.stringify({...res.data}));
            window.location.reload();
        })
        .catch(err => {
            if (err.response.status === 400) {
                document.getElementById('form-message').textContent = err.response.data.message
                setTimeout(()=>{document.getElementById('form-message').textContent = ""}, 2000)
            } else {
                document.getElementById('form-message').textContent = err.response.data.message
                setTimeout(()=>{document.getElementById('form-message').textContent = ""}, 2000)
            }
        })
    }
    return (
        <Form className="" onSubmit={handleSubmit}>
            <Form.Group controlId="formGroupUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control name="username" type="text" placeholder="Username" onChange={handleChange}/>
            </Form.Group>
            <Form.Group controlId="formGroupPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name="password" type="password" placeholder="Password" onChange={handleChange}/>
            </Form.Group>
            <Button variant="success" type="submit">
                Submit
            </Button>
            <p className="text-danger" id="form-message"></p>
        </Form>
    )
}
