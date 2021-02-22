import React, { useState, useEffect } from 'react';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/_app.scss';

function ThemeChanger() {

    const [theme, setTheme] = useState('light')

    const changeTheme = () => setTheme(
        theme === 'light' ? 'dark' : 'light'
    )

    useEffect(() => {
        if (theme === 'dark') {
            document.body.className = "dark-mode";
            document.querySelector("button.icon").style.color = "#FFA500";
        } else {
            document.body.className = "light-mode";
             document.querySelector("button.icon").style.color = "#000";
        }
    });

    return (
        <div>

            <FontAwesomeIcon icon={theme === 'dark' ? faSun : faMoon} onClick={changeTheme} />
        </div>

    )
}

export default ThemeChanger;