import React, { useState } from 'react';

const ShortForm = () => {
    const [firstName, set_firstName] = useState('');
    const [lastName, set_lastName] = useState('');
    const [email, set_email] = useState('');
    const [password, set_password] = useState('');

    const submit = (event) => {
        event.preventDefault();
        const data = {
            firstName, lastName, email, password
        };

        console.log(data);
    };

    return (
        <div className='border p-5 rounded-md'>
            <form onSubmit={submit}>
                <div className='flex flex-col items-start mb-2'>
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" name="firstName" id="firstName"
                        onBlur={(e) => set_firstName(e.target.value)}
                        className='border rounded-md'
                    />
                </div>
                <div className='flex flex-col items-start mb-2'>
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" name="lastName" id="lastName"
                        onBlur={(e) => set_lastName(e.target.value)}
                        className='border rounded-md'
                    />
                </div>
                <div className='flex flex-col items-start mb-2'>
                    <label htmlFor="email">Email Name</label>
                    <input type="email" name="email" id="email"
                        onBlur={(e) => set_email(e.target.value)}
                        className='border rounded-md'
                    />
                </div>
                <div className='flex flex-col items-start'>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password"
                        onBlur={(e) => set_password(e.target.value)}
                        className='border rounded-md'
                    />
                </div>
                <button type='submit' className='bg-blue-400 rounded-md px-2 mt-2 border'>Submit</button>
            </form>
        </div>
    );
};

export default ShortForm;