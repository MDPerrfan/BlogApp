import React from 'react'
import styles from './cardList.module.css'
import Pagination from '../pagination/Pagination'
const CardList = () => {
  return (
    <div className={styles.container}>
      <Pagination/>
    </div>
  )
}

export default CardList
