import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { Link } from 'react-router-dom'
import "../Styles/headerStyle.css"
import IconButton from '@mui/material/IconButton'
import DragHandleIcon from '@mui/icons-material/DragHandle'
import Drawer from '@mui/material/Drawer'
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu'
import { useState } from 'react'
import Divider from '@mui/material/Divider'

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  
  const drawerContent = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography component="div" variant="h6" sx={{ flexGrow: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem", mt: 2 }}>
        <RestaurantMenuIcon sx={{ color: "yellow" }} />
        my restaurant
      </Typography>
      <Divider/>

      <ul className="mobile-navigation-menu">
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/About">about</Link>
        </li>
        <li>
          <Link to="/Contact">contact</Link>
        </li>
        <li>
          <Link to="/Menu">menu</Link>
        </li>
      </ul>
    </Box>
  )

  return (
    <div>
      <Box>
        <AppBar component="nav" sx={{ bgcolor: "black" }}>
          <Toolbar sx={{ justifyContent: "space-between" }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              sx={{ mr: 2, display: { sm: "none" } }}
              onClick={handleDrawerToggle}
            >
              <DragHandleIcon />
            </IconButton>
            <Typography component="div" sx={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <RestaurantMenuIcon sx={{ color: "yellow" }} />
             <p className='r'> my restaurant</p>
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <ul className="navigation-menu">
                <li>
                  <Link to="/">home</Link>
                </li>
                <li>
                  <Link to="/About">about</Link>
                </li>
                <li>
                  <Link to="/Contact">contact</Link>
                </li>
                <li>
                  <Link to="/Menu">menu</Link>
                </li>
              </ul>
            </Box>
          </Toolbar>
        </AppBar>
        
        <Toolbar />
        <Box component="nav">
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            sx={{
              display: { xs: "block", sm: "none" },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 }
            }}
          >
            {drawerContent}
          </Drawer>
        </Box>

        
      </Box>
      
    </div>
  )
}

export default Header