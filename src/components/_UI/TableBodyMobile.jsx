import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Row } from '../../styled/alignment/Row'
import colors from '../../theme/colors'
import Text from './Text'
import Icon from './Icon'
import { Column } from '../../styled/alignment/Column'

export default function TableBodyMobile({data}) {
    const [content, setContent] = useState(data)

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
                        <StyledRow verticalCenter>
                            <StyledImage>
                                <Icon name='avatar-woman' />
                            </StyledImage>
                            <ContentItem>
                                <Text name='subtitle'>{item.name}</Text>
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
                                    <Text name='subtitle'>Cargo</Text>
                                    <Text name='subtitle'>Front-end</Text>
                                </ContentData>
                                <ContentData>
                                    <Text name='subtitle'>Data de admissão</Text>
                                    <Text name='subtitle'>00/00/0000</Text>
                                </ContentData>
                                <ContentData>
                                    <Text name='subtitle'>Telefone</Text>
                                    <Text name='subtitle'>+55 (00) 00000-0000</Text>
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

const Container = styled(Column)`
    background: ${colors.white};
    display: flex;
    align-items: center;
    position: relative;
    height: auto;
    box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.20);
`;

const StyledRow = styled(Row)`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Content = styled(Column)`
    /* border: 0.5 solid rgba(0, 0, 0, 0.20); */
`

const StyledBody = styled(Column)`
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgba(0, 0, 0, 0.20);
    padding: 15px 20px;

`;

const ContentItem = styled.div`
    text-align: left;
    display: flex;
    width: 33,3%;
`;

const Arrow = styled.div`
    width: 13px;
    height: 13px;
    background: transparent;
    border-right: 1px solid ${colors.primaryLight};
    border-bottom: 1px solid ${colors.primaryLight};
    transform: rotate(45deg);
    margin-right: 17px;
    transition: all ease-in-out .25s;
    ${({ view }) => view && `
        transform: rotate(225deg);
        margin-top: 10px;
    `}
`;

const StyledImage = styled.div`
    width: 33px;
    height: 33px;
    background: red;
    border-radius: 50%;
`;

const ContentExtend = styled(Column)`
    visibility: hidden;
    opacity: 0;
    height: 0;
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
    border-bottom: 1px dashed  #ccc;
    padding-top: 16px;
`;

