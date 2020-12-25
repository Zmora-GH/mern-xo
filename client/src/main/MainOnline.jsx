import React from 'react';
import {Card} from 'react-bootstrap';

import MainGamePlate from './MainGamePlate';

export default function MainMenu(data) {
    // TODO: GEt All games / or games with tag >tagId<
    // TODO: get tag (name) from db
    const tagname = "ABRA"
    const TESTDATA = [
        {id:1, creator:"user001", tags:["tag1", "tag2", "tag3"], name:"game test name 213810273 12309"},
        {id:2, creator:"user002", tags:["tag5", "tag2", "tag9"], name:"game test name 213810273 12303"},
        {id:3, creator:"user003", tags:["tag4", "tag7", "tag1"], name:"game test name 213810273 12305"},]

    if (data.data){
        return (
            <Card>
                <Card.Body><Card.Title>Online games with tag "{tagname}" :</Card.Title></Card.Body>
                { TESTDATA ? TESTDATA.map((item => <MainGamePlate data={item}/>)) : ''}
            </Card>
        )
    } else {
        return (
            <Card>
                <Card.Body><Card.Title>Online games:</Card.Title></Card.Body>
                { TESTDATA ? TESTDATA.map((item => <MainGamePlate data={item}/>)) : ''}
            </Card>
        )
    }
}
