import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Nav = () => {
  const Nav = (styled.nav = `
  
  .navbar-lists{
    display:flex;
    gap:4.8rem;
    align-items:center;

    .navbar-link{
        &:link,
        &:visited{
            display:inline-block;
            text-decoration:none;
            font-size:1.8rem;
            font-weight:800;
            text-transform:uppercase;
            color:${(theme) => theme.colors.black};
            transition:color 0.3s linier;
        }
        &:hover,
        &:active{
             color:${(theme) => theme.colors.helper};
        }
    }
  }
  .mobile-nav-btn{
    display:none;
    background-color:transparent;
    cursor:pointer;
    border:none;
  }
  .mobile-nav-icon[name='close-outline']{
    display:none;
  }
  .close-outline{
    display:none;
  }
  .cart-trolley--link{
    position:relative;
    .cart-trolley{
        position:relative;
        font-size:5.2rem;
        .cart-total--item{
            width:4.2rem;
            height:4.2rem;
            font-size:2rem;
        }
    }
    .user-logout,
    .user-login{
        font-size:2.2rem;
        padding:0.8rem 1.4rem;
    }
  }
    `);
};

export default Nav;
