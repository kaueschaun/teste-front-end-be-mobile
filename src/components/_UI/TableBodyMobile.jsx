import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Row } from '../../styled/alignment/Row'
import colors from '../../theme/colors'
import Text from './Text'
import { Column } from '../../styled/alignment/Column'
import breakpoints from '../../theme/breakpoints'
import date from '../../helpers/date'
import phoneFormatter from '../../helpers/phone'
import sizes from '../../theme/sizes'
import Proptypes from 'prop-types'

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
            {content?.map((item) => (
                <React.Fragment key={item.id}>
                    <StyledBody>
                        <StyledRow>
                            <StyledImage>
                            {
                                item.image &&
                                <Image src={item.image} alt='Imagem Ilustrativa'/>
                            }
                            </StyledImage>
                            <ContentItem>
                                <Text 
                                    name='subtitle'
                                    color={colors.primaryDark}
                                >
                                    {item.name}
                                </Text>
                            </ContentItem>
                            <Arrow 
                                {...(item.visible && { view: 'true' })}
                                onClick={() => toggleOpenedItem(item)}
                            />        
                        </StyledRow>
                        <StyledRow>
                            <ContentExtend
                                $toogle={item.visible}
                            >   
                                <ContentData>
                                    <Text 
                                        name='subtitle' 
                                        fontWeight='regular' 
                                        color={colors.primaryDark}
                                    > 
                                        Cargo
                                    </Text>
                                    <Text 
                                        name='subtitle' 
                                        color={colors.primaryDark}
                                    >
                                        {item.job ? item.job : 'Não Informado'}
                                    </Text>
                                </ContentData>
                                <ContentData>
                                    <Text 
                                        name='subtitle' 
                                        fontWeight='regular'
                                        color={colors.primaryDark}
                                    > 
                                        Data de Admissão
                                    </Text>
                                    <Text 
                                        name='subtitle'
                                        color={colors.primaryDark}
                                    >
                                        {item.admission ? formatDate(item.admission) : 'Não Informado'}
                                    </Text>
                                </ContentData>
                                <ContentData>
                                    <Text 
                                        name='subtitle' 
                                        fontWeight='regular'
                                    >
                                        Telefone</Text>
                                    <Text 
                                        name='subtitle'
                                        color={colors.primaryDark}
                                    >
                                        { item.phone ? phoneFormatter(item.phone) : 'Não Informado'}
                                    </Text>
                                </ContentData>
                            </ContentExtend>
                        </StyledRow>
                    </StyledBody>
                </React.Fragment>
            ))}
        </Content>
    </Container>
  )
}

const Container = styled.div`
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

const StyledRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: ${colors.white} ;
`;

const Content = styled(Column)`
    width: 100%;
`

const StyledBody = styled.div`
    justify-content: space-between;
    border-bottom: 1px solid rgba(0, 0, 0, 0.20);
    padding: 15px ${sizes.medium};
    background: ${colors.white};
`;

const ContentItem = styled.div`
    text-align: left;
    display: flex;
    width: 33,3%;
    & > p {
        background: ${colors.white};
    }
`;

const Arrow = styled.div`
    width: ${sizes.small};
    height: ${sizes.small};
    background: ${colors.white};
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
`;


const ContentExtend = styled(Column)`
    visibility: hidden;
    opacity: ${sizes.none};
    height: ${sizes.none};
    transition: ease .3s all;
    background: ${colors.white};

    
    ${({ $toogle }) => $toogle && `
       height: auto;
       visibility: visible;
       opacity: 1;
       display: flex;
       justify-content: space-between;
       padding-top: ${sizes.normal};
    `}

`;

const ContentData = styled(Row)`
    display: flex;
    justify-content: space-between;
    border: ${sizes.none}; 
    border-bottom: 1px dashed ${colors.secondary};
    padding-top: ${sizes.normal};
    background: ${colors.white};
    & p {
        background: ${colors.white};
    }

`;


TableBodyMobile.propTypes = {
    data: Proptypes.array.isRequired,
};