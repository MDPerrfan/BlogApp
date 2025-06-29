'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import styles from './authLinks.module.css'

const AuthLinks = () => {
  const status = 'notauthorized' // Replace this with real auth logic later
  const [open, setOpen] = useState(false)

  return (
    <>
      {status === 'notauthorized' ? (
        <Link className={styles.link} href='/login'>Login</Link>
      ) : (
        <>
          <Link className={styles.link} href='/write'>Write</Link>
          <span className={styles.link}>Logout</span>
        </>
      )}

      <div className={styles.burger} onClick={() => setOpen(!open)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>

      {open && (
        <div className={styles.responsiveMenu}>
          <Link className={styles.link} href='/'>Homepage</Link>
          <Link className={styles.link} href='/contact'>Contact</Link>
          <Link className={styles.link} href='/about'>About</Link>
          {status === 'notauthorized' ? (
            <Link className={styles.link} href='/login'>Login</Link>
          ) : (
            <>
              <Link className={styles.link} href='/write'>Write</Link>
              <span className={styles.link}>Logout</span>
            </>
          )}
        </div>
      )}
    </>
  )
}

export default AuthLinks
