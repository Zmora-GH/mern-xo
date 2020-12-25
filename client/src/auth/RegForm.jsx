import React, {useState} from 'react';
import {Button, Form} from 'react-bootstrap';

export default function RegForm() {
    const [formData, setFormData] = useState({email: "", username: "", password: ""})

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
            <Form.Group controlId="formGroupEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control name="email" type="email" placeholder="Email" onChange={handleChange}/>
            </Form.Group>
            <Form.Group controlId="formGroupPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name="password" type="password" placeholder="Password" onChange={handleChange}/>
            </Form.Group>
            <div className="text-center">
                <Button variant="secondary" type="reset" className="mx-3">
                    Cancel
                </Button>
                <Button variant="success" type="submit" className="mx-3">
                    Submit
                </Button>
            </div>
        </Form>
    )
}
