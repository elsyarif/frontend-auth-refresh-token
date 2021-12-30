import {ThemeProvider} from "@mui/material/styles";
import {theme} from "./theme";
import {CssBaseline} from "@mui/material";
import { Routes, Route, Link } from "react-router-dom";
import {Homepage, Login} from "./pages";

function App() {
  return (
      <ThemeProvider theme={theme}>
          <CssBaseline/>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/login" element={<Login />} />
            </Routes>
      </ThemeProvider>
  );
}

export default App;
