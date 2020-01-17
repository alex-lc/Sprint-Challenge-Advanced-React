import React, { useState } from 'react';
import styled from 'styled-components';

// hooks
import { useDarkMode } from '../hooks/useDarkMode';

// assets
import Moon from '../img/moon.svg';
import Sun from '../img/sun.svg';

const ThemeContainer = styled.div`
    img {
        width: 3rem;
        transition: all 300ms;

        &:hover {
        transition: opacity 300ms;
        opacity: 0.5;
        cursor: pointer;
        }
    }
`;

const ThemeChanger = () => {
    const [darkMode, setDarkMode] = useDarkMode();

    const toggleDay = e => {
        setDarkMode(!'dark-mode');
    };

    const toggleNight = e => {
        setDarkMode('darkMode');
    };

    return (
        <ThemeContainer data-testid="themeChanger">
            <img onClick={toggleNight} src={Moon} alt="Night Mode" />
            <img onClick={toggleDay} src={Sun} alt="Day Mode" />
        </ThemeContainer>
    )
}

export default ThemeChanger;