import React from "react";
import classNames from 'classnames';

import {useStyles} from "./Paragraph.styles";
import PropTypes from "prop-types";

export const Paragraph = ({children, className}) => {
  const classes = useStyles();

  return(
    <p className={classNames(classes.paragraph, className)}>{children}</p>
  );
}

Paragraph.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
}
