import React from 'react';
import Header from './Header';
import MyComponent from './First/Firstbox';
import './App.css';

const App = () => {
    return (
        <div className="App">
            <Header />
            <MyComponent />
        </div>
    );
};

export default App;