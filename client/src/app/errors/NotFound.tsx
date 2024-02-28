import { Button, Container, Divider, Paper, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
<Container component={Paper} sx={{height:400}}>
<Typography gutterBottom variant='h3'>Oops - We could not find what you are looking for</Typography>
<Divider />
<Button component={Link} to='/catalog' fullWidth>Go back to shop</Button>
</Container>
    )
}

export default NotFound