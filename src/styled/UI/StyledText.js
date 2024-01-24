import styled, { css } from 'styled-components';

import marginProps from '../../styled/shared-props/margin';
import paddingProps from '../../styled/shared-props/padding';
import fonts from '../../theme/fonts';

export const StyledTitle = styled.p`
     font-weight: ${fonts.weight.regular};
     ${marginProps};
     ${paddingProps};
      
     ${({ color }) => color && css`
        color: ${color}
     `};
     ${({ fontWeight }) => fontWeight === 'light' && css`
        font-weight: ${fonts.weight.light}
     `};
     ${({ name }) => name === 'title' && css`
        font-size: ${fonts.sizes.title};
     `};
     ${({ ellipsisAt }) => ellipsisAt && css`
        max-width: ${ellipsisAt};
        white-space: nowrap;                  
        overflow: hidden;
        text-overflow: ellipsis;
     `};
`;

export const StyledSubtitle = styled.p`
    font-weight: ${fonts.weight.normal};
    ${marginProps};
    ${paddingProps};
    
    ${({ color }) => color && css`
        color: ${color}
     `};

     ${({ fontWeight }) => fontWeight === 'regular' && css`
        font-weight: ${fonts.weight.regular}
     `};

    ${({ name }) => name === 'subtitle' && css`
        font-size: ${fonts.sizes.subtitle};
    `};
    ${({ ellipsisAt }) => ellipsisAt && css`
        max-width: ${ellipsisAt};
        white-space: nowrap;                  
        overflow: hidden;
        text-overflow: ellipsis;
     `};
`;