import React from 'react';
import {Col, Card, Badge } from 'react-bootstrap';

export default function MainGamePlate(data) {
    const joinToGame = () => {
        console.log('Join to ', data.data.id);
        // TODO: JOIN to GAme and redirect
    }
    return (
    <Card className="text-center border-success m-2 mgp p-2" onClick={joinToGame} role="button">
        <Card.Title>{data.data.name}</Card.Title>
        <Card.Title classname="text-muted">{data.data.creator}</Card.Title>
        <Col>
            {data.data.tags.map((tag => {
                return <Badge pill variant="dark" className="mx-1" key={tag}>{tag}</Badge>
            }))}
        </Col>
    </Card>
    )
}
