import React from 'react';
import img from './image/mypic.JPG';
import { useNavigate  } from 'react-router-dom';

function Sidebar() {
    const navigate = useNavigate();

    return <div className='sidebar-container'>

        <img src={img} alt='' id='img'></img>
        <div>
            <div className='text' onClick={()=>navigate('about')}> About </div>
            <div className='text' onClick={()=>navigate('education')}> Education </div>
            <div className='text' onClick={()=>navigate('skills')}> Skills </div>
            <div className='text' onClick={()=>navigate('interests')}> interests </div>
        </div>
    </div>;
}
export default Sidebar;
