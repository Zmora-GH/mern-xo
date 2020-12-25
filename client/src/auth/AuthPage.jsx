import React, {useState} from 'react';
import {Modal} from 'react-bootstrap';

import LoginForm from './LoginForm';
import RegForm from './RegForm';

export default function AuthPage() {
    const [showLogin, setShowLogin] = useState(false);
    const [showReg, setShowReg] = useState(false);

    return (
        <div className="d-fle text-center hvh">
            <div className="cover-container d-flex w-100 h-100  mx-auto flex-column py-5">
                <h2 className="my-3"> Welcome to the website of the Professional League of Tic-Tac-Toe </h2>
                <h5 className="my-3"> Please sign in to play </h5>
                <p className="lead my-3">
                    <button className="btn btn-dark fw-bold bg-success mx-2" onClick={()=>setShowLogin(true)} href="#">
                        SignIn
                    </button>
                    <button className="btn btn-dark fw-bold bg-success mx-2" onClick={()=>setShowReg(true)} href="#">
                        SignUp
                    </button>
                </p>
            </div>
            <div>
                <Modal
                    size="sm"
                    show={showLogin}
                    onHide={() => setShowLogin(false)}
                    backdrop="static"
                    keyboard={false}
                    >
                    <Modal.Header closeButton>
                        <Modal.Title id="example-modal-sizes-title-sm">
                            SignIn
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <LoginForm />
                    </Modal.Body>
                </Modal>

                <Modal
                    size="sm"
                    show={showReg}
                    onHide={() => setShowReg(false)}
                    backdrop="static"
                    keyboard={false}
                    >
                    <Modal.Header closeButton>
                        <Modal.Title id="example-modal-sizes-title-lg">
                            SignUp
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <RegForm />
                    </Modal.Body>
                </Modal>
            </div>
        </div>
    )
}
