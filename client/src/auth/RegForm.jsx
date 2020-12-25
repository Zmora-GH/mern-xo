import React, {useState} from 'react';
import {Button, Form} from 'react-bootstrap';
import axios from 'axios';

export default function RegForm() {
    const [formData, setFormData] = useState({email: "", username: "", password: ""})

    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value});
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        await axios.post('/api/auth/signup', {...formData})
        .then(res => {
            document.getElementById('form-message-up-s').textContent = res.data.message
            setTimeout(()=>{document.getElementById('form-message-up-s').textContent = ""}, 2000)
        })
        .catch(err => {
            if (err.response.status === 400) {
                document.getElementById('form-message-up').textContent = err.response.data.message
                setTimeout(()=>{document.getElementById('form-message-up').textContent = ""}, 2000)
            } else {
                document.getElementById('form-message-up').textContent = err.response.data.message
                setTimeout(()=>{document.getElementById('form-message-up').textContent = ""}, 2000)
            }
        })
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
                    Reset
                </Button>
                <Button variant="success" type="submit" className="mx-3">
                    Submit
                </Button>
            </div>
            <p className="text-danger" id="form-message-up"></p>
            <p className="text-success" id="form-message-up-s"></p>
        </Form>
    )
}
