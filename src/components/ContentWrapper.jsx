import PropTypes from 'prop-types';
import React from 'react';

export const ContentWrapper = (props) => {
    ContentWrapper.propTypes = {
        children: PropTypes.node.isRequired
    };

    return <div id="main">{props.children}</div>;
};
