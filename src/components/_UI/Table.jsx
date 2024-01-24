import styled from 'styled-components'
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';
import TableBodyMobile from './TableBodyMobile';
import breakpoints from '../../theme/breakpoints'
import TableBodyDesktop from './TableBodyDesktop';

export default function Table({
    columns,
    rows
}) {
  return (
    <StyledTable>
      <TableHeader>
         {columns?.map((item, index) => (
            <TableHeaderItem key={index}>{item}</TableHeaderItem>
         ))}
      </TableHeader>
      <TableBodyMobile data={rows} />
      <TableBodyDesktop data={rows} />
    </StyledTable>
  )
}

const StyledTable = styled.table`
  margin-top: 20px;
  border-radius: 4px 4px 0 0;
  width: 100%;
`;

const TableHeader = styled.thead`
  background: ${colors.primaryLight};
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 4px 4px 0 0;
  padding: 15px 20px;
  width: 100%;
  &:after{
    content: ' ';
    width: 8px;
    min-width: 8px;
    max-width: 20px;
    height: 8px;
    background: white;
    border-radius: 50%;
    margin-right: 5px;
  }
  @media screen and (min-width: ${breakpoints.lg}) {
    &:after{
      display: none;
    }
  }
`;

const TableHeaderItem = styled.td`
   text-align: left;
   color: ${colors.light};
   font-size: ${fonts.sizes.subtitle};
   font-weight: ${fonts.weight.regular};
   margin-right: 10px; 
   align-items: center;
   display: none;
   width: 100%;
   
   &:first-child,
   &:nth-child(2) {
     display: flex;
    }
    @media screen and (min-width: ${breakpoints.lg}) {
       display: flex;
        width: 25%; 
        justify-content: center;
     }

`;

