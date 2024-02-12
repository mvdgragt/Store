import { AppBar, Switch, Toolbar, Typography } from '@mui/material'
import React from 'react'

interface Props {
  darkmode: boolean,
  handleThemeChange: () => void;
}

function Header({darkmode, handleThemeChange} : Props) {

  return (
    <AppBar position='static' sx={{mb: 4}}>
        <Toolbar>
            <Typography variant='h6'>
                Bakverkstan
            </Typography>
            <Switch checked={darkmode} onChange={handleThemeChange}/>
        </Toolbar>
    </AppBar>
  )
}

export default Header