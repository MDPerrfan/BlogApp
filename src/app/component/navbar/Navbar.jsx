'use client'
import React, { useState } from 'react'
import styles from './navbar.module.css'
import Image from 'next/image'
import Link from 'next/link'
import ThemeToggle from '../themeToggle/ThemeToggle'
import AuthLinks from '../authLinks/AuthLinks'
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <Image src='/facebook_icon.svg' alt='facebook' width={30} height={30} />
        <Image src='/linkedin.png' alt='linkedin' width={30} height={30} />
        <Image src='/instagram_icon.svg' alt='instagram' width={30} height={30} />
        <Image src='/github.png' alt='github' width={30} height={30} />
      </div>
      <div className={styles.logo}>
        MDPblogs
      </div>
      <div className={styles.burger} onClick={() => setMenuOpen(!menuOpen)}>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
      </div>
      <div className={menuOpen ? styles.linksMobile : styles.links}>
        <ThemeToggle />
        <Link className={styles.link} href='/'>Homepage</Link>
        <Link className={styles.link} href='/contact'>Contact</Link>
        <Link className={styles.link} href='/about'>About</Link>
        <AuthLinks />
      </div>
    </div>
  )
}

export default Navbar
