import React from "react";
import PropTypes from "prop-types";
import classNames from 'classnames';

import {useStyles} from "./ButtonPrimary.styles";

export const ButtonPrimary = ({children, className, url}) => {
    const classes = useStyles();

    return (
      <a href={url} className={classNames(classes.button, className)}>{children}</a>
    );
}

ButtonPrimary.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    url: PropTypes.string,
}
