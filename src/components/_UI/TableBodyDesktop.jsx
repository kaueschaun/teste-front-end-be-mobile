import styled from 'styled-components'
import Text from './Text';
import breakpoints from '../../theme/breakpoints';
import date from '../../helpers/date'
import phoneFormatter from '../../helpers/phone'

export default function TableBodyDesktop({data}) {
  const formatDate = (dateContent) => date.format(dateContent);

  return (
    <StyledBody>
      {data?.map((item) => (
        <Content key={item.id}>
          <StyledItem>
            
            <StyledImage>

            </StyledImage>
          </StyledItem>

          <StyledItem>
            <Text name='subtitle'>{item.name}</Text>  
          </StyledItem>

           <StyledItem>
              <ContainerText>
                <ContentText>
                  <Text name='subtitle'>{item.job}</Text>  
                </ContentText>
              </ContainerText>
           </StyledItem>

           <StyledItem>
              <Text name='subtitle'>{item.data_admissao ? formatDate(item.data_admissao) : 'Não Informado'}</Text>  
           </StyledItem>

           <StyledItem>
              <Text name='subtitle'>{item.telefone ? phoneFormatter(item.telefone) : 'Não Informado'}</Text>  
           </StyledItem>
        </Content>
      ))}
    </StyledBody>
  )
}

const StyledBody = styled.tbody`
  display: none;
  @media screen and (min-width: ${breakpoints.lg}) {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.20);
  }
`;

const Content = styled.tr`
  width: 100%;
  display: flex;
  padding: 15px;
  justify-content: space-around;
  padding: 15px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.20);
  align-items: center;
`;

const StyledItem = styled.td`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30%;
  margin-right: 10px;
`;

const ContainerText = styled.td`
  width: 100%;
  justify-content: center;
  display: flex;
`;

const ContentText = styled.td`
  min-width: 70px;
  max-width: auto;
  justify-content: flex-start;
  display: flex;
  
`;
const StyledImage = styled.td`
  display: flex;
  width: 33px;
  background: red;
  height: 33px;
  border-radius: 50%;
  justify-content: flex-end;
  
`;
