import { useState } from 'react';
import { DarkModeToggle } from '@anatoliygatt/dark-mode-toggle';
import './DarkLightTheme.css';
import React from 'react';

const DarkLightTheme = () => {
  const [mode, setMode] = useState('dark');
  return (
    <DarkModeToggle mode={mode}
    dark="Dark"
    light="Light"
    size="sm"
    inactiveTrackColor="#e2e8f0"
    inactiveTrackColorOnHover="#f8fafc"
    inactiveTrackColorOnActive="#cbd5e1"
    activeTrackColor="#334155"
    activeTrackColorOnHover="#1e293b"
    activeTrackColorOnActive="#0f172a"
    inactiveThumbColor="#1e293b"
    activeThumbColor="#e2e8f0"
    onChange={(mode) => {
        setMode(mode);
    }}>
      
    </DarkModeToggle>
  )
}

export default DarkLightTheme