import React from 'react'
import styles from './Contactform.module.css';

const Contactform = () => {
  return (
    <form>
        <div className={styles['form-control']}>
            <input type='text'placeholder='Your name'/>
        </div>

        <div className={styles['form-control']}>
            <input type='email'placeholder='Your email'/>
        </div> 

        <div className={styles['form-control']}>
            <textarea
            name="message"
            placeholder='Message'
            className={styles.textarea}>

            </textarea>
        </div>
        <button className={styles.button}>Send Message</button>


    </form>
   
  );
};

export default Contactform