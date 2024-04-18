import { Box } from '@mui/material';
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

function AppBar() {
  return (
    <Box
      px={2}
      sx={{
        bgcolor: 'white',
        height: '58px',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <AppsIcon sx={{ color: 'primary.main' }} />
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 0.5,
          }}
        >
          <SvgIcon component={trelloIcon} inheritViewBox sx={{ color: 'primary.main' }} />
          <Typography variant="span" sx={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'primary.main' }}>
            Trello
          </Typography>
        </Box>

        <WorkSpace />
        <Recent />
        <Starred />
        <Template />

        <Button variant="outlined">Create</Button>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <TextField
          size="small"
          sx={{
            maxWidth: '200px',
          }}
          id="outlined-basic"
          label="Search..."
          variant="outlined"
        />
        <ModeSelect />
        <Tooltip title="Notification" sx={{ cursor: 'pointer' }}>
          <Badge badgeContent={2} color="primary" sx={{}}>
            <NotificationsIcon sx={{ color: 'primary.main', fontSize: '2rem', cursor: 'pointer' }} />
          </Badge>
        </Tooltip>
        <Tooltip title="help" sx={{ cursor: 'pointer' }}>
          <Badge variant="dot">
            <HelpOutlineIcon sx={{ color: 'primary.main', fontSize: '2rem', cursor: 'pointer' }} />
          </Badge>
        </Tooltip>

        <Profile />
      </Box>
    </Box>
  );
}

export default AppBar;
