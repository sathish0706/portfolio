import React from 'react';
import './App.css';
import Sidebar from './Sidebar'
import About from './About';
import Education from './Education'
import Interests from './Interests';
import { Routes, Route } from 'react-router-dom';
import Skills from './Skills';


function App () {
    return<div className='App'>
        <Sidebar/>
        <Routes>
        
            <Route path='about' element={<About />} />
            <Route path='education' element={<Education />} />
            <Route path='interests' element={<Interests />} />
            <Route path='skills' element={<Skills />} />

        </Routes>

        
        
        
    </div>
}
export default App;


