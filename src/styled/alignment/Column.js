import styled, { css } from 'styled-components';
import marginProps from '../../styled/shared-props/margin';
import paddingProps from '../../styled/shared-props/padding';

export const Column = styled.div`
    display: flex;
    flex-direction: column;
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

Column.defaultProps = {
    width: '100%'
}