import styled from 'styled-components';

export const Container = styled.div`
  background: #ffffffed;

  ul {
    li a {
      color: #333333 !important;
    }
    & li a:hover {
      text-decoration: none;
    }
  }
  .drop-content {
    position: absolute;
    width: 17%;
    border-radius: 15px;
    background-color: #333333;
    ul li a {
      padding: 0 20%;
      color: #fff !important;
    }
  }
  .menu-btn {
    border: none;
    cursor: pointer;
    &:active,
    &:focus {
      outline: none;
    }
    &:after {
      content: '';
      display: block;
      position: absolute;
      top: 8px;
      left: 12px;
      background: #333;
      border-radius: 50%;
      width: 65px;
      height: 65px;
      transition: all 0.2s;
      opacity: 0;
    }
    &__icon {
      position: relative;
      width: 50px;
      height: 40px;
      margin: 0 auto;
      cursor: pointer;
    }
  }

  .icon {
    position: absolute;
    top: 0;
    left: 0;
  }

  .icon--menu {
    span {
      display: block;
      width: 50px;
      height: 4px;
      background: #333;
      transition: all 0.18s;
      transition-timing-function: $transition;
      transition-delay: 0.05s;
      &:not(last-child) {
        margin-bottom: 12px;
      }
    }
  }

  .icon--close {
    transform: scale(0);
    transform-origin: center center;
    transition: all 0.18s;
    transition-delay: 0.08s;
    transition-timing-function: cubic-bezier(0.17, 0.67, 0.42, 1.36);
    opacity: 0;

    span {
      position: relative;
      display: block;
      width: 50px;
      height: 4px;
      background: #333;
      &:nth-of-type(1) {
        top: 17px;
        transform: rotate(45deg);
      }
      &:nth-of-type(2) {
        top: 13px;
        transform: rotate(-45deg);
      }
    }
  }

  .is--active {
    .icon--menu {
      span {
        width: 0;
      }
    }
    .icon--close {
      transform: scale(1);
      opacity: 1;
    }
  }

  .is--clicked {
    &:after {
      animation: btnClick 0.35s;
      animation-timing-function: cubic-bezier(0.17, 0.67, 0.42, 1.36);
    }
  }

  @keyframes btnClick {
    0% {
      opacity: 0;
      transform: scale(0);
    }
    50% {
      opacity: 0.35;
      transform: scale(1);
    }
    100% {
      opacity: 0;
      transform: scale(0);
    }
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }

  .vh-100 {
    height: 100vh;
  }
  .slide-in-left {
    -webkit-animation: slide-in-left 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)
      both;
    animation: slide-in-left 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }
  @-webkit-keyframes slide-in-left {
    0% {
      -webkit-transform: translateX(-1000px);
      transform: translateX(-1000px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
      opacity: 1;
    }
  }
  @keyframes slide-in-left {
    0% {
      -webkit-transform: translateX(-1000px);
      transform: translateX(-1000px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
      opacity: 1;
    }
  }
  .slide-out-left {
    -webkit-animation: slide-out-left 0.5s cubic-bezier(0.55, 0.085, 0.68, 0.53)
      both;
    animation: slide-out-left 0.5s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
  }
  @-webkit-keyframes slide-out-left {
    0% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
      opacity: 1;
    }
    100% {
      -webkit-transform: translateX(-1000px);
      transform: translateX(-1000px);
      opacity: 0;
    }
  }
  @keyframes slide-out-left {
    0% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
      opacity: 1;
    }
    100% {
      -webkit-transform: translateX(-1000px);
      transform: translateX(-1000px);
      opacity: 0;
    }
  }
  img {
    max-width: none;
  }
  @media (min-width: 769px) {
    .md-none {
      display: none;
    }
    .navbar-nav {
      flex-direction: row !important;
    }
  }
  @media (max-width: 768px) {
    .sm-none {
      display: none;
    }
  }
  @media (max-width: 524px) {
    .w-sm-100 {
      width: 100%;
    }
  }
  @media (min-width: 1920px) {
  }
`;
