import styled from 'styled-components';
import marginProps from '../../styled/shared-props/margin';
import paddingProps from '../../styled/shared-props/padding'

export const VerticalCenter = styled.div`
    display: flex;
    align-items: center;
    width: ${ props => props.width};
    height: ${ props => props.height};
    text-align: ${ props => props.textAlign};
    ${marginProps};
    ${paddingProps};
`;

export const HorizontalCenter = styled.div`
    display: flex;
    justify-content: center;
    width: ${ props => props.width};
    height: ${ props => props.height};
    text-align: ${ props => props.textAlign};
    ${marginProps};
    ${paddingProps};
`;

export const FullyCentered = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${ props => props.width};
    height: ${ props => props.height};
    text-align: ${ props => props.textAlign};
    ${marginProps};
    ${paddingProps};
`;

VerticalCenter.defaultProps = {
    width: '100%'
}

HorizontalCenter.defaultProps = {
    width: '100%'
}

FullyCentered.defaultProps = {
    width: '100%'
}