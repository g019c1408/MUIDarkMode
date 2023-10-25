import React, { useEffect, useState } from 'react';
import { ThemeProvider, createTheme, CssBaseline, PaletteMode, Switch } from '@mui/material';

const paletteModes = ['light', 'dark'];
const paletteModeStorageKey = 'palette_mode';

function DarkTest(props: { children: React.ReactNode }) {
    const prefersPaletteMode = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    const [paletteMode, setPaletteMode] = useState<PaletteMode>(prefersPaletteMode);
    const [isDarkMode, setIsDarkMode] = useState(paletteMode === 'dark');

    const theme = createTheme({
        palette: {
            mode: paletteMode,
        },
    });

    useEffect(() => {
        const storedPaletteMode = localStorage.getItem(paletteModeStorageKey) || prefersPaletteMode;
        if (['light', 'dark'].includes(storedPaletteMode)) {
            setPaletteMode(storedPaletteMode as PaletteMode);
            setIsDarkMode(storedPaletteMode === 'dark');
            localStorage.setItem(paletteModeStorageKey, storedPaletteMode);
        }
    }, [prefersPaletteMode]);

    const handleChangePaletteMode = () => {
        const newPaletteMode = isDarkMode ? 'light' : 'dark';
        setPaletteMode(newPaletteMode);
        setIsDarkMode(newPaletteMode === 'dark');
        localStorage.setItem(paletteModeStorageKey, newPaletteMode);
    };

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <div style={{ padding: '16px' }}>
                Palette Mode:
                <Switch checked={isDarkMode} onChange={handleChangePaletteMode} />
                {paletteMode}
            </div>
            {props.children}
        </ThemeProvider>
    );
}

export default DarkTest;
