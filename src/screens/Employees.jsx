import styled from 'styled-components'
import Content from '../components/main/Content'
import EmployeesContent from '../modules/employees/EmployeesContent'
import { Column } from '../styled/alignment/Column'
import colors from '../theme/colors'
import breakpoints from '../theme/breakpoints'


export default function Employees() {
  return (
    <Container>
      <Content>
        <EmployeesContent />
      </Content>
    </Container>
  )
}

const Container = styled(Column)`
  background: ${colors.light};
  height: 100vh;
  @media screen and (min-width: ${breakpoints.lg}) {
    background: ${colors.light};
  }

`;
