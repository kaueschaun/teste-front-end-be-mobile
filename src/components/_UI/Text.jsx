import PropTypes from 'prop-types';
import { StyledTitle, StyledSubtitle } from '../../styled/UI/StyledText';

function Text({
    // layout props
    marginTop,
    marginRight,
    marginBottom,
    marginLeft,
    paddingTop,
    paddingRight,
    paddingBottom,
    paddingLeft,
    // action props
    name,
    type,
    decoration,
    color,
    ellipsisAt,
    children
}) {
    const renderText = () => {
        if (name === 'title') {
            return (
                <StyledTitle
                    name={name}
                    type={type}
                    color={color}
                    marginTop={marginTop}
                    marginRight={marginRight}
                    marginBottom={marginBottom}
                    marginLeft={marginLeft}
                    paddingTop={paddingTop}
                    paddingRight={paddingRight}
                    paddingBottom={paddingBottom}
                    paddingLeft={paddingLeft} 
                    ellipsisAt={ellipsisAt}
                >
                    {children}
                </StyledTitle>
            );
        }

        if (name === 'subtitle') {
            return (
                <StyledSubtitle
                    name={name}
                    type={type}
                    color={color}
                    marginTop={marginTop}
                    marginRight={marginRight}
                    marginBottom={marginBottom}
                    marginLeft={marginLeft}
                    paddingTop={paddingTop}
                    paddingRight={paddingRight}
                    paddingBottom={paddingBottom}
                    paddingLeft={paddingLeft}            
                    ellipsisAt={ellipsisAt}
                >
                    {children}
                </StyledSubtitle>
            );
        }

        return (
            <StyledParagraph
                name={name}
                type={type}
                color={color}
                decoration={decoration}
                marginTop={marginTop}
                marginRight={marginRight}
                marginBottom={marginBottom}
                marginLeft={marginLeft}
                paddingTop={paddingTop}
                paddingRight={paddingRight}
                paddingBottom={paddingBottom}
                paddingLeft={paddingLeft}
                ellipsisAt={ellipsisAt}
            >
                {children}
            </StyledParagraph>
        );
    };

    return renderText();
}

Text.propTypes = {
    color: PropTypes.string,

    type: PropTypes.oneOf(['normal']),

    name: PropTypes.oneOf([
        'hero',
        'title',
    ])
};

Text.defaultProps = {
    color: 'black',
    type: 'light',
    name: 'default',
    decoration: 'none'
};

export default Text;