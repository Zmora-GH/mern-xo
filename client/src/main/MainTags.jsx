import React from 'react';
import {Card} from 'react-bootstrap';

export default function MainTags() {
    const tagsSet = [
        {id: 1, name: "tag1", count: 10},
        {id: 2, name: "tagOne", count: 75},
        {id: 3, name: "tag2", count: 25},
        {id: 4, name: "tag22", count: 47},
        {id: 5, name: "tagTwo", count: 69},
        {id: 6, name: "tagUno", count: 9},
        {id: 7, name: "tagDuo", count: 100},
        {id: 8, name: "tagTre", count: 25},
        {id: 9, name: "tagTest", count: 33},
        {id: 1, name: "tag1", count: 10},
        {id: 2, name: "tagOne", count: 75},
        {id: 3, name: "tag2", count: 25},
        {id: 4, name: "tag22", count: 47},
        {id: 5, name: "tagTwo", count: 69},
        {id: 6, name: "tagUno", count: 9},]

    const maxCount = tagsSet.reduce((acc, cur) => {return Math.max(acc, cur.count)}, 0);
    const generateFontSize = (count) => {
        return 1.2 + (3.5 / maxCount) * count;
    }
    return (

        <Card className="h-100 text-center">
            <Card.Body>
                {tagsSet.map(tag => <a
                    href="#"
                    className="text-justify"
                    style={{
                        "line-height": "0.7em",
                        "display": "inline-block",
                        "font-size": generateFontSize(tag.count) + "em",
                        "text-decoration": "none",
                        "color":'#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6),
                    }}
                    >{tag.name}</a>)}
            </Card.Body>
        </Card>

    )
}
