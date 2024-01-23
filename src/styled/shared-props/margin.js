import {css} from 'styled-components';

const marginProps = css`
    margin-top: ${ props => props.marginTop};
    margin-right: ${ props => props.marginRight};
    margin-bottom: ${ props => props.marginBottom};
    margin-left: ${ props => props.marginLeft};
`;

export default marginProps;