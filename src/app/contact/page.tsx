'use client'
import React, { useState } from 'react';


import '../register/styles.scss';

export default function RegisterModal({ }) {

        const handleSubmit = (e: React.FormEvent) => {
            e.preventDefault();
        };
    

    return (
        <div className='register'>
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
                        type="text"
                        id="message"
                        required
                    />
                </div>
                <div className='btn-wrapper'>
                    <button className="btn btn-dark" onClick={handleSubmit}>Send</button>
                </div>
            </form>
        </div>

    )
}