
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch, } from 'react-redux';
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
 import { setLang } from './redux/Reducers/i18nReducer';

export const NavBarComponent = () => {
  const favCount = useSelector((state) => state.fav.items.length);
   const lang = useSelector((state) => state.i18n.lang);
   const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);

















   const t = {
     en: {
       home: 'Home',
       browse: 'Browse',
       favorites: 'Favorites',
       surprise: '🎬 Surprise Me',
       login: 'Login',
       signup: 'Sign Up',
       tagline: 'Your nightly movie fix 🍿',
       langBtn: 'AR',
     },
     ar: {
       home: 'الرئيسية',
       browse: 'تصفح',
       favorites: 'المفضلة',
       surprise: '🎬 فاجئني',
       login: 'تسجيل الدخول',
       signup: 'إنشاء حساب',
       tagline: 'جرعتك الليلية من الأفلام 🍿',
       langBtn: 'EN',
     },
   }[lang];

   const toggleLang = () => {
     const next = lang === 'en' ? 'ar' : 'en';     dispatch(setLang(next));
     try { localStorage.setItem('lang', next); } catch {}
   };










  return (
    <CNavbar expand="lg" colorScheme="dark" className="app-navbar sticky-top">
      <CContainer fluid>
        <Link to="/" className="navbar-brand navbar-brand-logo">FilmFlix</Link>

        <CNavbarToggler onClick={() => setVisible((v) => !v)} />

        <CCollapse className="navbar-collapse" visible={visible}>
          {/* */}
          <CNavbarNav className="me-auto">
          
                <NavLink end to="/" className="nav-link nav-link-custom">{t.home}</NavLink>
             <NavLink to="/movies" className="nav-link nav-link-custom">{t.browse}</NavLink>
             <NavLink to="/favorites" className="nav-link nav-link-custom position-relative">
               {t.favorites}
              {favCount > 0 && <span className="fav-badge">{favCount}</span>}
            </NavLink>

            {/* */}
            
            <Link to="/random" className="btn btn-outline-warning ms-lg-2 my-2 my-lg-0">{t.surprise}</Link>

          </CNavbarNav>

          {/* */}
          <div className="d-flex align-items-center gap-2 ms-auto">

             <span className="navbar-tagline d-none d-lg-inline">{t.tagline}</span>
             <CButton color="secondary" variant="outline" onClick={toggleLang} title="Toggle language">
               {t.langBtn}
             </CButton>
            <Link to="/login" className="text-decoration-none">

                             <CButton color="secondary" variant="outline">{t.login}</CButton>

            </Link>

            <Link to="/signup" className="text-decoration-none">
               <CButton color="info">{t.signup}</CButton>
            </Link>
          </div>
        </CCollapse>
      </CContainer>
    </CNavbar>
  );
};

export default NavBarComponent;
