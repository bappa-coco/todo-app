
import React from 'react';
import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material';
import AddTaskIcon from '@mui/icons-material/AddTask';

const Header = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <AddTaskIcon />
                    </IconButton>
                    <Typography variant="h4" component="div" sx={{ flexGrow: 1, pl: 150 }}>
                        Todo App
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Header;