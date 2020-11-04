import React from "react";
import PropTypes from 'prop-types';
import classNames from 'classnames';

import {useStyles} from "./Shape.styles";

export const Shape = (props) => {
  const classes = useStyles();

  return(
    <div className={classNames(classes.shape, props.className)}>
      {props.children}
    </div>
  );
}

Shape.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
}
