
import React from 'react'
import Layout from '../Components/Layout'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import EmailIcon from '@mui/icons-material/Email'
import PhoneIcon from '@mui/icons-material/Phone'

const Contact = () => {
  return (
    <Layout>
      <Box
        sx={{
          maxWidth: 500,
          margin: "3rem auto",
          padding: "2rem 2.5rem",
          background: "rgba(255,255,255,0.95)",
          borderRadius: "16px",
          boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
          textAlign: "center"
        }}
      >
        <Typography variant="h4" sx={{ color: "#ff9800", mb: 2, fontWeight: "bold" }}>
          Contact Us
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", gap: 3, mb: 2 }}>
          <a href="mailto:your@email.com" style={{ color: "#ff9800" }}>
            <EmailIcon fontSize="large" />
          </a>
          <a href="tel:+1234567890" style={{ color: "#ff9800" }}>
            <PhoneIcon fontSize="large" />
          </a>
        </Box>
        <Box sx={{ mb: 2 }}>
          <Typography variant="body1" sx={{ color: "#333" }}>
            <strong>Support:</strong> <a href="tel:+18001234567" style={{ color: "#ff9800", textDecoration: "none" }}>1800-123-4567</a>
          </Typography>
          <Typography variant="body1" sx={{ color: "#333" }}>
            <strong>Free Delivery:</strong> <a href="tel:+18007654321" style={{ color: "#ff9800", textDecoration: "none" }}>1800-765-4321</a>
          </Typography>
        </Box>
        <form>
          <TextField
            label="Your Name"
            variant="outlined"
            fullWidth
            sx={{ mb: 2 }}
          />
          <TextField
            label="Your Email"
            variant="outlined"
            fullWidth
            sx={{ mb: 2 }}
          />
          <TextField
            label="Message"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            sx={{ mb: 2 }}
          />
          <Button variant="contained" sx={{ bgcolor: "#ff9800", color: "#fff", fontWeight: "bold" }}>
            Send Message
          </Button>
        </form>
      </Box>
    </Layout>
  )
}

export default Contact