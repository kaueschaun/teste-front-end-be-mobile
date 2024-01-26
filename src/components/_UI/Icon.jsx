import { StyledSvg } from '../../styled/UI/StyledSvg';
import Proptypes from 'prop-types'

function Icon({
    // layout props
    marginTop,
    marginRight,
    marginBottom,
    marginLeft,
    // action props
    name,
    color,
}) {
    return (
        <StyledSvg
            fill={color}
            marginTop={marginTop}
            marginRight={marginRight}
            marginBottom={marginBottom}
            marginLeft={marginLeft}
        >
            <use href={`../../../assets/svg/icons.svg#${name}`} />
        </StyledSvg>
    )
}

Icon.propTypes = {
    // layout props
    marginTop: Proptypes.string,
    marginRight: Proptypes.string,
    marginBottom: Proptypes.string,
    marginLeft: Proptypes.string,
    // action props
    name: Proptypes.string.isRequired,
    color: Proptypes.string,
};

export default Icon;
