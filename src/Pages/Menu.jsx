import React from 'react'
import Layout from '../Components/Layout'

// Import your images
import img1 from '../images/chola.jpg'
import img2 from '../images/dosa.jpg'
import img3 from '../images/gujrati.jpg'
import img4 from '../images/idli.jpg'
import img5 from '../images/masaladosa.jpg'

const menuItems = [
  { name: "Chola", img: img1, price: "₹120" },
  { name: "Dosa", img: img2, price: "₹100" },
  { name: "Gujarati Thali", img: img3, price: "₹180" },
  { name: "Idli", img: img4, price: "₹80" },
  { name: "Masala Dosa", img: img5, price: "₹130" },
  { name: "Paneer Special", img: img5, price: "₹150" },
]

const Menu = () => {
  return (
    <Layout>
      <h1 style={{ textAlign: "center", color: "#ff9800", margin: "2rem 0" }}>Our Menu</h1>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "2rem",
        maxWidth: "900px",
        margin: "0 auto",
        padding: "2rem"
      }}>
        {menuItems.map((item, idx) => (
          <div key={idx} style={{
            background: "#fff",
            borderRadius: "12px",
            boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
            overflow: "hidden",
            textAlign: "center",
            paddingBottom: "1.5rem"
          }}>
            <img src={item.img} alt={item.name} style={{ width: "100%", height: "200px", objectFit: "cover" }} />
            <h3 style={{ margin: "1rem 0 0.5rem 0", color: "#222" }}>{item.name}</h3>
            <p style={{ color: "#ff9800", fontWeight: "bold", fontSize: "1.1rem", margin: 0 }}>{item.price}</p>
            <button
              style={{
                marginTop: "1rem",
                background: "#ff9800",
                color: "#fff",
                border: "none",
                padding: "0.6rem 1.5rem",
                borderRadius: "6px",
                fontWeight: "bold",
                fontSize: "1rem",
                cursor: "pointer",
                transition: "background 0.2s"
              }}
              onClick={() => alert(`Order placed for ${item.name}!`)}
            >
              Order Now
            </button>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export default Menu