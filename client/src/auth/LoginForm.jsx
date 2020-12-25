import React, {useState} from 'react';
import {Button, Form} from 'react-bootstrap';

export default function LoginForm() {
    const [formData, setFormData] = useState({username: "", password: ""})

    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value});
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData)
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
        </Form>
    )
}
