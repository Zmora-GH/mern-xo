import React, {useState, useEffect} from 'react';
import {Card} from 'react-bootstrap';
import axios from 'axios';
import MainGamePlate from './MainGamePlate';

export default function MainOnline(data) {
    // TODO: GEt All games / or games with tag >tagId<
    // TODO: get tag (name) from db
    const tagID = data.data;
    const tagname = "ABRA"
    const TESTDATA = [
        {id:1, creator:"user001", tags:["tag1", "tag2", "tag3"], name:"game test name 213810273 12309"},
        {id:2, creator:"user002", tags:["tag5", "tag2", "tag9"], name:"game test name 213810273 12303"},
        {id:3, creator:"user003", tags:["tag4", "tag7", "tag1"], name:"game test name 213810273 12305"},]

    //
    //

    const [games, setGames] = useState([])
    useEffect(()=>{
        if (games.length === 0) {
            axios.get('/api/main/games')
            .then((res)=>{
                setGames(res.data)
            })
            .catch((err)=>{
                console.log(err);
            })
        }
    }, [games, setGames])

    if (data.data){
        return (
            <Card>
                <Card.Body><Card.Title>Online games with tag "{tagname}" :</Card.Title></Card.Body>
                { TESTDATA ? TESTDATA.map((item => <MainGamePlate key={item.id} data={item}/>)) : ''}
            </Card>
        )
    } else {
        return (
            <Card>
                <Card.Body><Card.Title>Online games:</Card.Title></Card.Body>
                { TESTDATA ? TESTDATA.map((item => <MainGamePlate key={item.id} data={item}/>)) : ''}
            </Card>
        )
    }
}
