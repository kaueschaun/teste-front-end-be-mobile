import styled from 'styled-components'
import Text from './Text';
import breakpoints from '../../theme/breakpoints';
import date from '../../helpers/date'
import phoneFormatter from '../../helpers/phone'
import sizes from '../../theme/sizes';
import colors from '../../theme/colors';
import Proptypes from 'prop-types'


export default function TableBodyDesktop({data}) {
  const formatDate = (dateContent) => date.format(dateContent);

  return (
    <StyledBody>
      {data?.map((item) => (
        <Content key={item.id}>
          <StyledItem>
            <StyledImage>
              {
                item.image ? 
                  <Image src={item.image} alt='Imagem Ilustrativa'/>
                  : 
                  <Image notImage={!item.image}/>
              }
            </StyledImage>
          </StyledItem>

          <StyledItem>
            <ContainerName>
              <Text 
                name='subtitle' 
                color={colors.primaryDark}
              >
                {item.name ? item.name : 'Não Informado'}
              </Text>  
            </ContainerName>
          </StyledItem>

           <StyledItem>
              <ContainerText>
                <ContentText>
                  <Text 
                    name='subtitle' 
                    color={colors.primaryDark}
                  >
                    {item.job ? item.job : 'Não Informado'}
                  </Text>  
                </ContentText>
              </ContainerText>
           </StyledItem>

           <StyledItem>
              <Text 
                name='subtitle' 
                color={colors.primaryDark}
              >
                {item.admission ? formatDate(item.admission) : 'Não Informado'}
              </Text>  
           </StyledItem>

           <StyledItem>
              <Text 
                name='subtitle' 
                color={colors.primaryDark}
              >
                {item.phone ? phoneFormatter(item.phone) : 'Não Informado'}
              </Text>  
           </StyledItem>
        </Content>
      ))}
    </StyledBody>
  )
}

const StyledBody = styled.div`
  display: none;
  background: ${colors.white};
  @media screen and (min-width: ${breakpoints.lg}) {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    box-shadow: ${sizes.none} 1px 2px 0px rgba(0, 0, 0, 0.20);
    background: ${colors.white};
  }
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  padding: ${sizes.little};
  justify-content: space-around;
  padding: ${sizes.little};
  border-bottom: 1px solid rgba(0, 0, 0, 0.20);
  align-items: center;
  background: ${colors.white};
  `;

const StyledItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30%;
  margin-right: ${sizes.tiny};
  background: ${colors.white};
  & > p {
    background: ${colors.white};
  }
`;

const ContainerName = styled.div`
  min-width: 120px;
  max-width: auto;
  justify-content: flex-start;
  display: flex;
  padding-left: ${sizes.tiny};
  background: ${colors.white};
  & > p {
    background: ${colors.white};
  }
`;
const ContainerText = styled.div`
  width: 100%;
  justify-content: center;
  display: flex;
  background: ${colors.white};
`;

const ContentText = styled.div`
  min-width: 70px;
  max-width: auto;
  justify-content: flex-start;
  display: flex;
  background: ${colors.white};
  & > p {
    background: ${colors.white};
  }
  
`;
const StyledImage = styled.div`
  display: flex;
  width: ${sizes.grand};
  height: 33px;
  border-radius: 50%;
  justify-content: flex-end;
  
`;

const Image = styled.img`
  border-radius: 50%;
  width: ${sizes.grand};
  height: 33px;
  ${({notImage}) => notImage && `
    background: ${colors.secondary};
    border-radius: 50%;
  `}
`;

TableBodyDesktop.propTypes = {
  data: Proptypes.array.isRequired,
};