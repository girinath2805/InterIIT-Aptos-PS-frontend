import React,{useState,useEffect} from 'react'
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import MicNoneIcon from '@mui/icons-material/MicNone';
import MicOffIcon from '@mui/icons-material/MicOff';

const Widget = styled('div')(({ theme }) => ({
  padding: 16,
  borderRadius: 16,
  width: 343,
  maxWidth: '100%',
  margin: 'auto',
  position: 'relative',
  zIndex: 1,
  backgroundColor:
    theme.palette.mode === 'dark' ? 'rgba(0,0,0,0.6)' : 'rgba(255,255,255,0.4)',
  backdropFilter: 'blur(40px)',
}));


const Stream = () => {
  const theme = useTheme();
  const [isMuted, setIsMuted] = useState(false);
  const [micAccess, setMicAccess] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [audioChunks, setAudioChunks] = useState([]);
  const [audioUrl, setAudioUrl] = useState(null);

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ audio: true })
      .then(stream => {
        const newMediaRecorder = new MediaRecorder(stream);
        setMediaRecorder(newMediaRecorder);
        setMicAccess(true);
      })
      .catch(err => {
        console.error(err);
        setMicAccess(false);
      });
  }, []);

  useEffect(() => {
    if (mediaRecorder) {
      mediaRecorder.ondataavailable = handleDataAvailable;
      mediaRecorder.onstop = handleStop;
    }
  }, [mediaRecorder]);

  const handleDataAvailable = (event) => {
    setAudioChunks(audioChunks => [...audioChunks, event.data]);
  };

  const handleStop = () => {
    const audioBlob = new Blob(audioChunks);
    const audioUrl = URL.createObjectURL(audioBlob);
    setAudioUrl(audioUrl);  // Save the audio URL in the state
  };

  const handleMute = () => {
    if (mediaRecorder.state === 'recording') {
      mediaRecorder.stop();
    } else {
      mediaRecorder.start();
    }
    setIsMuted(!isMuted);
  };


  const mainIconColor = theme.palette.mode === 'dark' ? '#fff' : '#000';
  const lightIconColor =
    theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.4)';
  return (
    <div className='flex h-auto my-[10rem] items-center justify-center'>
      <Box sx={{ display: 'flex', width: '100%', overflow: 'hidden', flexDirection: 'column' }}>
        <Widget>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ ml: 1.5, minWidth: 0 }}>
              <Typography variant="caption" color="text.secondary" fontWeight={500}>
                Artist
              </Typography>
              <Typography noWrap>
                <b>Stream name</b>
              </Typography>
              <Typography noWrap letterSpacing={-0.25}>
                Tag
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', ml: 1, mt: 2 ,mb:-1}}>
            <span className='h-3 w-3 bg-red-600 rounded-full animate-blink'></span>
            <Typography variant="body2" color="text.secondary" fontWeight={500} sx={{ ml: 1 }}>
              Live
            </Typography>
          </Box>
          
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              mt:1,
            }}
          >
          </Box>
          <Stack spacing={2} direction="row" sx={{ mb: 1, px: 1, mt:1 }} alignItems="center">
            {micAccess ? (
              <>
                {isMuted ? (
                  <MicOffIcon htmlColor={lightIconColor} onClick={handleMute} className='cursor-pointer' />
                ) : (
                  <MicNoneIcon htmlColor={lightIconColor} onClick={handleMute} className='cursor-pointer' />
                )}
              </>
            ) : (
              <Typography variant="body2" color="text.secondary">
                Microphone access denied
              </Typography>
            )}
            
          </Stack>
          {audioUrl && <audio src={audioUrl} controls />}  {/* Audio player */}
        </Widget>
      </Box>
    </div>
  )
}
export default Stream
