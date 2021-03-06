import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Header from './Header';
import Landing from './pages/Landing';
import About from './pages/About';
import Shop from './shop/Shop';
import Chatbot from './chatbot/Chatbot';

import '../css/style.css';
import '../js/fuctions.js';
import Footer from './Footer';

const App = () => (
        <BrowserRouter>
            <div>
            <Header/>
                <Routes>
                    <Route exact path="/"  element={<Landing />}/>
                    <Route exact path="/about" element={<About/>} />
                    <Route exact path="/shop" element={<Shop/>} />
                </Routes>
            <Chatbot/>
            <Footer/>
            </div>
            
        </BrowserRouter>
    )

export default App;