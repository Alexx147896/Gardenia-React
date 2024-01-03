import React from 'react'
import styles from '../styles/Footer.module.css'
import { Link } from 'react-router-dom'
import { Instagram, Facebook, Twitter, Pinterest } from '@mui/icons-material'

function Footer() {
  return (
    
    <>
    
        <div className={styles.container}>

            <div className={styles.contact}>
                <h2>GET IN TOUCH</h2>
                <p>gardenia@gmail.com</p>
                <p>+34 01623 750343 (Spain)</p>
                <p>+34 1623 750343 (International)</p>
                
                <div className={styles.socials}>
                    <Link to='https://www.facebook.com' target="_blank" rel="noopener noreferrer" title='facebook' className={styles.icon}> <Facebook /> </Link>
                    <Link to='https://www.instagram.com' target="_blank" rel="noopener noreferrer" title='instagram' className={styles.icon}> <Instagram /> </Link>
                    <Link to='https://www.x.com' target="_blank" rel="noopener noreferrer" title='twitter' className={styles.icon}> <Twitter /> </Link>
                    <Link to='https://www.pinterest.com' target="_blank" rel="noopener noreferrer" title='pinterest' className={styles.icon}> <Pinterest /> </Link>
                </div>
            </div>

            <div className={styles.info}>
                <h2>INFORMATION & HELP</h2>

                <div className={styles.links}>
                    <Link to='/about' className={styles.link}>About Us</Link>
                    <Link to='/choose' className={styles.link}>Why Choose Gardenia?</Link>
                    <Link to='/corporate-gifts' className={styles.link}>Corporate Gifts</Link>
                    <Link to='/returns' className={styles.link}>Returns Policy</Link>

                </div>
            </div>

        </div>

        <div className={styles.copyright}>
            <p> Website made by <a href='https://www.alexhernan.com' target="_blank" rel="noopener noreferrer"><span>Alex Hernán</span> </a>  {new Date().getFullYear()} © </p>
        </div>
    
    </>
  )
}

export default Footer