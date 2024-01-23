import { StyledSvg } from '../../styled/UI/StyledSvg';
import Protypes from 'prop-types'

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
    name: Protypes.string.isRequired,
    color: Protypes.string,
};

export default Icon;
