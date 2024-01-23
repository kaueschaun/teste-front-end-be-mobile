import styled, { css } from 'styled-components';
import marginProps from '../../styled/shared-props/margin'
import paddingProps from '../../styled/shared-props/padding';

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    width: ${ props => props.width};
    height: ${ props => props.height};
    ${marginProps};
    ${paddingProps};
    
    ${({ horizontalCenter }) => horizontalCenter && css`
        justify-content: center;
    `}

    ${({ verticalCenter }) => verticalCenter && css`
        align-items: center;
    `}

    ${({ fullyCentralized }) => fullyCentralized && css`
        align-items: center;
        justify-content: center;
    `}
`;

Row.defaultProps = {
    width: '100%'
}
