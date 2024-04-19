import { experimental_extendTheme as extendTheme } from '@mui/material/styles';

// Create a theme instance.

const theme = extendTheme({
  colorSchemes: {
    // light: {
    //   palette: {
    //     primary: {
    //       main: '#ff5252',
    //     },
    //   },
    // },
    // dark: {
    //   palette: {
    //     primary: {
    //       main: '#000',
    //     },
    //   },
    // },
  },
  // ...other properties
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 'bold',
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: () => ({
          // color: theme.palette.primary.main,
          fontSize: '0.875rem',
        }),
      },
    },

    MuiOutlinedInput: {
      styleOverrides: {
        root: () => {
          return {
            // color: theme.palette.primary.main,
            fontSize: '0.875rem',
            // '.MuiOutlinedInput-notchedOutline': {
            //   borderColor: theme.palette.primary.light,
            // },

            // '&:hover': {
            //   '.MuiOutlinedInput-notchedOutline': {
            //     borderColor: theme.palette.primary.main,
            //   },
            // },
            '& fieldset': {
              borderWidth: '1px !important',
            },
          };
        },
      },
    },
  },
});

export default theme;
