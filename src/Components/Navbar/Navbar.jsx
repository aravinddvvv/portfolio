import React, { useEffect, useState } from 'react'
import styles from './Navbar.module.css'
import NavbarLinks from './NavbarLinks/NavbarLinks'
const navLinks =[
    {id:"home",label:"Home"},
    {id:'about',label:'About'},
    {id:'skills',label:'Skills'},
    {id:'portfolio',label:'Portfolio'},
    {id:'contact',label:'Contact'},
];

const Navbar = () => {
    const[windowWidth,setWindowWidth]=useState(window.innerWidth);
    const[showLinks, setShowLinks] = useState(false);
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        }
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        };
    },[windowWidth]);

    const handleSectionClick = (event) => {
      event.preventDefault();
      const sectionId = event.target.getAttribute("href").substring(1);
      const section = document.getElementById(sectionId);
      if (section) {
        const navbarHeight = document.querySelector("nav").offsetHeight;
        const sectionTop = section.offstTop;
        window.scrollTo({top: sectionTop, behavior: "smooth",
    });
      }

    };
    const toggleLinks =  ()=>{
       setShowLinks(!showLinks);
    }
  return (
   <header className={styles.header}>
<nav  className={styles.navbar}>
<div className="container">
    <div className={styles['navbar-wrapper']}>



<div>
    <a href="index.html">
       <h1 style={{fontFamily:"cursive"}} ><b>Portfolio</b></h1>
    </a>
</div>
{/* next div */}
<div className={`${styles['navbar-links']} ${showLinks ? styles.show :''}`}>
<ul>
    {navLinks.map(link =>(
     <NavbarLinks
      key={link.id}
      href={`#${link.id}`}
      label={link.label}/>   
    ))}
</ul>


</div>
{/* last div */}
{windowWidth <= 890 &&(
<div className={`${styles['toggle-button']} ${showLinks ? styles.open :''}`} 

onClick={toggleLinks}>
    <span className={styles.line}></span>
    <span className={styles.line}></span>
    <span className={styles.line}></span>

   

</div>
)}




    </div>
</div>
</nav>
   </header>
  )
}

export default Navbar