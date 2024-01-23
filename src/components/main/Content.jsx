import styled from 'styled-components'
import {Column} from '../../styled/alignment/Column'
import {Row} from '../../styled/alignment/Row'
import Text from '../_UI/Text';
import sizes from '../../theme/sizes';
import Header from '../_UI/Header';

export default function Content({children, title}) {
  return (
    <Container>
        <Header />

        <ContentTitle>
            <Text 
                name='title'
            >
                {title}
            </Text>
        </ContentTitle>

        <StyledContent>
            {children}
        </StyledContent>

    </Container>
  )
}

const Container = styled(Column)`
    width: 100%;
    padding: 10px 20px;
`;

const StyledContent = styled.div`
    /* padding: 10px 20px; */
    /* background: green; */
`;

const ContentTitle = styled.div`
    margin-top: 80px;
`