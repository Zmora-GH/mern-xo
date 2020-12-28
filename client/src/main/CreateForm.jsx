import React, {useState, useEffect} from 'react';
import {Button, Form} from 'react-bootstrap';
import Tags from "@yaireo/tagify/dist/react.tagify"
import axios from 'axios';
import "@yaireo/tagify/dist/tagify.css"

export default function CreateForm() {
    const [inputName, setInputName] = useState("")
    const [inputTags, setInputTags] = useState([])
    const [whiteList, setWhiteList] = useState()

    useEffect(() => {
        if (!whiteList){
            axios.get('/api/main/tags')
            .then((res)=>{
                let temp = []
                res.data.forEach( (tag) => { temp.push(tag.name) })
                setWhiteList(temp)
            })
            .catch((err)=>{
                console.log(err);
            })
        }
    })

    const handleChangeInput = (event) => {
        event.preventDefault();
        setInputName(event.target.value);


    }
    const handleChangeTags = (event) => {
        event.persist();
        let tags = []
        let data = event.target.value ? JSON.parse(event.target.value): []
        for (let i in data) {
            tags.push(data[i].value);
        }
        setInputTags(tags);

    }
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('/api/main/create', {"name": inputName, "tags": inputTags})
        .then(res => {
            console.log(res);

        })
        .catch(err => {
            console.log(err);

        })

    }
    return (
        <Form className="" onSubmit={handleSubmit}>
            <Form.Group controlId="formGroupName">
                <Form.Label>Name</Form.Label>
                <Form.Control name="name" type="text" placeholder="Name" onChange={handleChangeInput}/>
            </Form.Group>
            <Form.Group className="my-2" controlId="formGroupTags">
                <Form.Label>Tags</Form.Label>
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
