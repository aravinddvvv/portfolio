import React, { useEffect, useRef,useState } from 'react'
import styles from './Skills.module.css'
import Skillbar from './Skillbar/Skillbar';


const skillsData =[
    {
 label : 'Html',
 percentage:98,
 style:`${styles['progress-line']} ${styles.html }`
},
{
    label : 'Css',
    percentage:96,
    style:`${styles['progress-line']} ${styles.css }`
   },
   {
    label : 'Javascript',
    percentage:90,
    style:`${styles['progress-line']} ${styles.js }`
   },
   {
    label : 'React',
    percentage:85,
    style:`${styles['progress-line']} ${styles.react }`
   }
   
];

const Skill = () => {
    const[isIntersected, setIsIntersected] = useState(false);
    const sectionRef = useRef(null);
    useEffect(() => {
        const options ={
            rootMargin:'0px',
            threshold: 0.15,
        };
        const handleIntersection = (entries,observer) =>{
            const[entry]= entries;
             if(entry.isIntersecting){
                setIsIntersected(true);
                observer.unobserve(entry.target);
             }
        }
        const observer = new IntersectionObserver
        (handleIntersection,options);
        observer.observe(sectionRef.current);
        return () => {
            observer.disconnect();
        };



    },[])



  return (
   <section id='skills'className={styles.skills} ref={sectionRef}>
    <div className='container'>
        <div className={styles.title}>
            <h2><span>My</span>Skills</h2>
            <hr/>

        </div>
        <div className={`grid ${styles['skills-grid']}`}>
<div className={styles.content}>
<h1>
    In <span>Designing</span><br/>
    And <span>Developing</span>
</h1>
<p>
    Every day is a new challenge,and I'm trying to gain more knowledge and experience. Learning new technologies has always been interesting to me. As technology is evolving so fast , I try to keep myself up to date.
</p>
</div>
<div className={styles["skill-bars"]}>
    {skillsData.map(skill =>(
        <Skillbar
        key={skill.label}
        label={skill.label}
        percentage={skill.percentage}
        style={ isIntersected ? skill.style:''}
        
        
        />
    ))}

</div>
        </div>

    </div>
    <div className={styles.bottom}>
        <div className={`${styles.flex} container`}> 
        <div>
            <h3>I'm available for work</h3>
        </div>
        <div>

        </div>
<a href='#contact'>Contact Me</a>
        </div>

    </div>

   </section>
  )
}

export default Skill