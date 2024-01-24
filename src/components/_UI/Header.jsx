import styled from "styled-components"
import colors from '../../theme/colors'
import Icon from '../_UI/Icon'
export default function Header() {
  return (
    <Container>
        <ContentIcon>
            <Icon name='logo'/>
        </ContentIcon>
    </Container>
  )
}
const Container = styled.header`
    width: 100%;
    height: 60px;
    background: ${colors.primaryDark};
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
`;
const ContentIcon = styled.div`
    width: 120px;
    height: 35px;
    padding-left: 20px;
`;