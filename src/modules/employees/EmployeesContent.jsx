import styled from "styled-components"
import { Column } from "../../styled/alignment/Column"
import InputSearch from "../../components/_UI/InputSearch"
import Table from "../../components/_UI/Table"
import breakpoints from "../../theme/breakpoints"
import Text from "../../components/_UI/Text"
import { api } from "../../services/api"
import { useEffect, useState } from "react"
import debounce from "../../helpers/debounce"
import SearchNotFound from "../../components/commons/SearchNotFound"
import Loader from "../../components/_UI/Loader"
import { FullyCentered } from "../../styled/alignment/Center"
import sizes from "../../theme/sizes"

export default function EmployeesContent() {

  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(false)


  useEffect(() => {
    getEmployees();
  }, []);

  function sanitizedParams(payload) {
    
    const data = {
      name: capitalizeWords(payload) || '', //cria um metodo de capitalize para enviar sempre o nome certo para o
      // job: capitalizeWords(payload) || '',
    }
    
    if (!data.name) {
      delete data.name
    }

    return data;
  }

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
      const {data} = await api.get(`/employees`, {
        params: {
          ...sanitizedParams(payload)
        }
      });
      
      setEmployees(data);
      setTimeout(() => setLoading(false), 500); //Para simular o loading de um request assincrono

    } catch (error) {
      console.log(error)
    } finally {
      setTimeout(() => setLoading(false), 500); //Para simular o loading de um request assincrono
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

      <MainContent>
        {
          loading 
          ? <ContentLoader>
              <Loader size='medium'/>  
            </ContentLoader>
          : (
            !employees.length 
            ? <ContentNotFound>
                <SearchNotFound />
              </ContentNotFound>
            : <Table
                rows={employees}
                columns={['FOTO', 'NOME', 'CARGO', 'DATA DE ADMISSÃO', 'TELEFONE']}
            />
          )
        }
      </MainContent>

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
`;

const ContentLoader = styled(FullyCentered)`
  width: 100%;
  height: 400px;
`;

const ContentNotFound = styled(FullyCentered)`
  width: 100%;
  height: 400px;
`;