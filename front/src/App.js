import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './componentes/Login/LoginPage';
import Profile from './componentes/profile/profilePage';
import ToPlay from './componentes/game/ToPlayPage';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' exact element={<Login />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/game' element={<ToPlay />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;


