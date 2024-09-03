import React, { useState, useEffect } from 'react';
import '../index.css'
import { setTheme } from '../theme.js';

function Toggle() {
    const [togClass, setTogClass] = useState('dark');

    useEffect(() => {
        const currentTheme = localStorage.getItem('theme');
        if (currentTheme) {
            setTogClass(currentTheme === 'theme-dark' ? 'dark' : 'light');
        }
    }, []);

    const handleOnClick = () => {
        if (togClass === 'dark') {
            setTheme('theme-light');
            setTogClass('light');
        } else {
            setTheme('theme-dark');
            setTogClass('dark');
        }
    };

    return (
        <div className="container--toggle">
            <input
                type="checkbox"
                id="toggle"
                className="toggle--checkbox"
                onClick={handleOnClick}
                checked={togClass === 'light'}
            />
            <label htmlFor="toggle" className="toggle--label">
                <span className="toggle--label-background"></span>
            </label>
        </div>
    );
}

export default Toggle;
