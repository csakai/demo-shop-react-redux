import React from 'react';
import Header from './header/Header.jsx';
import Routes from '../routes.jsx';

const App = () =>
    <div>
        <Header />
        { Routes }
    </div>;

export default App;
