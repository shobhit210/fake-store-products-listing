import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ComingSoonModal from './ComingSoonModal';
import { Tooltip } from '@mui/material';

const Headbar = () => {

    const [open, setOpen] = useState(false)

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    return (
        <>
            <AppBar position="sticky" color="secondary">
                <Toolbar>

                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} >
                        Sho's Store
                    </Typography>

                    <Box>
                        <Tooltip title="Messages">
                            <IconButton size="large" color="inherit" onClick={handleOpen}>
                                <MailIcon />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Notifications">
                            <IconButton size="large" color="inherit" onClick={handleOpen}>
                                <NotificationsIcon />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Cart">
                            <IconButton size="large" color="inherit" onClick={handleOpen}>
                                <ShoppingCartIcon />
                            </IconButton>
                        </Tooltip>
                    </Box>
                    
                </Toolbar>
            </AppBar>
            {
                open ? <ComingSoonModal open={open} handleClose={handleClose} /> : ''
            }
        </>
    )
}

export default Headbar