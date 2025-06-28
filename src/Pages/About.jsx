import React from 'react'
import Layout from '../Components/Layout'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          maxWidth: 700,
          margin: "3rem auto",
          padding: "2rem 2.5rem",
          background: "rgba(255,255,255,0.95)",
          borderRadius: "16px",
          boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
          textAlign: "center"
        }}
      >
        <Typography
          sx={{
            fontSize: "2.2rem",
            fontWeight: "bold",
            color: "#ff9800",
            marginBottom: "1.5rem",
            letterSpacing: "1px"
          }}
        >
          Welcome To My Resturant
        </Typography>
        <p style={{
          fontSize: "1.15rem",
          color: "#333",
          lineHeight: 1.7
        }}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam eveniet totam, autem aliquam officia delectus non debitis aperiam ullam adipisci, sint perspiciatis voluptas dicta numquam temporibus esse quod commodi. Ipsa.
        </p>
        <br />
        <p style={{
          fontSize: "1.15rem",
          color: "#333",
          lineHeight: 1.7
        }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque quos vel incidunt saepe ratione, optio reiciendis voluptates aliquid minus reprehenderit fugit ullam aspernatur. Quia officia tenetur accusantium provident accusamus sunt!
        </p>
      </Box>
    </Layout>
  )
}

export default About