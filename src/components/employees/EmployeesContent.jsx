import styled from "styled-components"
import { Column } from "../../styled/alignment/Column"
import InputSearch from "../_UI/InputSearch"
import Table from "../_UI/Table"
import breakpoints from "../../theme/breakpoints"
import Text from "../_UI/Text"
import { api } from "../../services/api"
import { useEffect, useState } from "react"
import debounce from "../../helpers/debounce"
import SearchNotFound from "../commons/SearchNotFound"
import Loader from "../_UI/Loader"
import sizes from "../../theme/sizes"
import colors from "../../theme/colors"
import Error from "../commons/Error"

export default function EmployeesContent() {

  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    getEmployees();
  },[]);

  function capitalizeWords(str) {
    const words = str.split(' ');

    const capitalizedWords = words.map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    });
  
    return capitalizedWords.join(' ');
  }
  

  async function getEmployees(payload = '') {
    setLoading(true);
  
    try {
      const { data } = await api.get(`/employees?q=${capitalizeWords(payload)}`);
  
      const filteredEmployees = data.filter(employee =>
        employee.name.toLowerCase().includes(payload.toLowerCase()) ||
        employee.job.toLowerCase().includes(payload.toLowerCase()) ||
        employee.phone.includes(payload)
      );

      filteredEmployees.map(({ name, job, phone }) => ({ name, job, phone }));

        setEmployees(filteredEmployees);
    
        setTimeout(() => setLoading(false), 500); // Para simular o loading de um request assíncrono
    
      } catch (error) {
        setError(true);
      } finally {
        setTimeout(() => setLoading(false), 500); // Para simular o loading de um request assíncrono
      }
  }
  const handleSearchInput = debounce((searchTerm) => {
    searchTerm ? getEmployees(searchTerm) : getEmployees()
  }, 500);
  
  return (
    <Container>
      <StyledHeader>
        <Text 
          name='title'
          color={colors.primaryDark}
        >
          Funcionários
        </Text>

        <ContentSearch>
          <InputSearch 
            onChangeValue={(e) => handleSearchInput(e)}
            type='text'
            placeholder='Pesquisar'
          />
        </ContentSearch>
        
      </StyledHeader>
      
      {
        loading ? (
          <ContentLoader>
            <Loader size='medium'/>  
          </ContentLoader>
        ) : (
          error ? (
            <ContentError>
              <Error />
            </ContentError>
          ) : (
            employees.length > 0 ? (
              <MainContent>
                <Table
                  rows={employees}
                  columns={['FOTO', 'NOME', 'CARGO', 'DATA DE ADMISSÃO', 'TELEFONE']}
                />
              </MainContent>
            ) : (
              <ContentNotFound>
                <SearchNotFound />
              </ContentNotFound>
            )
          )
        )
      }
    </Container>
  )
}

const Container = styled(Column)`
  width: 100%;
`;

 const StyledHeader = styled(Column)`
    margin-top: ${sizes.enormous};
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
  margin-top: ${sizes.medium};
    @media screen and (min-width: ${breakpoints.lg}) {
      width: 282px;
      align-items: center;
      display: flex;
      margin-top: ${sizes.nano};
    }
`;

const MainContent = styled.div`
  width: 100%;
  padding-bottom: ${sizes.little};
`;

const ContentLoader = styled(Column)`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const ContentNotFound  = styled(Column)`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const ContentError  = styled(Column)`
  width: 100%;
  display: flex;
  justify-content: center;
`;
