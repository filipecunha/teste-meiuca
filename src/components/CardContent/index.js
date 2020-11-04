import React from "react";
import PropTypes from 'prop-types';

import {useStyles} from "./CardContent.styles";
import {
  ButtonPrimary,
  HeadingSmall,
  SubtitleSmall,
  Paragraph,
  Shape
} from "../../shared/designSystemName/components";

export const CardContent = ({data}) => {
  const classes = useStyles();

  const {
    title,
    description,
    content,
    url
  } = data;

  return(
    <Shape className={classes.shape}>
      <HeadingSmall className={classes.heading}>{title}</HeadingSmall>
      <SubtitleSmall className={classes.subtitle}>{description}</SubtitleSmall>
      <Paragraph className={classes.paragraph}>{content}</Paragraph>
      <ButtonPrimary url={url}>Ver matéria</ButtonPrimary>
    </Shape>
  )
}

CardContent.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    content: PropTypes.string,
    url: PropTypes.string
  })
}
