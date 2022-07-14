import React from 'react';
import {BsFillMoonStarsFill, BsFillSunFill} from 'react-icons/bs'
import UseDarkMode from './UseDarkMode';

const Header = () => {
    const [isDarkMode,setDarkMode] = UseDarkMode()
	return (
		<div className='header'>
			<h1 style={{color: isDarkMode?'#FAF9F6':'#28282B'}}><span className='my' style={{color: isDarkMode?'aquamarine':'#289D8C'}}>My</span>&nbsp;Notes</h1>
            <button className="toggle_btn" onClick={()=>setDarkMode(!isDarkMode)} style={{backgroundColor: isDarkMode?'#28282B':'#FAF9F6'}}>
                {isDarkMode? (
                    <BsFillSunFill size={'2em'} title="Switch to light mode" style={{color:"white"}}/>
                ) : (
                    <BsFillMoonStarsFill size={'2em'} title="Switch to dark mode" />
                )}
          </button>
		</div>
	);
};

export default Header;