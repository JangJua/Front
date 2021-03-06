import styled from "styled-components";

export const Container = styled.div`
  width: 768px;
  margin: 0 auto;
  @media (max-width: 1024px) {
    margin-top: 2rem;
    padding: 0 2rem 0 2rem;
  }
  @media (max-width: 768px) {
    width: 100%;
    padding: 0 0.5rem 0 0.5rem;
  }
`;

export const Wrapper = styled.div`
  margin: 5.5rem auto;
`;
