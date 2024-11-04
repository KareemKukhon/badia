import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import HandshakeIcon from '@mui/icons-material/Handshake';
import "./style.css"

export default function Header() {
  return (
    <Box display={"flex"} justifyContent={"space-between"} width={"100%"}>
        <Button>
            <HandshakeIcon></HandshakeIcon>
            <Typography>سلم</Typography>
        </Button>
        <Box className="bgImage"></Box>
    </Box>
  )
}
