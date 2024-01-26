import styled from 'styled-components'
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';
import TableBodyMobile from './TableBodyMobile';
import breakpoints from '../../theme/breakpoints'
import TableBodyDesktop from './TableBodyDesktop';
import sizes from '../../theme/sizes';
import PropTypes from 'prop-types';


export default function Table({
    columns,
    rows,
}) {  
  return (
    <StyledTable>
      <TableHeader>
         {columns?.map((item, index) => (
            <TableHeaderItem key={index}>
                {item}
            </TableHeaderItem>
         ))}
      </TableHeader>
       
      <TableBodyMobile data={rows} />
      <TableBodyDesktop data={rows} />

    </StyledTable>
  )
}

const StyledTable = styled.div`
  border-radius: ${sizes.nano};
  width: 100%;
  margin-top: ${sizes.medium};
  @media screen and (min-width: ${breakpoints.lg}) {
    margin-top: ${sizes.giant};
  }
`;

const TableHeader = styled.div`
  background: ${colors.primaryLight};
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: ${sizes.nano};
  padding: ${sizes.small} ${sizes.medium};
  width: 100%;
  &:after{
    content: ' ';
    width: ${sizes.mini};
    min-width: ${sizes.mini};
    max-width: ${sizes.medium};
    height: ${sizes.mini};
    background: ${colors.white};
    border-radius: 50%;
    margin-right: 1.25em;
  }
  @media screen and (min-width: ${breakpoints.lg}) {
    &:after{
      display: none;
    }
  }
`;

const TableHeaderItem = styled.div`
   text-align: left;
   color: ${colors.light};
   font-size: ${fonts.sizes.subtitle};
   font-weight: ${fonts.weight.regular};
   margin-right: ${sizes.tiny}; 
   align-items: center;
   display: none;
   width: 100%;
   background: transparent;
   
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


Table.propTypes = {
  columns: PropTypes.array.isRequired,
  rows: PropTypes.array.isRequired,
};
