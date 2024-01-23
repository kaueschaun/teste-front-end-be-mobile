import {css} from 'styled-components';

const paddingProps = css`
    padding-top: ${ props => props.paddingTop};
    padding-right: ${ props => props.paddingRight};
    padding-bottom: ${ props => props.paddingBottom};
    padding-left: ${ props => props.paddingLeft};
`;

export default paddingProps;