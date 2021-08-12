import styled from 'styled-components';

export const LinkMenu = styled.a`
    &:hover {
        color:#ff0053;
    }

    & {
        cursor:pointer;
        display:block;
        position:relative;
    }
    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 0.06em;
        background-color: #ed145b;
        opacity: 0;
        transition: opacity 300ms, transform 350ms;
    }
    &:hover::after,
    &:focus::after {
    
	opacity: 1;
	transform: translate3d(0, 0.2em, 0);
    }
    &:hover::after,
    &:focus::after{
    transform: scale(1);
    }
    &::after {
    opacity: 1;
    transform: scale(0);
    transform-origin: center;
}
` 