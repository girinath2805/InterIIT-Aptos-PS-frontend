import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function SendTipDialog({ handleClickOpen, handleClose, open }) {

    return (
        <React.Fragment>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Send Tips</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Enter your amount
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="in APT"
                        type="text"
                        fullWidth
                        variant="standard"
                        inputProps={{
                            step: "any",
                        }}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleClose}>Send</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}