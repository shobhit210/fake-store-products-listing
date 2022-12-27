import { Box, Modal, Typography } from '@mui/material'
import React from 'react'
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: '#fff',
    borderRadius: '10px',
    boxShadow: 24,
    p: 4,
};

const ComingSoonModal = ({ open, handleClose }) => {
    return (
        <>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <Box sx={style}>
                    <Typography id="modal-modal-description" align="center" >
                        <ShoppingBagOutlinedIcon /><br />
                        Hang on!!! <br />
                        This feature is coming soon.
                    </Typography>
                </Box>
            </Modal>
        </>
    )
}

export default ComingSoonModal