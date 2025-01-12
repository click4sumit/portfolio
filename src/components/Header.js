'use client'

import { useState, useEffect } from 'react'
// import { Menu, X } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleClick = (e) => {
      e.preventDefault();
      const target = e.target;
      const id = target.getAttribute('href')?.slice(1);
      if (id) {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth'
          });
        }
        setIsMenuOpen(false); // Close menu after clicking a link
      }
    };

    const links = document.querySelectorAll('nav a[href^="#"]');
    links.forEach(link => {
      link.addEventListener('click', handleClick);
    });

    return () => {
      links.forEach(link => {
        link.removeEventListener('click', handleClick);
      });
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900 bg-opacity-90 shadow-md">
      <div className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-white">Sumit</a>
          <button 
            className="text-gray-300 hover:text-purple-400 focus:outline-none sm:hidden"
            onClick={toggleMenu}
          >
            {/* {isMenuOpen ? <X size={24} /> : <Menu size={24} />} */}
          </button>
          <nav className={`${isMenuOpen ? 'block' : 'hidden'} sm:block`}>
            <ul className="flex flex-col sm:flex-row sm:space-x-6 space-y-2 sm:space-y-0">
              <li><a href="#home" className="text-gray-300 hover:text-purple-400">Home</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-purple-400">About</a></li>
              <li><a href="#skills" className="text-gray-300 hover:text-purple-400">Skills</a></li>
              <li><a href="#projects" className="text-gray-300 hover:text-purple-400">Projects</a></li>
              <li><a href="#experience" className="text-gray-300 hover:text-purple-400">Experience</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-purple-400">Contact</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header




// 'use client'

// import { useState, useEffect, useRef } from 'react';

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const navRef = useRef(null);

//   const handleLinkClick = (e) => {
//     e.preventDefault();
//     const id = e.target.getAttribute('href')?.slice(1);
//     if (id) {
//       const element = document.getElementById(id);
//       if (element) {
//         element.scrollIntoView({ behavior: 'smooth' });
//       }
//       setIsMenuOpen(false); // Close menu after clicking a link
//     }
//   };

//   useEffect(() => {
//     const navLinks = navRef.current?.querySelectorAll('a[href^="#"]');
//     navLinks?.forEach(link => {
//       link.addEventListener('click', handleLinkClick);
//     });

//     return () => {
//       navLinks?.forEach(link => {
//         link.removeEventListener('click', handleLinkClick);
//       });
//     };
//   }, []);

//   const toggleMenu = () => {
//     setIsMenuOpen((prev) => !prev);
//   };

//   return (
//     <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900 bg-opacity-90 shadow-md">
//       <div className="container mx-auto px-6 py-3">
//         <div className="flex justify-between items-center">
//           <a href="#" className="text-2xl font-bold text-white">Sumit</a>
//           <button 
//             className="text-gray-300 hover:text-purple-400 focus:outline-none sm:hidden"
//             onClick={toggleMenu}
//             aria-label="Toggle Menu"
//           >
//             {isMenuOpen ? 'X' : '☰'}
//           </button>
//           <nav 
//             ref={navRef} 
//             className={`${isMenuOpen ? 'block' : 'hidden'} sm:block`}
//           >
//             <ul className="flex flex-col sm:flex-row sm:space-x-6 space-y-2 sm:space-y-0">
//               <li><a href="#home" className="text-gray-300 hover:text-purple-400">Home</a></li>
//               <li><a href="#about" className="text-gray-300 hover:text-purple-400">About</a></li>
//               <li><a href="#skills" className="text-gray-300 hover:text-purple-400">Skills</a></li>
//               <li><a href="#projects" className="text-gray-300 hover:text-purple-400">Projects</a></li>
//               <li><a href="#experience" className="text-gray-300 hover:text-purple-400">Experience</a></li>
//               <li><a href="#contact" className="text-gray-300 hover:text-purple-400">Contact</a></li>
//             </ul>
//           </nav>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;

