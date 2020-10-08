import styled from 'styled-components';

export const Container = styled.div`
    background: repeating-linear-gradient(
      64deg,
      #99999bbd,
      #99999bbd 14px,
      #ccc,
      #ccc 15px
    );
    max-width: 720px !important; 
    margin: auto;
    ul {
      li a {
        color: #fff !important;
        border-radius: 0 !important;
        clip-path: polygon(0 0, 88% 0, 100% 40%, 100% 0%, 100% 100%, 0% 100%);
        background: radial-gradient(80% 60% at 70% bottom,#3f4393 80%, #3f4393 ,#51559C);
        
      }
      & li a:hover {
        text-decoration: none;
        animation: flash 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      }
    }

    @keyframes flash {
      0% {
        filter: brightness(1);
      }
      70% {
        filter: brightness(1.2);
      }
      100% {
        filter: brightness(1.18);
      }
    }
    
    .mobile-nav {
      display: none;
    }

    @media (max-width:720px) {
      .desk-only{
        display: none;
      }
      .mobile-only{
        background-color: #51559C !important; 
        color: #fff !important;
      }
      .link-mobile {
        color: #ccc !important;
      }
      .mobile-nav {
        display: block;
      }
    }

`;
