import React from "react";
import Asidebar from "../components/Asidebar/Asidebar";
import Navbar from '../components/Navbar/Navbar'
import { createTheme, ThemeProvider, CssBaseline, Box } from "@mui/material";
import { Outlet } from "react-router-dom";

const theme = createTheme({
    palette: {
        primary: {
            main: "#1246AC",
            gray: '#464950'
        },
        secondary: {
            main: "#EAF1FF",
            gray: "rgba(217, 217, 210, 0.39)"

        },
    },
});

const Root = () => {
    const drawerWidth = 261;
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />

            <div>
                <Navbar drawerWidth={drawerWidth}/>
                <Asidebar />
                <Box
                    component="main"
                    sx={{

                        ml: { xs: '1rem', lg: `${drawerWidth + 30}px` },

                        mt: "2rem",
                    }}
                >
                    <Outlet />
                </Box>
            </div>
        </ThemeProvider>
    );
};

export default Root;
