
import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import InstagramIcon from '@mui/icons-material/Instagram'
import EmailIcon from '@mui/icons-material/Email'
import PhoneIcon from '@mui/icons-material/Phone'
import LocalShippingIcon from '@mui/icons-material/LocalShipping'
import SupportAgentIcon from '@mui/icons-material/SupportAgent'

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'black',
        color: 'white',
        py: 3,
        textAlign: 'center',
        mt: 4,
        width: '100%',
      }}
    >
      <Box sx={{ mb: 1, display: 'flex', justifyContent: 'center', gap: 3 }}>
        <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#ff9800' }}>
          <InstagramIcon fontSize="large" />
        </a>
        <a href="mailto:your@email.com" style={{ color: '#ff9800' }}>
          <EmailIcon fontSize="large" />
        </a>
        <a href="tel:+1234567890" style={{ color: '#ff9800' }}>
          <PhoneIcon fontSize="large" />
        </a>
      </Box>
      <Box sx={{ mb: 1, display: 'flex', justifyContent: 'center', gap: 4, flexWrap: 'wrap' }}>
        <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <SupportAgentIcon sx={{ color: '#ff9800' }} /> 
          <span style={{ color: '#ff9800' }}>Support:</span> 
          <a href="tel:+18001234567" style={{ color: '#fff', textDecoration: 'none' }}>1800-123-4567</a>
        </Typography>
        <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <LocalShippingIcon sx={{ color: '#ff9800' }} /> 
          <span style={{ color: '#ff9800' }}>Free Delivery:</span> 
          <a href="tel:+18007654321" style={{ color: '#fff', textDecoration: 'none' }}>1800-765-4321</a>
        </Typography>
      </Box>
      <Typography variant="body1">
        &copy; {new Date().getFullYear()} My Restaurant. All rights reserved.
      </Typography>
      <Typography variant="body2" sx={{ mt: 1, fontSize: '0.9rem', color: '#ff9800' }}>
        Made with ❤️ using React & Material UI
      </Typography>
    </Box>
  )
}

export default Footer