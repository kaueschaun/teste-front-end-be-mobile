import styled from 'styled-components'
import {Column} from '../../styled/alignment/Column'
import Header from '../_UI/Header';
import breakpoints from '../../theme/breakpoints';

export default function Content({children}) {
  return (
    <Container>
        <Header />

        <StyledContent>
            {children}
        </StyledContent>

    </Container>
  )
}

const Container = styled(Column)`
    width: 100%;
    padding: 10px 18px;
    @media screen and(min-width: ${breakpoints.lg}){
        padding: 10px 30px;
    }
`;

const StyledContent = styled.div`
    /* padding: 10px 20px; */
    /* background: green; */
`;

const ContentTitle = styled.div`
    margin-top: 80px;
`