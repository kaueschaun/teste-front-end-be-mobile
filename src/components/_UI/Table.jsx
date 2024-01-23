import { Column } from '../../styled/alignment/Column'
import styled from 'styled-components'
import Text from './Text';
import { Row } from '../../styled/alignment/Row';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';
import TableBodyMobile from './TableBodyMobile';

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
      <TableBodyMobile data={rows}/>
    </StyledTable>
  )
}

const StyledTable = styled.div`
    margin-top: 20px;
    border-radius: 4px 4px 0 0;
`;

const TableHeader = styled(Row)`
    background: ${colors.primaryLight};
    display: flex;
    justify-content: flex-start;
    border-radius: 4px 4px 0 0;
    align-items: center;
    position: relative;
    padding: 15px 20px;

    &:after{
        content: ' ';
        width: 8px;
        height: 8px;
        background: white;
        border-radius: 50%;
        margin-right: 5px;
    }
`;

const TableHeaderItem = styled.div`
    text-align: left;
    width: 100%;
    display: none;

    &:first-child,
    &:nth-child(2) {
        display: flex;
        width: 45%;
    }
    color: ${colors.light};
    font-size: ${fonts.sizes.subtitle};
    font-weight: ${fonts.weight.regular}
    
`;