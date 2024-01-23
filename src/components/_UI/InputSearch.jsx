import styled from "styled-components"
import Icon from "./Icon";
import { Row } from "../../styled/alignment/Row";
import colors from "../../theme/colors";
import sizes from "../../theme/sizes";
import fonts from "../../theme/fonts";

export default function InputSearch({
    placeholder,
}  
) {
  return (
   <StyledInput>
     <Input 
        placeholder={placeholder}
     />
        <ContentIcon>
            <Icon name='search' />
        </ContentIcon>
    </StyledInput>
  )
}
const StyledInput = styled(Row)`
    background: ${colors.light};
    display: flex;
    justify-content: space-between;
    width: 100%;
    position: relative;
    margin-top: 20px;
`;
const ContentIcon = styled.div`
    width: 24px;
    height: 24px;
    position: absolute;
    right: 10px;
    top: 20%;
    
`
const Input = styled.input`
    width: 100%;
    text-indent: 10px;
    padding: 10px;
    padding-right: 45px;
    border-radius: ${sizes.nano};
    border: 1px solid #CDCDCD;
    color: #CDCDCD;
    font-weight: ${fonts.weight.light}
`;