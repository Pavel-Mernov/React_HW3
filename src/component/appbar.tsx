import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import React from "react";

interface LocalAppBarProps {
    toggle: () => void;
}

const LocalAppBar : React.FC<LocalAppBarProps> = ({ toggle }) => {
    return <AppBar color="primary">
            <Toolbar variant="dense">
              <Button color="inherit" onClick={toggle}>☰</Button>
              <Typography variant="h6" marginLeft={'50px'} color="inherit" component="div">
                Товары
              </Typography>
              <Typography variant="h6" marginLeft={'50px'} color="inherit" component="div">
                Склады
              </Typography>
              <Typography variant="h6" marginLeft={'50px'} color="inherit" component="div">
                О системе
              </Typography>
              <Typography variant="h6" marginLeft={'50px'} color="inherit" component="div">
                Личный кабинет
              </Typography>
          </Toolbar>
          </AppBar>
}

export default LocalAppBar