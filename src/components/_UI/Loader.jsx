import PropTypes from 'prop-types';
import { StyledLoaderBox, StyledSpinner } from '../../styled/UI/Loader';

export default function Loader({size, color}) {
  return (
    <StyledLoaderBox>
        <StyledSpinner size={size} color={color} />
    </StyledLoaderBox>
  )
}

Loader.defaultProps = {
  size: 'default',
  color: 'default', 
};

Loader.propTypes = {
  size: PropTypes.oneOf(['default', 'medium', 'large']),
  color: PropTypes.oneOf(['default', 'primary', 'secondary']) 
};