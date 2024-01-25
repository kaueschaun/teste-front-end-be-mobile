import styled from 'styled-components'
import { Column } from '../../styled/alignment/Column'
import Icon from '../_UI/Icon';
import { Row } from '../../styled/alignment/Row';
import Text from '../_UI/Text';
import breakpoints from '../../theme/breakpoints';
import sizes from '../../theme/sizes';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';

export default function SearchNotFound() {
  return (
    <Container>
        <Content>
            <StyledIcon>
                <Icon name='search-not-found' />
            </StyledIcon>
            <Text 
                name='title' 
                color={colors.secondary}
                marginTop={sizes.medium}
            >
                Nenhum Resultado foi Encontrado!
            </Text>
        </Content>
    </Container>
  )
}

const Container = styled(Column)`
    width: 100%;
    align-items: center;
    margin-top: ${sizes.tremendous};
`;

const Content = styled(Column)`
    align-items: center;
    justify-content: center;
    text-align: center;
    @media screen and (min-width: ${breakpoints.lg}) {
        text-align: unset;
        & > p {
            font-size: ${fonts.sizes.subtitle};
        }
    }
`;

const StyledIcon = styled(Row)`
    width: ${sizes.enormous};
    height: ${sizes.enormous};
    @media screen and (min-width: ${breakpoints.lg}) {
        width: 100%;
        height: 100%;
    }
`