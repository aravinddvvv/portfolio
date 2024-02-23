import React from 'react';
import styles from './Contact.module.css'
import { TbPhoneCall } from "react-icons/tb";
import { HiOutlineMail } from "react-icons/hi";
import Contactform from '../Form/Contactform';

const Contact = () => {
  return (
   <section id='contact' className={styles.contact}>
    <div className='container'>
        <div className={styles.title}>
            <h2>
                Get In <span>Touch</span>
            </h2>
            <hr/>

        </div>
        <div className={`${styles["contact-form"]}grid`}>
            <div className={styles.contact}>
                <h3>
                    Let's Connect
                </h3>
                <p>
                 If there any queries contact  me. Or email me.  
                </p>
            <div className={styles["contact-wrapper"]}>
< TbPhoneCall size={50}/>
<span>Call me</span>
<h3>7902619501</h3>
            </div>
            <div  className={styles["contact-wrapper"]}>
< HiOutlineMail size={50}/>

<span>Email</span>
<h3>aravindv9501@gmail.com</h3>
            </div>
            </div>


         
           

        </div>
        
    </div>
   
   </section>
  )
}

export default Contact