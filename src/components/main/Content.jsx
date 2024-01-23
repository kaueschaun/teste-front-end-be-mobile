import styled from 'styled-components'
import {Column} from '../../styled/alignment/Column'
import {Row} from '../../styled/alignment/Row'
import Text from '../_UI/Text';
import sizes from '../../theme/sizes';

export default function Content({children, title}) {
  return (
    <Container>
        <Column>
            <Text 
                name='title'
                marginBottom={sizes.tremendous}
                marginTop={sizes.tremendous}
            >
                {title}
            </Text>
            <StyledContent>
                {children}
            </StyledContent>
        </Column>
    </Container>
  )
}

const Container = styled(Row)`
    width: 100vh;
`;

const StyledContent = styled.div`
    overflow: auto;
    padding: 10px 60px;
`;