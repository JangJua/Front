import styled from 'styled-components';
import { FiSearch } from "react-icons/all";

export const SearchBarWrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    width: 750px;
    height: 50px;
    margin: 0 auto;
    cursor: text;
    padding: 0px 1.5rem;
    border: 1px solid rgb(173, 181, 189);
    @media (max-width: 767px) {
        width: 100%;
        margin: 0 auto 0 auto;
        height: 30px;
    }
    svg {
        transition: all 0.125s ease-in 0s;
        flex-shrink: 0;
        color: rgb(173, 181, 189);
        margin-right: 1.25rem;
        width: 2rem;
        height: 2rem;
    }
    
`;

export const SearchInput = styled.input`
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    cursor: text;
    width: 100%;
    height: 4rem;
    font-size: 1.5rem;
    line-height: 2rem;
    height: 2rem;
    outline: 0px;
    border: none;
    transition: all 0.125s ease-in 0s;
`;

export const SearchIcon = styled(FiSearch)`
    
`;

export const UsernameWrapper = styled.div`
    margin-top: 1rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    color: rgb(52, 58, 64);
`;
