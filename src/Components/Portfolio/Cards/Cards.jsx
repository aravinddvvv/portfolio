import React from 'react'
import styles from './Cards.module.css'
import { IoIosArrowDropright } from "react-icons/io";

const Cards = ({image,title,net,desc}) => {
  return (
    <li>
    <div className={styles.card}>
        <img src={image} alt=''/>
        <div className={styles["card-overlay"]}>
        <div style={{fontWeight:"600",fontSize:"20px"}} className={styles["card-header"]}>
            <IoIosArrowDropright size={45}
            className={styles['card-icon']}/>
             <div className={styles["card-content"]}>{title}
<h3 className={styles['card-title']}>

</h3>
<a href={net}>Demo</a>
             </div>

        </div>
        <p style={{color:'black',fontSize:"15px",fontWeight:"100"}} className={styles['card-description']}>{desc}
           
        </p>


        </div>

    </div>
    </li>
  );
};

export default Cards