import { createTheme } from "@mui/material/styles";

import vars from "styles/_variables-mui";

const Default = createTheme({
  palette: {
    primary: {
      main: vars.indigo,
    },
    grey: {
      300: vars.inheritDefault1,
      A100: vars.inheritDefault2,
    },
    secondary: {
      main: vars.secondary,
    },
    error: {
      main: vars.red,
    },
    success: {
      main: vars.green,
    },
    warning: {
      main: vars.orange,
    },
    contrastThreshold: 3,
    tonalOffset: 0.1,
  },
  shape: {
    borderRadius: 8,
  },
  
});

const GenericUser = createTheme({
  palette: {
    primary: {
      main: vars.purple,
    },
    grey: {
      300: vars.inheritDefault1,
      A100: vars.inheritDefault2,
    },
    secondary: {
      main: vars.second,
    },
    error: {
      main: vars.red,
    },
    success: {
      main: vars.green,
    },
    warning: {
      main: vars.orange,
    },
    contrastThreshold: 3,
    tonalOffset: 0.1,
  },
  shape: {
    borderRadius: 8,
  },
});

export const defaultTheme = Default;

export const userTheme = GenericUser;
