import styled from "styled-components"
import colors from '../../theme/colors'
import Icon from '../_UI/Icon'
import sizes from "../../theme/sizes";
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
    height: ${sizes.tremendous};
    background: ${colors.primaryDark};
    position: absolute;
    top: ${sizes.none};
    left: ${sizes.none};;
    display: flex;
    align-items: center;
`;
const ContentIcon = styled.div`
    width: 120px;
    height: 35px;
    padding-left: ${sizes.medium};
`;