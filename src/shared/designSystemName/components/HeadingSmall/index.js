import React from "react";
import PropTypes from "prop-types";
import classNames from 'classnames';

import {useStyles} from "./HeadingSmall.styles";

export const HeadingSmall = ({children, className}) => {
  const classes = useStyles();

  return(
    <h2 className={classNames(classes.heading, className)}>{children}</h2>
  );
}

HeadingSmall.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
}
