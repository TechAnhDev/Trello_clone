import { Box } from '@mui/material';
import ListColumns from './ListColumns/ListColumns';

function BoardContent() {
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        height: (theme) => theme.trelloCustom.boardContentHeight,
        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#1976d2'),
        p: '10px 0',
      }}
    >
      {/* {Box column} */}

      <ListColumns />
    </Box>
  );
}

export default BoardContent;
