import styled from "styled-components"
import { Column } from "../../styled/alignment/Column"
import InputSearch from "../../components/_UI/InputSearch"
import Table from "../../components/_UI/Table"
import breakpoints from "../../theme/breakpoints"
import Text from "../../components/_UI/Text"

export default function EmployeesContent() {
  const employess = [
    {
      id: 1,
      name: 'Julia Lacerda',
      job: 'Designer',
      data_admissao: '2020-01-11',
      telefone: '+ 55 (53) 98145-2401'
    },
    {
      id: 2,
      name: 'Roberto Farias',
      data_admissao: '2020-01-11',
      job: 'Redator',
      telefone: '+ 55 (00) 00000-0000'
    },
    {
      id: 3,
      name: 'Roberto Farias',
      data_admissao: '2020-01-11',
      job: 'Front-end',
      telefone: '+ 55 (00) 00000-0000'
    },
    {
      id: 4,
      name: 'Roberto Farias',
      data_admissao: '2020-01-11',
      job: 'Back-end',
      telefone: '+ 55 (00) 00000-0000'
    },
    {
      id: 5,
      name: 'Roberto Farias',
      data_admissao: '2020-01-11',
      job: 'Gerente',
      telefone: '+ 55 (00) 00000-0000'
    },
    {
      id: 5,
      name: 'Roberto Farias',
      data_admissao: '2020-01-11',
      job: 'Escrito',
      telefone: '+ 55 (00) 00000-0000'
    },
    
  ]
  return (
    <Container>
      <StyledHeader>

        <Text 
          name='title'
        >
          Funcionários
        </Text>

        <ContentSearch>
          <InputSearch placeholder='Pesquisar'/>
        </ContentSearch>
        
      </StyledHeader>

      <MainContent>
        <Table
          rows={employess}
          columns={['FOTO', 'NOME', 'CARGO', 'DATA DE ADMISSÃO', 'TELEFONE']}
        />
      </MainContent>

    </Container>
  )
}

const Container = styled(Column)`
  width: 100%
`;

 const StyledHeader = styled(Column)`
    margin-top: 80px;
    @media screen and (min-width: ${breakpoints.lg}) {
      flex-direction: row;
      display: flex;
      width: 100%;
      align-items: center;
      justify-content: space-between;
    }
 `;

const ContentSearch = styled.div`
  height: 48px;
  margin-top: 20px;
    @media screen and (min-width: ${breakpoints.lg}) {
      width: 282px;
      align-items: center;
      display: flex;
      margin-top: 0;
    }
`;

const MainContent = styled.div`
  width: 100%;
`;
