import { Box, InputAdornment } from '@mui/material';
import ModeSelect from '../ModeSelect/ModeSelect';
import AppsIcon from '@mui/icons-material/Apps';
import Typography from '@mui/material/Typography';
import { ReactComponent as trelloIcon } from '~/assets/trello-icon.svg';
import SvgIcon from '@mui/material/SvgIcon';
import WorkSpace from './Menus/WorkSpace';
import Recent from './Menus/Recent';
import Starred from './Menus/Starred';
import Template from './Menus/Template';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Tooltip from '@mui/material/Tooltip';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import Profile from './Menus/Profiles';
import AddBoxIcon from '@mui/icons-material/AddBox';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';

function AppBar() {
  const [valueInput, setValueInput] = useState('');

  return (
    <Box
      px={2}
      sx={{
        height: (theme) => theme.trelloCustom.appBarHeight,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        overflow: 'auto',
        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#2c3e50' : '#1565c0'),
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <AppsIcon sx={{ color: 'white' }} />
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 0.5,
          }}
        >
          <SvgIcon component={trelloIcon} inheritViewBox sx={{ color: 'white' }} />
          <Typography variant="span" sx={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'white' }}>
            Trello
          </Typography>
        </Box>

        <WorkSpace />
        <Recent />
        <Starred />
        <Template />

        <Button sx={{ color: 'white' }} variant="outlined" endIcon={<AddBoxIcon />}>
          Create
        </Button>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <TextField
          value={valueInput}
          onChange={(e) => setValueInput(e.target.value)}
          size="small"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: 'white' }} />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="start">
                <CloseIcon
                  onClick={() => setValueInput('')}
                  sx={{
                    color: 'white',
                    cursor: 'pointer',
                    display: valueInput ? 'flex' : 'none',
                  }}
                />
              </InputAdornment>
            ),
          }}
          sx={{
            maxWidth: '200px',
            minWidth: '120px',
            '& label': { color: 'white' },
            '& label.Mui-focused': { color: 'white' },
            '& input': { color: 'white' },
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: 'white',
              },
              '&:hover fieldset': {
                borderColor: 'white',
              },
              '&.Mui-focused fieldset': {
                borderColor: 'white',
              },
            },
          }}
          id="outlined-basic"
          label="Search..."
          variant="outlined"
        />
        <ModeSelect />
        <Tooltip title="Notification" sx={{ cursor: 'pointer' }}>
          <Badge badgeContent={2} sx={{ '.MuiBadge-badge': { bgcolor: 'red', color: 'white' } }}>
            <NotificationsIcon sx={{ color: 'white', fontSize: '1.7rem', cursor: 'pointer' }} />
          </Badge>
        </Tooltip>
        <Tooltip title="help" sx={{ cursor: 'pointer' }}>
          <Badge variant="dot">
            <HelpOutlineIcon sx={{ color: 'white', fontSize: '1.7rem', cursor: 'pointer' }} />
          </Badge>
        </Tooltip>

        <Profile />
      </Box>
    </Box>
  );
}

export default AppBar;
