import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import { AuthProvider } from "./Providers/AuthProvider.jsx"
import { GlobalStyle } from "./Styled/Global.style.js"
import { ThemeProvider } from "styled-components"
import { theme } from "./Styled/Theme.style.js"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </AuthProvider>
  </React.StrictMode>
)
