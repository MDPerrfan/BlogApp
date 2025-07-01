import React from 'react'
import styles from './featured.module.css'
import Image from 'next/image'
const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}> <b>Hey,MDP is here!</b> Discover stories and creative ideas.</h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image
            className={styles.image}
            src="/p1.jpeg"
            alt="Featured Image"
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className={styles.textContainer}>
          <h3 className={styles.postTitle}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus, culpa.</h3>
          <p className={styles.postDes}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita nesciunt consequatur laborum molestiae minus voluptatibus ad ut beatae necessitatibus doloremque qui, nam tempora omnis pariatur praesentium fugit id dolores voluptatem!
          </p>
          <button className={styles.postBtn}>Read more</button>
        </div>
      </div>
    </div>
  )
}

export default Featured
