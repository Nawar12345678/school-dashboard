import { Search } from "@mui/icons-material";
import { ReactComponent as Notifications } from '../../assets/notifications_none.svg'
import { Avatar, Box, IconButton, InputBase, Paper, Typography, useTheme } from "@mui/material";
import React from "react";

const Navbar = ({ drawerWidth }) => {
    const theme = useTheme();
    return (
        <Box
            component="nav"

            sx={{
                pt: '1rem',
                ml: {xs: '1rem', lg: `${drawerWidth + 30}px`},
                mr: {md: '30px', xl: '0px'},
                display: "flex",
                alignItems: 'center',
                justifyContent: 'space-around',
                minHeight: '10vh',
                gap: {md: '2rem', lg: '60px'},
                
            }}
        >
            <Box component="div">
                <Typography variant="h5" sx={{ fontWeight: '600', fontSize: '24px', fontFamily: 'inter', color: 'rgba(0, 0, 0, 0.85)', letterSpacing: '0.384px' }}>Good Morning Admin</Typography>
                <Typography variant="p" sx={{ fontWeight: '500', fontSize: '18px', letterSpacing: '-0.36px', fontFamily: 'inter', color: 'rgba(0, 0, 0, 0.65)' }}>4.45 PM - 19 Jan 2023</Typography>
            </Box>
            <Box component='div' sx={{ width: {sm: '300px', md: '550px', lg: '649px'}  }}>
                <Paper
                    component="form"
                    sx={{
                        p: "8px 16px",
                        display: "flex",
                        alignItems: "center",
                        gap: '8px',
                        flex: "1 0 0",
                        borderRadius: '5px',
                        bgcolor: theme.palette.secondary.gray,
                        '& .MuiSvgIcon-root': {
                            fontSize: "2rem",
                            color: '#464950'
                        }
                    }}
                >
                    <Search />
                    <InputBase
                        sx={{
                            ml: '2px', flex: 1, "& input::placeholder": {
                                fontSize: "20px",
                                color: '#464950'
                            },

                        }}
                        placeholder="Search"
                        inputProps={{ "aria-label": "search" }}
                    />


                </Paper>
            </Box>
            <Box component='div' sx={{ display: 'flex', alignItems: 'center', gap: '40px' }}>
                <IconButton sx={{ '& .MuiTouchRipple-root .MuiTouchRipple-child': { borderRadius: '0px' }, width: '40px', height: '40px', bgcolor: theme.palette.secondary.gray, borderRadius: '0px' }}>
                    <Notifications width='40px' height='40px' />
                </IconButton>
                <IconButton sx={{ '& .MuiTouchRipple-root .MuiTouchRipple-child': { display: 'none' }, width: '40px', height: '40px', bgcolor: theme.palette.secondary.gray, borderRadius: '0px' }}>
                    <Avatar sx={{ width: '56px', height: '56px' }} src={require('../../assets/images/profile_pic.png')} />
                </IconButton>
            </Box>


        </Box>
    );
};

export default Navbar;
