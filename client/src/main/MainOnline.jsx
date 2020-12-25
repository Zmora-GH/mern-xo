import React from 'react';
import {Card} from 'react-bootstrap';

import MainGamePlate from './MainGamePlate';

export default function MainMenu() {
    const TESTDATA = [
        {id:1, creator:"user001", tags:["tag1", "tag2", "tag3"], name:"game test name 213810273 12309", created:"00:12:45"},
        {id:2, creator:"user002", tags:["tag5", "tag2", "tag9"], name:"game test name 213810273 12303", created:"00:12:45"},
        {id:3, creator:"user003", tags:["tag4", "tag7", "tag1"], name:"game test name 213810273 12305", created:"00:12:45"},]

    return (
        <Card>
            <Card.Body><Card.Title>Online Games:</Card.Title></Card.Body>
            { TESTDATA ? TESTDATA.map((item => <MainGamePlate data={item}/>)) : ''}
        </Card>
    )
}
