import React, { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';



const drawerWidth = 240;

function DashboardPage() {

    const [user, setUser] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    let navigateFunc = () => {

        if (location.state && location.state.user) {
            navigate("/")
        } else {
            navigate("/login")
        }

    }

    useEffect(() => {
        navigateFunc();
    }, [])


    const [routeList, setRouteList] = React.useState([
        {
            routeName: "Headlines",
            routePath: "headlines",
        },
        {
            routeName: "Articles",
            routePath: "",
        },

    ])

    const MoveToRoute = (routePath) => {
        navigate(routePath);
    }

    return <>

        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px`}}
            >
                <Toolbar>
                    <Typography variant="h6" noWrap component="div">
                        NEWS APP
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="permanent"
                anchor="left"
            >
                <Toolbar />
                <Divider />
                <List>
                    {routeList.map((text, index) => (
                        <ListItem key={index} disablePadding>
                            <ListItemButton onClick={() => MoveToRoute(text.routePath)}>
                                <ListItemIcon>
                                    <InboxIcon />
                                </ListItemIcon>
                                <ListItemText primary={text.routeName} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
                <Divider />
            </Drawer>

            <Outlet />

        </Box>

    </>
}

export default DashboardPage;