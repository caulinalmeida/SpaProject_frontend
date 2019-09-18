import React, {useState} from 'react';

import api from '../services/api';

import './firstpage.css'

import logo from '../assets/logo.svg';




export default function First({history}) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();
        
        const response = await api.post('/autenticacao', {email: username,senha: password});
        
        const { token } = response.data;
        localStorage.setItem('token', token);

        const vToken = localStorage.getItem('token');
        const verifyToken = await api.get('/verify', {
            headers: {
                Authorization: `Bearer ${vToken}`
            }
        });

        const { status } = verifyToken.status;
        console.log(status);

        if (!status === 200) {
            return
        }else{
            history.push(`/second/${status}`);
        }
        
        
        
    }

    return(
        <div className="f-container">
            <form onSubmit={handleSubmit}>
                <img src={logo} alt="logo" className="logo"/>
                <input 
                    type="text" 
                    name="login" 
                    placeholder="Digite seu Usuario"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    
                />
                <input 
                    type="password" 
                    name="senha"
                    placeholder="Digite sua Senha"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <button type="submit">Entrar</button>
            </form>
        </div>
    );
}
