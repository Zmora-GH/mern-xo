import React, {useState} from 'react';
import {Button, Form} from 'react-bootstrap';

export default function CreateForm() {
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
                <Form.Label>Name</Form.Label>
                <Form.Control name="name" type="text" placeholder="Name" onChange={handleChange}/>
            </Form.Group>
            <Form.Group className="my-2">
                // tags
            </Form.Group>
            <Button variant="dark" type="submit">
                Create
            </Button>
        </Form>
    )
}
