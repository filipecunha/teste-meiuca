import React from "react";
import PropTypes from 'prop-types';
import classNames from 'classnames';

import {useStyles} from "./Subtitle.styles";

export const SubtitleSmall = ({children, className}) => {
  const classes = useStyles();

  return(
    <p className={classNames(classes.heading, className)}>{children}</p>
  );
}

SubtitleSmall.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
}
