import * as React from 'react';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import Visibility from '@mui/icons-material/Visibility';
import { Box } from '@mui/system';

export default function LiveCard() {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <Card
      sx={{
        minHeight: '280px',
        width: 320,
        cursor: 'pointer',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(10px)',
        borderRadius: '15px',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        transition: '0.5s',
        '&:hover': {
          boxShadow: `0 8px 32px 0 rgba(31, 38, 135, 0.37)`,
          backdropFilter: 'blur(8px)',
          border: '1px solid rgba(255, 255, 255, 0.3)',
        },
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardCover>
        <img
          src="https://images.unsplash.com/photo-1542773998-9325f0a098d7?auto=format&fit=crop&w=320"
          srcSet="https://images.unsplash.com/photo-1542773998-9325f0a098d7?auto=format&fit=crop&w=320&dpr=2 2x"
          loading="lazy"
          alt=""
        />
      </CardCover>
      <CardCover
        sx={{
          background: isHovered
            ? 'linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.8))'
            : 'linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.8))',
        }}
      />
      <CardContent sx={{ justifyContent: isHovered ? 'center' : 'flex-end' }}>
        {!isHovered && (
          <>
            <Typography level="title-lg" textColor="#fff">
              Yosemite National Park
            </Typography>
            <Typography
              startDecorator={<Visibility />}
              textColor="neutral.300"
            >
              11.4k
            </Typography>
          </>
        )}
        {isHovered && (
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
            <Typography level="title-lg" textColor="#fff" sx={{ fontSize: '2rem' }}>
              Listen
            </Typography>
          </Box>
        )}
      </CardContent>
    </Card>
  );
}
