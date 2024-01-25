import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Row } from '../../styled/alignment/Row'
import colors from '../../theme/colors'
import Text from './Text'
import { Column } from '../../styled/alignment/Column'
import breakpoints from '../../theme/breakpoints'
import date from '../../helpers/date'
import phoneFormatter from '../../helpers/phone'
import sizes from '../../theme/sizes'
export default function  TableBodyMobile({data}) {
    const [content, setContent] = useState(data)
    const formatDate = (dateContent) => date.format(dateContent);


    useEffect(() => {
        setContent(data.map(el => ({ ...el, visible: false })));
      }, [data]);

      function toggleOpenedItem(item) {
        setContent(prevContent => {
          return prevContent.map(el => {
            if (el.id === item.id) {
              return { ...el, visible: !el.visible };
            } 
            
            return { ...el, visible: false }; 
          });
        });
      }
  return ( 
    <Container>
        <Content>
            {content?.map((item, index) => (
                <>
                    <StyledBody key={index}>
                        <StyledRow>
                            <StyledImage>
                            {
                                item.image &&
                                <Image src={item.image}/>
                            }
                            </StyledImage>
                            <ContentItem>
                                <Text name='subtitle' data-th='name'>{item.name}</Text>
                            </ContentItem>
                            <Arrow 
                                view={item.visible}
                                onClick={() => toggleOpenedItem(item)}
                            />        
                        </StyledRow>
                        <StyledRow>
                            <ContentExtend
                                toogle={item.visible}
                            >   
                                <ContentData>
                                    <Text name='subtitle' fontWeight='regular'>Cargo</Text>
                                    <Text name='subtitle'>{item.job}</Text>
                                </ContentData>
                                <ContentData>
                                    <Text name='subtitle' fontWeight='regular'>Data de Admissão</Text>
                                    <Text name='subtitle'>{formatDate(item.admission)}</Text>
                                </ContentData>
                                <ContentData>
                                    <Text name='subtitle' fontWeight='regular'>Telefone</Text>
                                    <Text name='subtitle'>{phoneFormatter(item.phone)}</Text>
                                </ContentData>
                            </ContentExtend>
                        </StyledRow>
                    </StyledBody>
                </>
            ))}
        </Content>
    </Container>
  )
}

const Container = styled.tbody`
    background: ${colors.white};
    display: flex;
    align-items: center;
    position: relative;
    height: auto;
    box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.20);
    @media screen and (min-width: ${breakpoints.lg}) {
        display: none;
    }
`;

const StyledRow = styled.tr`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Content = styled(Column)`
    width: 100%;
`

const StyledBody = styled.td`
    justify-content: space-between;
    border-bottom: 1px solid rgba(0, 0, 0, 0.20);
    padding: 15px ${sizes.medium};

`;

const ContentItem = styled.td`
    text-align: left;
    display: flex;
    width: 33,3%;
`;

const Arrow = styled.div`
    width: ${sizes.small};
    height: ${sizes.small};
    background: transparent;
    border-right: 1px solid ${colors.primaryLight};
    border-bottom: 1px solid ${colors.primaryLight};
    transform: rotate(45deg);
    margin-right: ${sizes.intermediary};
    transition: all ease-in-out .25s;
    ${({ view }) => view && `
        transform: rotate(225deg);
        margin-top: ${sizes.tiny};
    `}
`;

const StyledImage = styled.td`
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
`;


const ContentExtend = styled(Column)`
    visibility: hidden;
    opacity: ${sizes.none};
    height: ${sizes.none};
    transition: ease .3s all;
    
    ${({ toogle }) => toogle && `
       height: auto;
       visibility: visible;
       opacity: 1;
       display: flex;
       justify-content: space-between;
       padding-top: 15px;
    `}

`;

const ContentData = styled(Row)`
    display: flex;
    justify-content: space-between;
    border: none; 
    border-bottom: 1px dashed ${colors.secondary};
    padding-top: 16px;
`;


