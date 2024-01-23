import styled from "styled-components"
import { Column } from "../../styled/alignment/Column"
import InputSearch from "../../components/_UI/InputSearch"
import Table from "../../components/_UI/Table"

export default function EmployeesContent() {
  const employess = [
    {
      id: 1,
      name: 'Julia Lacerda',
      cargo: 'Designer',
      telefone: '+ 55 (00) 00000-0000'
    },
    {
      id: 2,
      name: 'Roberto Farias',
      cargo: 'Redator',
      telefone: '+ 55 (00) 00000-0000'
    }
  ]
  return (
    <Container>
      <ContentSearch>
        <InputSearch placeholder='Pesquisar'/>
      </ContentSearch>

      <Table
        rows={employess}
        columns={['FOTO', 'NOME', 'CARGO', 'DATA DE ADMISSÃO', 'TELEFONE']}
       />
    </Container>
  )
}

const Container = styled(Column)`
  /* height: 100vh; */
`

const ContentSearch = styled.div`
  height: 48px;
  height: 95%;
`;
