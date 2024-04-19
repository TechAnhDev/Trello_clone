import { Box } from '@mui/material';
function BoardContent() {
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#1976d2'),
      }}
    >
      BoardContent
    </Box>
  );
}

export default BoardContent;
