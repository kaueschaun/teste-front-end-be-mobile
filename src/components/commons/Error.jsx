import styled from 'styled-components'
import { Column } from '../../styled/alignment/Column'
import Text from '../_UI/Text';
import colors from '../../theme/colors';
import Icon from '../_UI/Icon';
import { Row } from '../../styled/alignment/Row';
import breakpoints from '../../theme/breakpoints';
import sizes from '../../theme/sizes';
import fonts from '../../theme/fonts';

export default function Error() {
  return (
    <StyledContainer>
        <Content>
            <ContentIcon>
                <Icon name='error' color={colors.secondary} />
            </ContentIcon>
            <Text name='title' color={colors.secondary}>Ocorreu um erro inesperado!</Text>
        </Content>
    </StyledContainer>
  )
}

const StyledContainer = styled(Column)`
    width: 100%;
    height: 400px;
    justify-content: center;
`;

const Content = styled(Column)`
    align-items: center;
    justify-content: center;
    text-align: center;
    @media screen and (min-width: ${breakpoints.lg}) {
        text-align: unset;
        & > p {
            font-size: ${fonts.sizes.title};
        }
    }
`;
const ContentIcon = styled(Row)`
    width: ${sizes.enormous};
    height: ${sizes.enormous};
    @media screen and (min-width: ${breakpoints.lg}) {
        width: 100%;
        height: 100%;
    }

`