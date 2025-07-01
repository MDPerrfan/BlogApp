'use client'
import React, { useContext } from 'react'
import styles from './themeTogle.module.css'
import Image from 'next/image'
import { ThemeContext } from '@/context/ThemeContext'
const ThemeToggle = () => {
  const { theme, toggle } = useContext(ThemeContext)
  return (
    <div className={styles.container} onClick={toggle}>
      <Image src='/moon.png' alt='moon' width={14} height={14}/>
      <div
        className={styles.ball}
        style={
          theme === 'light'
            ? { left: '1px', background: 'black' }
            : { right: '1px', background: '#f172a' }
        }
      />
      <Image src='/sun.png' alt='sun' width={14} height={14}/>
    </div>
  )
}

export default ThemeToggle
