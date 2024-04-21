import { Box, Tooltip } from '@mui/material';
import Chip from '@mui/material/Chip';
import DashboardIcon from '@mui/icons-material/Dashboard';
import VpnLockIcon from '@mui/icons-material/VpnLock';
import AddToDriveIcon from '@mui/icons-material/AddToDrive';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Button from '@mui/material/Button';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';

const MENU_STYLE = {
  color: 'white',
  bgcolor: 'transparent',
  border: 'none',
  paddingX: '5px',
  '& .MuiSvgIcon-root': {
    color: 'white',
  },
  '&:hover': {
    bgcolor: 'primary.50',
  },
};

function BoardBar() {
  return (
    <Box
      px={2}
      sx={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        height: (theme) => theme.trelloCustom.boardBarHeight,
        justifyContent: 'space-between',
        gap: 2,
        overflow: 'auto',
        borderBottom: '1px solid white',
        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#1976d2'),
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Chip sx={MENU_STYLE} clickable icon={<DashboardIcon />} label="vanhveo" />
        <Chip sx={MENU_STYLE} clickable icon={<VpnLockIcon />} label="Public/Private Workspace" />
        <Chip sx={MENU_STYLE} clickable icon={<AddToDriveIcon />} label="Add to drive" />
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Button
          variant="outlined"
          startIcon={<PersonAddAlt1Icon />}
          sx={{
            color: 'white',
          }}
        >
          Invite
        </Button>
        <AvatarGroup
          max={2}
          sx={{
            gap: '7px',
            '& .MuiAvatar-root': {
              width: '30px',
              height: '30px',
              fontSize: 16,
              color: 'white',
              cursor: 'pointer',
              '&:first-of-type': { bgcolor: '#a4b0de' },
            },
          }}
        >
          <Tooltip title="vanhveo">
            <Avatar
              alt="Remy Sharp"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuLAjeD7mEI8WxoMWURC0SfeS334BlJ7lzFOP_-8n4guN1NLqOCcjvDXQDAUBBLOO9N1A&usqp=CAU"
            />
          </Tooltip>
          <Tooltip title="vanhveo">
            <Avatar
              alt="Remy Sharp"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiM9m3kh6xnt8wH4K27QkjWuK4MkBvvlNQCkQqnlKnT6pM-YxZxIgcnVYscNlG4cDT0WM&usqp=CAU"
            />
          </Tooltip>
          <Tooltip title="vanhveo">
            <Avatar
              alt="Remy Sharp"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiM9m3kh6xnt8wH4K27QkjWuK4MkBvvlNQCkQqnlKnT6pM-YxZxIgcnVYscNlG4cDT0WM&usqp=CAU"
            />
          </Tooltip>
        </AvatarGroup>
      </Box>
    </Box>
  );
}

export default BoardBar;
