import React, {useState} from 'react';
import {Card, Button, Modal} from 'react-bootstrap';

import CreateForm from './CreateForm';

export default function MainMenu() {
    const [showCreateForm, setShowCreateForm] = useState(false);
    return (

        <Card className="my-1">

            <Card.Body>
                <Card.Subtitle className="my-2 text-muted">
                    You can create a new game or join an existing one
                </Card.Subtitle>
                <Button variant="dark" onClick={()=>setShowCreateForm(true)} className="my-3"> 
                    Сreate a new game
                </Button>
            </Card.Body>

            <Modal size="sm" show={showCreateForm} onHide={() => setShowCreateForm(false)}>
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-sm">
                        CREATE
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <CreateForm />
                </Modal.Body>
            </Modal>

        </Card>

    )
}
