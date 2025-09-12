import styled from "styled-components";

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
`;

export const LoaderWrapper = styled.div`
  width: 28px;
  height: 28px;
  animation: spin 2s linear infinite; 
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

export const LoadingMessage = styled.p`
  margin-top: -30px;
`;