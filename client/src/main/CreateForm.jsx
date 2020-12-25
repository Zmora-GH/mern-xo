import React, {useState, useEffect} from 'react';
import {Button, Form} from 'react-bootstrap';
import Tags from "@yaireo/tagify/dist/react.tagify"
import axios from 'axios';
import "@yaireo/tagify/dist/tagify.css"

export default function CreateForm() {
    const [formData, setFormData] = useState({name: "", tags: []})
    const [whiteList, setWhiteList] = useState()

    useEffect(() => {
        if (!whiteList){
            // TODO: GET TAGS ARRAY
            setWhiteList(["aaa","aaa1","aaa3","aaa7","fff","fff1","fff3","fff4"])
        }
    })

    const handleChangeInput = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value});
    }
    const handleChangeTags = (event) => {
        event.persist();
        let tags = []
        let data = event.target.value ? JSON.parse(event.target.value): []
        for (let i in data) {
            tags.push(data[i].value);
        }
        setFormData({...formData,tags});
        console.log(whiteList);
    }
    const handleSubmit = async (event) => {
        event.preventDefault();

        await axios.post('/', {})
        .then(res => {
            // TODO: redirect to /game/id (create game)
        })
        .catch(err => {
            // TODO: //error handle
        })
    }
    return (
        <Form className="" onSubmit={handleSubmit}>
            <Form.Group controlId="formGroupUsername">
                <Form.Label>Name</Form.Label>
                <Form.Control name="name" type="text" placeholder="Name" onChange={handleChangeInput}/>
            </Form.Group>
            <Form.Group className="my-2">
                <Tags
                  value=''
                  whitelist={whiteList}
                  onChange={handleChangeTags}
                />
            </Form.Group>
            <Button variant="dark" type="submit">
                Create
            </Button>
        </Form>
    )
}
