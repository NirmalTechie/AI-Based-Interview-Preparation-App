// Frontend - Authentication (React)
import React, { useState } from 'react';
import axios from 'axios';

const Auth = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLogin, setIsLogin] = useState(true);
    const [message, setMessage] = useState('');

    const handleAuth = async () => {
        try {
            const endpoint = isLogin ? '/login' : '/register';
            const response = await axios.post(`http://localhost:5000${endpoint}`, { email, password });
            setMessage(response.data.message || 'Success');
        } catch (error) {khgyv 
            kjbjjb
            setMessage(error.response?.data?.error || 'An error occurred');
        }
    };

    return (
        <div>
            <h2>{isLogin ? 'Login' : 'Register'}</h2>
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleAuth}>{isLogin ? 'Login' : 'Register'}</button>
            <p onClick={() => setIsLogin(!isLogin)}>
                {isLogin ? 'Need an account? Register' : 'Already have an account? Login'}
            </p>
            <p>{message}</p>
        </div>
    );
};

export default Auth;
