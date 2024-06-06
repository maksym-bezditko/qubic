import { DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  colors: {
    primary: "#03C1DB",
    secondary: "#4b5565",
    background: "#1e2b38",
    text: "#ffffff",
    textSecondary: "#ffffffb6",
    border: "rgb(77, 90, 104)",
    highlight: "#019AB8",
    hoverBackground: "#202e3cbe",
  },
  sizes: {
    0: "0rem",
    2: "0.125rem",
    4: "0.25rem",
    8: "0.5rem",
    12: "0.75rem",
    16: "1rem",
    20: "1.25rem",
    24: "1.5rem",
    32: "2rem",
    40: "2.5rem",
    48: "3rem",
    56: "3.5rem",
    64: "4rem",
    80: "5rem",
    96: "6rem",
    128: "8rem",
    160: "10rem",
    192: "12rem",
    320: "20rem",
    400: "25rem",
  },
  breakpoints: {
    xs: "320px",
    sm: "576px",
    md: "768px",
    lg: "992px",
    xl: "1200px",
    xxl: "1300px",
    xxxl: "1400px",
    xxxxl: "1600px",
  },
};

export type Theme = typeof theme;
