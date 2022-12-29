import React from 'react'
import { Box, Typography } from '@mui/material'
import useStyles from '../shared-features/sharedStyles'

const Footer = () => {
    const classes = useStyles()
    return (
        <Box className={classes.footerParent}>
            <Typography fontWeight='bold' fontFamily='Montserrat'>
                @ 2022 Sho's Store.
            </Typography>

        </Box>
    )
}

export default Footer