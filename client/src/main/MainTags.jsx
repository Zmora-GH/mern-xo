import React, {useState, useEffect} from 'react';
import {Card} from 'react-bootstrap';
import axios from 'axios';

export default function MainTags() {
    const [tags, setTags] = useState([])

    useEffect(()=>{
        if (tags.length === 0) {
            axios.get('/api/main/tags')
            .then((res)=>{
                setTags(res.data)
            })
            .catch((err)=>{
                console.log(err);
            })
        }
    }, [tags, setTags])

    return (
            <Card className="text-center pb-5">
                <Card.Title>Tags:</Card.Title>
                <Card.Body className="">
                    {tags.map(tag => <a
                        key={tag.id}
                        href={tag.id}
                        className="
                            tesx-center
                            d-inline-block
                            badge
                            bg-dark
                            text-decoration-none
                            text-light
                            m-1 px-2 py-1
                            fw-bold"
                        >{tag.name}</a>)}
                </Card.Body>
            </Card>
    )
}
