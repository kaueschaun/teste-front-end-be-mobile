import styled from 'styled-components'
import {Column} from '../../styled/alignment/Column'
import Header from '../_UI/Header';
import breakpoints from '../../theme/breakpoints';
import sizes from '../../theme/sizes';

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
    padding: ${sizes.tiny} ${sizes.intermediary};
    @media screen and(min-width: ${breakpoints.lg}){
        padding: ${sizes.tiny} ${sizes.bigLarge};
    }
`;

const StyledContent = styled(Column)`
    width: 100%;
`;
