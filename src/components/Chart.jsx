import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import { Button, Box, TextField, Typography } from '@mui/material';
import Title from './Title';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { FormControl, InputLabel, Select, MenuItem, Modal } from '@mui/material';

const Chart = () => {
    const theme = useTheme();
    const [isModalOpen, setModalOpen] = useState(false);
    const [fileupload, setfileupload] = useState(false);
    const [songName, setSongName] = useState('');
    const [selectedFile, setSelectedFile] = useState(null);
    const [nameerror, setNameerror] = useState(false)

    const handleOpenModal = () => {
        if (!songName) {
            setNameerror(true);
            return;
        }
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    const handleSongNameChange = (event) => {
        setSongName(event.target.value);
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        // Check if the file is an audio file (you can adjust the allowed file types)
        if (file && file.type.startsWith('audio/')) {
            setSelectedFile(file);
            setfileupload(true);
        } else {
            // Display an error message or handle the invalid file type case
            console.error('Invalid file type. Please upload an audio file.');
        }
    };

    const formatFileSize = (sizeInBytes) => {
        const fileSizeInKB = sizeInBytes / 1024;
        if (fileSizeInKB < 1024) {
            return `${fileSizeInKB.toFixed(2)} KB`;
        } else {
            const fileSizeInMB = fileSizeInKB / 1024;
            return `${fileSizeInMB.toFixed(2)} MB`;
        }
    };

    const handleUploadSong = () => {
        handleCloseModal()
        console.log(`Uploading song: ${songName}`);
        console.log(`Selected file: ${selectedFile.name}, Size: ${formatFileSize(selectedFile.size)}`);
        // Add your upload logic here
        setfileupload(false);
        setSongName('')
    };

    return (
        <React.Fragment>
            <Title>Upload songs</Title>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                {!fileupload && (
                    <Button component="label" variant="contained" sx={{ mt: 7 }}>
                        Upload file
                        <input type="file" accept="audio/*" hidden onChange={handleFileChange} />
                    </Button>
                )}
                {fileupload && (
                    <>
                        <TextField
                            label="Song Name"
                            variant="outlined"
                            fullWidth
                            value={songName}
                            onChange={handleSongNameChange}
                            error={nameerror}
                            helperText={nameerror && 'Song Name is required'}
                        />
                        <Typography style={{ marginTop: '8px' }} color='text.secondary'>
                            Selected File: {selectedFile.name}
                        </Typography>
                        <Typography style={{ marginTop: '8px' }} color='text.secondary'>
                            Size: {formatFileSize(selectedFile.size)}
                        </Typography>
                        <Button
                            component="label"
                            variant="contained"
                            startIcon={<CloudUploadIcon />}
                            onClick={handleOpenModal}
                        >
                            Upload song
                        </Button>
                    </>
                )}
            </Box>
            <Modal open={isModalOpen} onClose={handleCloseModal}>
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: 400,
                        bgcolor: 'background.paper',
                        boxShadow: 24,
                        p: 4,
                    }}
                >
                    <FormControl fullWidth>
                        <InputLabel id="content">Content type</InputLabel>
                        <Select
                            labelId="content"
                            id="content"
                            label="Content type"
                            onChange={(e) => setRole(e.target.value)}
                        >
                            <MenuItem value={10}>Paid</MenuItem>
                            <MenuItem value={20}>Unpaid</MenuItem>
                        </Select>
                    </FormControl>
                    <Button
                        variant="contained"
                        color="primary"
                        style={{ marginTop: '16px' }}
                        onClick={handleUploadSong}
                    >
                        Upload
                    </Button>
                </Box>
            </Modal>
        </React.Fragment>
    );
};

export default Chart;