import { Box, Button } from '@mui/material';
import Column from './Column/Column';
import AddCircleIcon from '@mui/icons-material/AddCircle';
function ListColumns() {
  return (
    <Box
      sx={{
        bgcolor: 'inherit',
        width: '100%',
        height: '100%',
        overflowX: 'auto',
        overflowY: 'hidden',
        display: 'flex',
        '&::-webkit-scrollbar-track': { m: 2 },
      }}
    >
      <Column />
      <Column />

      <Box
        sx={{
          minWidth: '200px',
          maxWidth: '200px',
          mx: 2,
          borderRadius: '6px',
          height: 'fit-content',
          bgcolor: '#ffffff3d',
        }}
      >
        <Button
          startIcon={<AddCircleIcon />}
          sx={{ color: 'white', width: '100%', justifyContent: 'flex-start', pl: 2.5, py: 1 }}
        >
          Add new column
        </Button>
      </Box>
    </Box>
  );
}

export default ListColumns;
