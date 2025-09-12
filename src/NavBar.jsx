// import React, { useState } from 'react';
// import { useSelector } from 'react-redux';
// import {
//   CNavbar,
//   CContainer,
//   CNavbarToggler,
//   CCollapse,
//   CNavbarNav,
//   CForm,
//   CFormInput,
//   CButton,
// } from '@coreui/react';
// import { Link, NavLink } from 'react-router-dom';
// import './NavBar.css'; // Import the new custom styles

// export const NavBarComponent = () => {
//   const favCount = useSelector(state => state.fav.items.length);
//   const [visible, setVisible] = useState(false);

//   return (
//     <CNavbar expand="lg" colorScheme="dark" className="app-navbar sticky-top">
//       <CContainer fluid>
//         {/* Brand/Logo */}
//         <Link to="/" className="navbar-brand navbar-brand-logo">
//           FilmFlix
//         </Link>
//         <CNavbarToggler onClick={() => setVisible(!visible)} />

//         <CCollapse className="navbar-collapse" visible={visible}>
//           {/* Left-aligned navigation items */}
//           <CNavbarNav className="me-auto">
//             <NavLink to="/favorites" className="nav-link nav-link-custom">
//               Favorites
//               {favCount > 0 && <span className="fav-badge">{favCount}</span>}
//             </NavLink>
//           </CNavbarNav>

//           {/* Search Form */}
//           <CForm className="d-flex search-form mx-lg-3">
//             <CFormInput type="search" placeholder="Search movies..." />
//             <CButton type="submit" color="info" variant="outline">
//               Search
//             </CButton>
//           </CForm>

//           {/* Right-aligned auth buttons */}
//           <CNavbarNav>
//             <div className="d-flex align-items-center ms-lg-3 mt-3 mt-lg-0">
//               <Link to="/login" style={{ textDecoration: 'none' }}>
//                 <CButton color="info" variant="outline" className="me-2">
//                   Login
//                 </CButton>
//               </Link>
//               <Link to="/signup" style={{ textDecoration: 'none' }}>
//                 <CButton color="info">Sign Up</CButton>
//               </Link>
//             </div>
//           </CNavbarNav>
//         </CCollapse>
//       </CContainer>
//     </CNavbar>
//   );
// };

// export default NavBarComponent;


import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  CNavbar,
  CContainer,
  CNavbarToggler,
  CCollapse,
  CNavbarNav,
  CButton,
} from '@coreui/react';
import { Link, NavLink } from 'react-router-dom';
import './NavBar.css';

export const NavBarComponent = () => {
  const favCount = useSelector((state) => state.fav.items.length);
  const [visible, setVisible] = useState(false);

  return (
    <CNavbar expand="lg" colorScheme="dark" className="app-navbar sticky-top">
      <CContainer fluid>
        <Link to="/" className="navbar-brand navbar-brand-logo">FilmFlix</Link>

        <CNavbarToggler onClick={() => setVisible((v) => !v)} />

        <CCollapse className="navbar-collapse" visible={visible}>
          {/* اليسار: روابط التصفح الأساسية */}
          <CNavbarNav className="me-auto">
            <NavLink end to="/" className="nav-link nav-link-custom">
              Home
            </NavLink>

            <NavLink to="/movies" className="nav-link nav-link-custom">
              Browse
            </NavLink>

            <NavLink to="/favorites" className="nav-link nav-link-custom position-relative">
              Favorites
              {favCount > 0 && <span className="fav-badge">{favCount}</span>}
            </NavLink>

            {/* زر تجميلي + مفيد */}
            <Link to="/random" className="btn btn-outline-warning ms-lg-2 my-2 my-lg-0">
              🎬 Surprise Me
            </Link>
          </CNavbarNav>

          {/* اليمين: عبارة تسويقية + أزرار الدخول/التسجيل */}
          <div className="d-flex align-items-center gap-2 ms-auto">
            <span className="navbar-tagline d-none d-lg-inline">Your nightly movie fix 🍿</span>

            <Link to="/login" className="text-decoration-none">
              <CButton color="secondary" variant="outline">Login</CButton>
            </Link>

            <Link to="/signup" className="text-decoration-none">
              <CButton color="info">Sign Up</CButton>
            </Link>
          </div>
        </CCollapse>
      </CContainer>
    </CNavbar>
  );
};

export default NavBarComponent;
