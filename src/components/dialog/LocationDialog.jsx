import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import InputAdornment from '@mui/material/InputAdornment';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import RoomOutlined from '@mui/icons-material/RoomOutlined';
import TagOutlinedIcon from '@mui/icons-material/TagOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

import RatingStars from "./RatingStars";
import './dialog.css'

export default function LocationDialog() {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
        
        
            <Button className="btn" variant="outlined" onClick={handleClickOpen}>
                Add Place
            </Button>

            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Add a Place</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                    
                    </DialogContentText>

                    <div className="review-container">

                        <div className="Notes">
                            <label className="labeldesc"></label>
                            <div className="Place">
                                <TextField
                                    id="standard-disabled"
                                    id="input-with-icon-textfield"
                                    InputProps={{
                                        startAdornment: (
                                        <InputAdornment position="start">
                                          <RoomOutlined />
                                        </InputAdornment>),
                                    }}
                                    variant="standard"
                                    type="text"
                                    placeholder="name"
                                    onChange={(event) => {
                                        const value = event.target.value;
                                        this.setState({address: value});
                                    }}
                                />
                            </div>
                        </div>

                        <div className="review-container">
                            <label className="labeldesc"></label>
                            <div className="tags">
                                <TextField
                                    id="standard-disabled"
                                    id="input-with-icon-textfield"
                                    InputProps={{
                                        startAdornment: (
                                        <InputAdornment position="start">
                                          <TagOutlinedIcon />
                                        </InputAdornment>),
                                    }}
                                    variant="standard"
                                    rows="4"
                                    cols="30"
                                    placeholder="add filters"
                                    onChange={(event) => {
                                        const value = event.target.value;
                                        this.setState({review: value});
                                    }}/>
                            </div>
                        </div>

                        <div className="review-container">
                            <label className="labeldesc"></label>
                            <div className="description">
                                <TextField
                                    id="standard-disabled"
                                    id="input-with-icon-textfield"
                                    InputProps={{
                                        startAdornment: (
                                        <InputAdornment position="start">
                                          <EditOutlinedIcon />
                                        </InputAdornment>),
                                    }}
                                    variant="standard"
                                    rows="4"
                                    cols="30"
                                    placeholder="add notes"
                                    onChange={(event) => {
                                        const value = event.target.value;
                                        this.setState({review: value});
                                    }}/>
                            </div>
                        </div>
                        
                        <div className="review-container">
                            <label className="labeldesc"></label>
                            <RatingStars/>
                        </div>
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Save</Button>
                    <Button onClick={handleClose}>Discard</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}  //<StarRating/>