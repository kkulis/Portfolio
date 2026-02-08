import PropTypes from 'prop-types';
import React from 'react';

export const ContentWrapper = (props) => {
    return <div id="main">{props.children}</div>;
};

ContentWrapper.propTypes = {
    children: PropTypes.node.isRequired
};
