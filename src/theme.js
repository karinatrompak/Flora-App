export const colorTokens = {
    grey: {
      50: "#F2F1F1",  // Muito claro
      100: "#E6E4E4", // Claro
      200: "#CCC8C8", // Levemente claro
      300: "#B3ACAC", // Levemente escuro
      400: "#999090", // Moderadamente escuro
      500: "#9D9696", // Cor base
      600: "#807878", // Moderadamente escuro
      700: "#666060", // Levemente escuro
      800: "#4C4848", // Escuro
      900: "#332F2F", // Muito escuro
    },
    primary: {
      50: "#F9E6EC",  // Muito claro
      100: "#F4CCD6",
      200: "#EBA0B4",
      300: "#E27492",  // Claro
      400: "#DC5278",
      500: "#E56D90",  // Cor base
      600: "#B75873",
      700: "#8E3F56",  // Escuro
      800: "#66283B",
      900: "#401520",  // Muito escuro
    },
  };
  
  // mui
  export const themeSettings = (mode) => {
    return {
      palette: {
        mode: mode,
        ...(mode === "dark"
          ? {
              // valores para dark mode
              primary: {
                dark: colorTokens.primary[200],
                main: colorTokens.primary[500],
                light: colorTokens.primary[800],
              },
              neutral: {
                dark: colorTokens.grey[100],
                main: colorTokens.grey[200],
                mediumMain: colorTokens.grey[300],
                medium: colorTokens.grey[400],
                light: colorTokens.grey[700],
              },
              background: {
                default: colorTokens.grey[900],
                alt: colorTokens.grey[800],
              },
            }
          : {
              // valores para light mode
              primary: {
                dark: colorTokens.primary[700],
                main: colorTokens.primary[500],
                light: colorTokens.primary[50],
              },
              neutral: {
                dark: colorTokens.grey[700],
                main: colorTokens.grey[500],
                mediumMain: colorTokens.grey[400],
                medium: colorTokens.grey[300],
                light: colorTokens.grey[50],
              },
              background: {
                default: colorTokens.grey[10],
                alt: colorTokens.grey[0],
              },
            }),
      },
      typography: {
        fontFamily: ["Outfit"].join(","),
        fontSize: 12,
        h1: {
          fontFamily: ["Outfit"].join(","),
          fontSize: 40,
        },
        h2: {
          fontFamily: ["Outfit"].join(","),
          fontSize: 32,
        },
        h3: {
          fontFamily: ["Outfit"].join(","),
          fontSize: 24,
        },
        h4: {
          fontFamily: ["Outfit"].join(","),
          fontSize: 20,
        },
        h5: {
          fontFamily: ["Outfit"].join(","),
          fontSize: 16,
        },
        h6: {
          fontFamily: ["Outfit"].join(","),
          fontSize: 14,
        },
      },
    };
  };
  