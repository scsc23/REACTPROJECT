import React from "react";
import styled, { css } from "styled-components";
import {lighten, darken} from "polished";

const colorStyle = css`
    ${({theme, color}) => {
        const selected = theme.palette[color];
        return css`            
            background: ${selected};
            &:hover {
                background: ${lighten(0.1, selected)}
            }
            &:active {
                background: ${darken(0.1, selected)}
            }


            ${props => 
                props.outline && css`
                    color: ${selected};
                    background: none;
                    border: 1px solid ${selected};
                    &:hover {
                        background: ${selected};
                        color: white;
                    }
                `
            }
        `;
    }}
`;

const fullWidth = css`
     ${props =>
    props.fullWidth &&
    css`
      width: 100%;
      justify-content: center;
      &:not(:first-child) {
        margin-left: 0rem;
        margin-top: 1rem;
      }
    `}
`;

const sizes = {
    large: {
        height: '3rem',
        fontSize: '1.25rem'
    },
    medium: {
        height: '2.25rem',
        fontSize: '1rem'
    },
    small: {
        height: '1.75rem',
        fontSize: '0.875rem'
    }
};

const sizeStyle = css`
    ${({size}) => css` height: ${sizes[size].height}; font-size: ${sizes[size].fontSize};`}
    `

const StyledButton = styled.button`
    /* 공통 스타일*/
    display: inline-flex;
    align-items: center;
    justify-content: center;
    outline: none;
    border: none;
    border-radius: 4px;
    color: white;
    font-weight: bold;
    cursor: pointer;
    padding-left: 1rem;
    padding-right: 1rem;

    /* 크기 */
    ${sizeStyle}

    /* 색상 */
    ${colorStyle}
    
    /* 너비 채우기 */
    ${fullWidth}

    /* 기타 */
    &:not(:first-child) {
        margin-left: 1rem;
    }

    /* fullWidth 속성 있을 때 수직 정렬 */
     ${({ fullWidth }) =>
    fullWidth && css`    
      &:not(:first-child) {
        margin-top: 1rem;
        margin-left: 0rem;
      }
    `}
`

function Button({children, color, size, fullWidth, outline, ...rest}) {
    return <StyledButton color={color} size={size} fullWidth={fullWidth} outline={outline} {...rest}>{children}</StyledButton>
}

Button.defaultProps = {
    color: 'blue',
    size: 'medium'
}

export default Button;