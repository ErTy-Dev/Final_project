import React from 'react'
import classes from './Poisk.module.css'

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

function Poisk() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{
          bgcolor: 'background.paper',
          boxShadow: 1,
          maxWidth: 600,
          maxHeight: 1/200,
          margin: "0 auto",
          alignItems: "center",
        }}>
          <div className={classes.searchPage}>
            <div className={classes.search}>
              <input className={classes.searchInput} type="search" placeholder="Search"/>
            </div>
          </div>  
        </Box>
      </Modal>

      
    </div>
    
  )
}

export default Poisk