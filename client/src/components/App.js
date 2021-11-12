import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Landing from './pages/Landing';
import About from './pages/About';
import Shop from './shop/Shop';

const App = () => {
    return (
        <BrowserRouter>
            <div>
                <Routes>
                    <Route exact path="/" component={Landing} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/shop" component={Shop} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App;