import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import { PlayArrow } from '@mui/icons-material';
import { Tabs, Tab } from '@mui/material';
import { Audio } from 'react-loader-spinner';
import Title from './Title';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import PauseRounded from '@mui/icons-material/PauseRounded';
import PlayArrowRounded from '@mui/icons-material/PlayArrowRounded';
import FastForwardRounded from '@mui/icons-material/FastForwardRounded';
import FastRewindRounded from '@mui/icons-material/FastRewindRounded';
import VolumeUpRounded from '@mui/icons-material/VolumeUpRounded';
import VolumeDownRounded from '@mui/icons-material/VolumeDownRounded';
import { createTheme, useTheme } from '@mui/system';

const TinyText = styled(Typography)({
    fontSize: '0.75rem',
    opacity: 0.38,
    fontWeight: 500,
    letterSpacing: 0.2,
});



const Demo = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
}));

const Uploads = () => {
    const theme = useTheme();
    const [tabValue, setTabValue] = useState(0);
    const handleChangeTab = (event, newValue) => {
        setTabValue(newValue);
    };
    const duration = 200; // seconds
    const [position, setPosition] = React.useState(32);
    const [paused, setPaused] = React.useState(false);
    function formatDuration(value) {
        const minute = Math.floor(value / 60);
        const secondLeft = value - minute * 60;
        return `${minute}:${secondLeft < 10 ? `0${secondLeft}` : secondLeft}`;
    }

    const mainIconColor = theme.palette.mode === 'dark' ? '#fff' : '#000';
    const lightIconColor =
        theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.4)';
    const [currentlyPlaying, setCurrentlyPlaying] = useState(null);

    const handlePlayClick = (songIndex) => {
        if (currentlyPlaying === songIndex) {
            setCurrentlyPlaying(null);
        } else {
            setCurrentlyPlaying(songIndex);
        }
    };

    const generate = (element) => {
        return [0, 1, 2, 3, 4, 5, 6, 7].map((value) =>
            React.cloneElement(element, {
                key: value,
                onClick: () => handlePlayClick(value),
                isPlaying: currentlyPlaying === value,
            }),
        );
    };

    const SongListItem = ({ onClick, isPlaying, ...otherProps }) => (
        <>
            <ListItem >
                <ListItemAvatar sx={{ cursor: 'pointer' }} onClick={onClick} {...otherProps}>
                    {isPlaying ? <Audio
                        height="25"
                        width="40"
                        radius="9"
                        color='green'
                        ariaLabel='three-dots-loading'
                        wrapperStyle
                        wrapperClass
                    /> : <Avatar><PlayArrow /></Avatar>}
                </ListItemAvatar>

                <ListItemText
                    primary="Single-line item"
                    secondary={tabValue === 0 ? 'Unpaid content' : 'Paid content'}
                />

            </ListItem>
            {isPlaying &&
                <Box sx={{ width: 300, alignItems: 'center', mx: 10 }}>
                    <Slider
                        aria-label="time-indicator"
                        size="small"
                        value={position}
                        min={0}
                        step={1}
                        max={duration}
                        onChange={(_, value) => setPosition(value)}
                        sx={{
                            color: theme.palette.mode === 'dark' ? '#fff' : 'rgba(0,0,0,0.87)',
                            height: 4,
                            '& .MuiSlider-thumb': {
                                width: 8,
                                height: 8,
                                transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
                                '&:before': {
                                    boxShadow: '0 2px 12px 0 rgba(0,0,0,0.4)',
                                },
                                '&:hover, &.Mui-focusVisible': {
                                    boxShadow: `0px 0px 0px 8px ${theme.palette.mode === 'dark'
                                        ? 'rgb(255 255 255 / 16%)'
                                        : 'rgb(0 0 0 / 16%)'
                                        }`,
                                },
                                '&.Mui-active': {
                                    width: 20,
                                    height: 20,
                                },
                            },
                            '& .MuiSlider-rail': {
                                opacity: 0.28,
                            },
                        }}
                    />
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            mt: -2,
                        }}
                    >
                        <TinyText>{formatDuration(position)}</TinyText>
                        <TinyText>-{formatDuration(duration - position)}</TinyText>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            mt: -1,
                        }}
                    >
                        <IconButton aria-label="previous song">
                            <FastRewindRounded fontSize="large" htmlColor={mainIconColor} />
                        </IconButton>
                        <IconButton
                            aria-label={paused ? 'play' : 'pause'}
                            onClick={() => setPaused(!paused)}
                        >
                            {paused ? (
                                <PlayArrowRounded
                                    sx={{ fontSize: '3rem' }}
                                    htmlColor={mainIconColor}
                                />
                            ) : (
                                <PauseRounded sx={{ fontSize: '3rem' }} htmlColor={mainIconColor} />
                            )}
                        </IconButton>
                        <IconButton aria-label="next song">
                            <FastForwardRounded fontSize="large" htmlColor={mainIconColor} />
                        </IconButton>
                    </Box>
                    <Stack spacing={2} direction="row" sx={{ mb: 1, px: 1 }} alignItems="center">
                        <VolumeDownRounded htmlColor={lightIconColor} />
                        <Slider
                            aria-label="Volume"
                            defaultValue={30}
                            sx={{
                                color: theme.palette.mode === 'dark' ? '#fff' : 'rgba(0,0,0,0.87)',
                                '& .MuiSlider-track': {
                                    border: 'none',
                                },
                                '& .MuiSlider-thumb': {
                                    width: 24,
                                    height: 24,
                                    backgroundColor: '#fff',
                                    '&:before': {
                                        boxShadow: '0 4px 8px rgba(0,0,0,0.4)',
                                    },
                                    '&:hover, &.Mui-focusVisible, &.Mui-active': {
                                        boxShadow: 'none',
                                    },
                                },
                            }}
                        />
                        <VolumeUpRounded htmlColor={lightIconColor} />
                    </Stack>
                </Box>}
        </>
    );



    return (
        <React.Fragment>
            <Box sx={{ width: 'full' }}>
                <Title>Your songs</Title>
                <Tabs value={tabValue} onChange={handleChangeTab} aria-label="content tabs" centered>
                    <Tab label="Unpaid" />
                    <Tab label="Paid" />
                </Tabs>
                <TabPanel value={tabValue} index={0}>
                    <Title>Your Unpaid Songs</Title>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <Demo>
                                <List dense>{generate(<SongListItem />)}</List>
                            </Demo>
                        </Grid>
                    </Grid>
                </TabPanel>
                <TabPanel value={tabValue} index={1}>
                    <Title>Your Paid Songs</Title>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <Demo>
                                {/* You can reuse the same SongListItem component for paid content */}
                                <List dense>{generate(<SongListItem />)}</List>
                            </Demo>
                        </Grid>
                    </Grid>
                </TabPanel>
            </Box>
        </React.Fragment>
    );
};

const TabPanel = (props) => {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`content-tabpanel-${index}`}
        aria-labelledby={`content-tab-${index}`}
        {...other}
      >
        {value === index && <Box p={3}>{children}</Box>}
      </div>
    );
  };

export default Uploads;
