import styled, { keyframes } from 'styled-components';
import { FullyCentered } from '../../styled/alignment/Center';
import colors from '../../theme/colors';
import sizes from '../../theme/sizes';

const spin = keyframes`
    from {
        transform: rotate(0);
    }
    to{
        transform: rotate(359deg);
    }
`;

export const StyledLoaderBox = styled(FullyCentered)`
    width: 100%;
    height: 400px;
    background-color: transparent;
    margin: ${sizes.tiny} ${sizes.none};
`;

export const StyledSpinner = styled.div`
    width: 26px;
    height: 26px;
    border: 3px solid ${colors.primaryLight};
    border-top: 3px solid transparent;
    border-radius: 50%;
    animation: ${spin} .5s linear 0s infinite;

    ${({ color }) => color && `
        border: 3px solid ${color} !important;
        border-top: 3px solid transparent !important;
    `};

    ${({ size }) => size === 'large' && `
        width: ${sizes.tremendous};
        height: ${sizes.tremendous};
    `};

    ${({ size }) => size === 'medium' && `
        width: ${sizes.gigantic};
        height: ${sizes.gigantic};
    `};
`