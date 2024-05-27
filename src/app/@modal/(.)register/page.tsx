'use client'
import { Modal } from '../modal';
import React, { useState, MouseEventHandler, useCallback, useRef, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from "next/navigation";

import '../../register/styles.scss';

export default function RegisterModal({ }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [login, setLogin] = useState(false);

    const overlay = useRef(null);
    const wrapper = useRef(null);
    const router = useRouter();

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    };

    const handleSetLogin = () => {

        setLogin(!login);

    }


    const onDismiss = useCallback(() => {
        router.back();
    }, [router]);

    const onClick: MouseEventHandler = useCallback(
        (e) => {
            if (e.target === overlay.current || e.target === wrapper.current) {
                if (onDismiss) onDismiss();
            }
        },
        [onDismiss, overlay, wrapper]
    );

    const onKeyDown = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === "Escape") onDismiss();
        },
        [onDismiss]
    );

    useEffect(() => {
        document.addEventListener("keydown", onKeyDown);
        return () => document.removeEventListener("keydown", onKeyDown);
    }, [onKeyDown]);



    return (
        <Modal onClick={onClick} >
            <div className='register'>
                <form onSubmit={handleSubmit} className='register__form'>
                    <div className='register__field'>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={handleEmailChange}
                            required
                        />
                    </div>

                    <div className='register__field'>
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={handlePasswordChange}
                            minLength={6}
                            required
                        />
                    </div>
                    {!login &&
                        <>
                            <div className='register__field'>
                                <label htmlFor="confirm-password">Confirm Password</label>
                                <input
                                    type="password"
                                    id="confirm-password"
                                    minLength={6}
                                    required
                                />
                            </div>
                            <div className='register__field'>
                                <label htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    required
                                />
                            </div>
                            <div className='register__field'>
                                <label htmlFor="phone">Phone</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    required
                                />
                            </div>
                            <div className='register__field'>
                                <label htmlFor="address">Address</label>
                                <input
                                    type="text"
                                    id="address"
                                    required
                                />
                            </div> </>}
                    {!login ? <div className="btn-wrapper">
                        <button className="btn btn-dark">Register</button>
                        <p className="p">Already have an account?</p>
                        <button className="btn btn-dark" onClick={handleSetLogin}>Login</button>
                    </div>
                        :
                        <div className="btn-wrapper">

                            <button className="btn btn-dark">Login</button>
                            <p className="p">New here?</p>
                            <button className="btn btn-dark" onClick={handleSetLogin}>Register</button>

                        </div>}
                </form>
            </div>
        </Modal>
    )
}