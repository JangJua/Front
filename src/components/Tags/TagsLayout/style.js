import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledTagSection = styled.div`
  width: 1200px;
  display: flex;
  flex-wrap: wrap;
  margin: 4rem auto 0px;
`;

export const TagItemWrapper = styled.div`
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  -webkit-box-pack: justify;
  justify-content: space-between;
  width: 25%;
  padding: 1rem;

  ${(props) =>
    props.description &&
    `
  height: 12rem;
  `};
  @media (max-width: 1024px) {
    height: auto;
  }
  @media (max-width: 1024px) {
    width: 50%;
    margin-bottom: 1rem;
    .count {
      margin-top: 0.5rem;
    }
  }
  @media (max-width: 1200px) {
    width: 33.333%;
  }
  p {
    margin-top: 0.125rem;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    font-size: 0.875rem;
    color: rgb(73, 80, 87);
    line-height: 1.5;
    overflow: hidden;
  }
  .count {
    font-size: 0.875rem;
    color: rgb(173, 181, 189);
  }
`;

export const TagItemLink = styled(Link)`
  margin-bottom: 0.875rem;
  padding-left: 1rem;
  padding-right: 1rem;
  height: 2rem;
  display: inline-flex;
  -webkit-box-align: center;
  align-items: center;
  margin-right: 0.875rem;
  color: rgb(12, 166, 120);
  font-weight: 500;
  font-size: 1rem;
  background: rgb(241, 243, 245);
  border-radius: 1rem;
  text-decoration: none;
`;
