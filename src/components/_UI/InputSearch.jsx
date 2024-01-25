import styled from "styled-components"
import Icon from "./Icon";
import { Row } from "../../styled/alignment/Row";
import colors from "../../theme/colors";
import sizes from "../../theme/sizes";
import fonts from "../../theme/fonts";

export default function InputSearch({
    placeholder,
    onChangeValue,
}  
) {
    
    const toggleValue = (e) => {
        onChangeValue(e || false);
    };


  return (
   <StyledInput>
     <Input 
        placeholder={placeholder}
        onChange={(e) => toggleValue(e.target.value)}
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
`;
const ContentIcon = styled.div`
    width: ${sizes.big};
    height: ${sizes.big};
    position: absolute;
    right: ${sizes.tiny};
    top: 20%;
    
`;
const Input = styled.input`
    width: 100%;
    text-indent: ${sizes.tiny};
    padding: ${sizes.tiny};
    padding-right: 45px;
    border-radius: ${sizes.nano};
    border: 1px solid ${colors.secondary};
    color: ${colors.secondary};
    font-weight: ${fonts.weight.light};
    &:focus {
        border-bottom: 2px solid ${colors.primaryLight};
        color: ${colors.primaryDark};

    }
`;