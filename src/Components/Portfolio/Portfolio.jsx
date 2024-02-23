import React from 'react'
import styles from './Portfolio.module.css'
import cardData from '../../cardData'
import Cards from './Cards/Cards'




const Portfolio = () => {
  return (
   <section id='portfolio' className={styles.Portfolio}>
    <div className='container'>
        <div className={styles.title}>
            <h2 style={{marginTop:"20px"}}>
                Port<span>folio</span>
            </h2>
            <hr/>

        </div>
        <ul className={styles.cards}>
            {cardData.map(item =>(
                <Cards key={item.id}
                image={item.img}
                title={item.title}
                net={item.net}
                desc={item.desc}/>
            ))}
        </ul>
        </div>

   
   </section>
  );
};

export default Portfolio