export const theme = {
  colors: {
    primary: "#247BA0", // Blue
    secondary: "#F25F5C", // Red
    tertiary: "#70C1B3", // Green
    quaternary: "#50514F", // Grey
    quinary: "#FFE066", // Yellow
    dark: "#000", // Black
    light: "#fff", // White
  },
  fonts: ["Titillium Web", "Open Sans", "monospace"],
  fontsizes: {
    xs: "0.8rem",
    s: "0.9rem",
    m: "1rem",
    l: "1.5rem",
    xl: "2.5rem",
  },
  // Theme Grid
  grid: {
    // Breakpoints to be used in media queries
    breakpoints: {
      xs: "320px",
      s: "480px",
      m: "768px",
      l: "992px",
      xl: "1200px",
    },
    // Grid areas for mobile
    mobile: {
      primary: {
        rows: "1fr 10fr 1fr",
        columns: "5fr 1fr",
        areas: `
					"header header header header header navbar"
					"main main main main main main"
					"footer footer footer footer footer footer"
					`
      }
    },
    // Grid areas for tablet
    tablet: {
      primary: {
        rows: "1fr 10fr 1fr",
        columns: "5fr 1fr",
        areas: `
					"header header header header navbar navbar"
					"main main main main main main"
					"footer footer footer footer footer footer"
					`
      }
    },
    // Grid areas for desktop
    desktop: {
      primary: {
        rows: "1fr 10fr 1fr",
        columns: "1fr 5fr",
        areas: `
					"header header header header header header"
					"navbar main main main main main"
					"footer footer footer footer footer footer"
					`
      }
    },
    print: {
      rows: "12fr",
      columns: "12fr",
      areas: `"main"`
    }
  }
}
