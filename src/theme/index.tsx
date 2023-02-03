import { createTheme, PaletteColorOptions } from "@mui/material/styles";
import { APP_COLORS } from "./enums";
import type {} from "@mui/x-date-pickers/themeAugmentation";

/** Module Declaration */
declare module "@mui/material/styles" {
  interface CustomPalette {
    milkWhite?: PaletteColorOptions;
    gitHub?: PaletteColorOptions;
    facebook?: PaletteColorOptions;
    google?: PaletteColorOptions;
    liteGray?: string;
    liteBlue?: string;
  }
  interface Palette extends CustomPalette {}
  interface PaletteOptions extends CustomPalette {}
  interface Theme extends CustomPalette {}
  interface ThemeOptions extends CustomPalette {}
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    milkWhite: true;
    gitHub: true;
    facebook: true;
    google: true;
  }
}

declare module "@mui/material/IconButton" {
  interface IconButtonPropsColorOverrides {
    milkWhite: true;
    gitHub: true;
    facebook: true;
    google: true;
  }
}

declare module "@mui/material/SvgIcon" {
  interface SvgIconPropsColorOverrides {
    gitHub: true;
    facebook: true;
    google: true;
  }
}

const defaultTheme = createTheme({
  spacing: 10,
});
const { augmentColor } = defaultTheme.palette;
const createColor = (mainColor: any) =>
  augmentColor({
    color: {
      main: mainColor,
    },
  });
const theme = createTheme({
  spacing: defaultTheme.spacing,
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1300,
      xl: 1536,
    },
  },
  typography: {
    h1: {
      fontSize: defaultTheme.spacing(4),
      fontWeight: 800,
    },
    h2: {
      fontSize: defaultTheme.spacing(3),
      fontWeight: 800,
    },
    h3: {
      fontSize: defaultTheme.spacing(2.6),
      fontWeight: 800,
    },
    h4: {
      fontSize: defaultTheme.spacing(2),
      fontWeight: 800,
    },
    h5: {
      fontSize: defaultTheme.spacing(1.8),
      fontWeight: 800,
    },
    h6: {
      fontSize: defaultTheme.spacing(1.6),
      fontWeight: 800,
    },
    subtitle1: {
      fontSize: defaultTheme.spacing(1.6),
      fontWeight: 600,
    },
    subtitle2: {
      fontSize: defaultTheme.spacing(1.2),
      fontWeight: 600,
    },
    body1: {
      fontSize: defaultTheme.spacing(1.4),
      fontWeight: 400,
    },
    body2: {
      fontSize: defaultTheme.spacing(1.2),
      fontWeight: 400,
      color: APP_COLORS.ROOT_SECONDARY_TEXT_COLOR,
    },
    caption: {
      fontSize: 10,
      fontWeight: 400,
    },
  },
  palette: {
    primary: {
      main: APP_COLORS.ROOT_PRIMARY_COLOR,
      light: APP_COLORS.ROOT_PRIMARY_COLOR_LITE,
      dark: APP_COLORS.ROOT_PRIMARY_COLOR_DARK,
    },
    secondary: {
      main: APP_COLORS.ROOT_SECONDARY_COLOR,
      light: APP_COLORS.ROOT_SECONDARY_COLOR_LITE,
      dark: APP_COLORS.ROOT_SECONDARY_COLOR_DARK,
    },
    text: {
      primary: APP_COLORS.ROOT_PRIMARY_TEXT_COLOR,
      secondary: APP_COLORS.ROOT_SECONDARY_TEXT_COLOR,
    },
    divider: APP_COLORS.ROOT_DIVIDER_COLOR,
    gitHub: createColor(APP_COLORS.SOCIAL_GITHUB_COLOR),
    facebook: createColor(APP_COLORS.SOCIAL_FACEBOOK_COLOR),
    google: createColor(APP_COLORS.SOCIAL_GOOGLE_COLOR),
    milkWhite: createColor(APP_COLORS.ROOT_MILK_WHITE_COLOR),
    liteGray: APP_COLORS.ROOT_BG_LITE_GRAY,
    liteBlue: APP_COLORS.ROOT_LIGHT_BLUE,
  },
  components: {
    MuiAppBar: {
      defaultProps: {
        elevation: 0,
        color: "inherit",
        position: "sticky",
      },
      styleOverrides: {
        root: {
          borderBottom: `1px solid ${defaultTheme.palette.divider}`,
          paddingLeft: defaultTheme.spacing(2),
          paddingRight: defaultTheme.spacing(2),
        },
      },
    },
    MuiButton: {
      defaultProps: {
        variant: "contained",
        disableElevation: true,
        size: "medium",
        color: "primary",
      },
      styleOverrides: {
        root: {
          fontWeight: 500,
          textTransform: "none",
          borderRadius: 3,
          minWidth: defaultTheme.spacing(6),
        },
        sizeLarge: {
          height: defaultTheme.spacing(4.8),
        },
        sizeMedium: {
          height: defaultTheme.spacing(3.8),
          fontSize: defaultTheme.spacing(1.5),
        },
        sizeSmall: {
          height: defaultTheme.spacing(2.5),
          fontSize: defaultTheme.spacing(1.2)
        },
      },
    },
    MuiTab: {
      defaultProps: {},
      styleOverrides: {
        root: {
          fontSize: defaultTheme.spacing(1.6),
          textTransform: "none",
          minWidth: 50,
          color: defaultTheme.palette.text.primary,
        },
      },
    },
    MuiInputBase: {
      defaultProps: {
        size: "medium",
        fullWidth: true,
      },
      styleOverrides: {
        root: {
          borderRadius: 0,
          border: `1px solid ${defaultTheme.palette.divider}`,
          "&.Mui-focused": {
            border: `1px solid ${APP_COLORS.ROOT_DIVIDER_COLOR}`,
          },
          "&.Mui-error": {
            border: `1px solid ${defaultTheme.palette.error.main}`,
          },
          backgroundColor: defaultTheme.palette.common.white,
        },
        input: {
          padding: defaultTheme.spacing(1),
          fontWeight: 500,
          fontSize: defaultTheme.spacing(1.4),
        },
        inputSizeSmall: {
          padding: defaultTheme.spacing(0.8),
          height: defaultTheme.spacing(1.5),
          fontSize: defaultTheme.spacing(1.3),
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        size: "small",
        fullWidth: true,
      },
      styleOverrides: {
        root: {
          borderRadius: 3,
          border: `1px solid ${defaultTheme.palette.divider}`,
          "&.Mui-focused": {
            border: `1px solid ${APP_COLORS.ROOT_DIVIDER_COLOR}`,
          },
          "&.Mui-error": {
            border: `1px solid ${defaultTheme.palette.error.main}`,
          },
          backgroundColor: defaultTheme.palette.common.white,
        },

        // input: {
        //   padding: defaultTheme.spacing(1),
        //   fontWeight: 500,
        //   fontSize: defaultTheme.spacing(1.4),
        // },
        // inputSizeSmall: {
        //   padding: defaultTheme.spacing(0.8),
        //   height: defaultTheme.spacing(1.5),
        //   fontSize: defaultTheme.spacing(1.3),
        // },
      },
    },
    MuiAutocomplete: {
      defaultProps: {
        autoHighlight: true,
      },
      styleOverrides: {
        root: {
          ":before": {
            borderBottom: "none",
          },
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          fontWeight: 500,
        },
      },
    },
    MuiInputLabel: {
      defaultProps: {
        size: "normal",
      },
      styleOverrides: {
        root: {
          marginBottom: defaultTheme.spacing(1),
          fontSize: defaultTheme.spacing(1.3),
          fontWeight: 500,
          color: APP_COLORS.ROOT_PRIMARY_TEXT_COLOR,
        },
      },
    },
    MuiDatePicker: {},
    MuiMenuItem: {
      styleOverrides: {
        root: {
          paddingLeft: 0,
          paddingTop: defaultTheme.spacing(0.8),
          color: defaultTheme.palette.text.secondary,
          fontWeight: 500,
          "&:hover": {
            backgroundColor: "transparent",
            color: defaultTheme.palette.text.primary,
            fontWeight: 600,
          },
        },
      },
    },
    MuiChip: {
      defaultProps:{
       color:'info'
      },
      styleOverrides: {
        sizeSmall: {
          fontSize: defaultTheme.spacing(1.1),
        },
      },
    },
    MuiListSubheader: {
      styleOverrides: {
        root: {
          fontSize: defaultTheme.spacing(1.5),
          color: APP_COLORS.ROOT_SECONDARY_TEXT_COLOR,
        },
      },
    },
  },
});

export default theme;
