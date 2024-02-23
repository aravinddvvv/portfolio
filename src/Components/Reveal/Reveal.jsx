// import React, { useEffect, useRef } from 'react'


// const Reveal = ({childern,threshold}) => {
//    const sectionRef = useRef(null);
// useEffect(()=>{
//     const options = {
//         rootMargin:'0px',
//         threshold:threshold || 0.1,
//     };
//     const callback = (entries,observer) =>{
//         entries.forEach((entry) =>{
//             if(entry.isIntersecting){
//                 sectionRef.current.style.transform =
//                 'translateY(0px)';
//                 sectionRef.current.style.opacity ='1';
//                 observer.unobserve(entry.target);
                

//             }
//         });
            
        
//     };
//     const observer = new IntersectionObserver(callback,
//         options);

//         observer.observe(sectionRef.current);
// return () =>{
//     observer.disconnect()
// }


// },[threshold]);
//   return 
//     <div ref={sectionRef} className='reveal'>
//         {childern}</div>
  
// };

// export default Reveal