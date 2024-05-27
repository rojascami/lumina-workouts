'use client'
import React, { useState, MouseEventHandler, useCallback, useRef, useEffect } from 'react';
import { useRouter } from "next/navigation";

import { Modal } from '../modal';

import '../../register/styles.scss';

export default function RegisterModal({ }) {

    const router = useRouter();
    const overlay = useRef(null);
    const wrapper = useRef(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    };

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

    return (
        <Modal onClick={onClick} >
            <div className='register'>
            <h2 className='heading-2'>Contact us</h2>
            
                <form onSubmit={handleSubmit} className='register__form'>
                    <div className='register__field'>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
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
                    <div className='register__field' id='contact-message'>
    
                     <label htmlFor="message">Message</label>
                        <input
                            type="textarea"
                            id="message"
                            required
                        />
                    </div>
                    <div className='btn-wrapper'>
                    <button className="btn btn-dark" onClick={handleSubmit}>Send</button>
                    </div>
                </form>
            </div>
        </Modal>
    )
}