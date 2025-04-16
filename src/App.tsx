import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Details from "./components/Details";
function App() {
  return (
    <Box>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </Box>
  );
}

export default App;
