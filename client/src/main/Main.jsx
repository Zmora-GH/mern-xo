import React from 'react';
import { useParams } from "react-router-dom";
import {Col, Row, Container} from 'react-bootstrap';

import MainMenu from './MainMenu'
import MainOnline from './MainOnline'
import MainTags from './MainTags'

export default function MainPage() {
    let {tagId} = useParams()
    const TagID = tagId || 0;
    console.log('><><><><', TagID);
    return (
        <Container className="mt-2">
            <Row>
                <Col md={6}>
                    <Row>
                        <Col md={12}>
                            <MainMenu />
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12}>
                            <MainOnline  data={TagID}/>
                        </Col>
                    </Row>
                </Col>
                <Col md={6}>
                        <MainTags />
                </Col>
            </Row>
        </Container>
    )
}
