import styled from 'styled-components';


export const Container = styled.div`
  max-width: 720px;
  margin: auto;

  h2 {
    font-size: 1.5rem;
  }

  .btn-primary {
    background-color: #3f4096;
    border: #3f4096;
  }

  .form-group {
    color: #3f4096;
  }

  @media (max-width: 768px) {
    .logo {
      min-width: 20%
  
    }
  }
`;
