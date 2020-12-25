import React, {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
import {Table, Modal} from 'react-bootstrap';

export default function GamePage() {
    const {gameId} = useParams();
    const myFigure = 'x' || 'o';
    const winCells = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
    // eslint-disable-next-line
    let winner = false; // STATE

    const [show, setShow] = useState(false);
    const [field, setField] = useState([0,0,0,0,0,0,0,0,0]);

    const handleShow = () => setShow(true);

    const handleClick = event => {
        const tempField = [...field];
        tempField[event.target.dataset.x] = myFigure;
        setField(tempField);
    };
    const checkWin = () => {
        for (var i in winCells) {
            if (field[winCells[i][0]] === field[winCells[i][1]] &&
                field[winCells[i][0]] === field[winCells[i][2]] &&
                field[winCells[i][0]] !== 0) {
                return field[winCells[i][0]];
            }
        }
        return false;
    }
    useEffect(() => {
        for (var i in field) {
            let slot = document.getElementById('td' + i);
            if (field[i] === 'x'){slot.classList.add('bg-warning')}
            else if (field[i] === 'o') {slot.classList.add('bg-danger')}
            winner = checkWin();
            if (winner){handleShow()}
        }
    })
    return (
        <div className="text-center my-2">
            <h2 className="text-center my-1"> Game name belief, Lorem Ipsum is not simply random text  ID:{gameId}</h2>
            <div className="d-inline"> tag1 tag2 tag3</div>
            <h3 className="text-center my-1 font-weight-bold"> [X] USER000 vs USER001 [O] </h3>
            <Table  bordered className="game-field mx-auto my-4 bg-dark">
                <tbody className="border">
                    <tr>
                        <td id="td0" data-x="0" role="button" onClick={handleClick}></td>
                        <td id="td1" data-x="1" role="button" onClick={handleClick}></td>
                        <td id="td2" data-x="2" role="button" onClick={handleClick}></td>
                    </tr>
                    <tr>
                        <td id="td3" data-x="3" role="button" onClick={handleClick}></td>
                        <td id="td4" data-x="4" role="button" onClick={handleClick}></td>
                        <td id="td5" data-x="5" role="button" onClick={handleClick}></td>
                    </tr>
                    <tr>
                        <td id="td6" data-x="6" role="button" onClick={handleClick}></td>
                        <td id="td7" data-x="7" role="button" onClick={handleClick}></td>
                        <td id="td8" data-x="8" role="button" onClick={handleClick}></td>
                    </tr>
                </tbody>
            </Table>
            <Modal show={show} backdrop="static" keyboard={false}>
                <Modal.Body>
                    <Modal.Title id="example-modal-sizes-title-sm">
                        WIN USERXXXX00 TITLE
                    </Modal.Title>
                    <p>WIN USERXXXX00 INFO</p>
                    <a href="/" className="btn btn-sm btn-dark"> Back to Main</a>
                </Modal.Body>
            </Modal>
        </div>
    )
}
