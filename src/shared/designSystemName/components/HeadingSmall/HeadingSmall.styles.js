import {makeStyles} from "@material-ui/styles";

import {
  font,
  lineHeight,
  color
} from "../../tokens";

export const useStyles = makeStyles({
  heading: {
    fontSize: font.size.lg,
    lineHeight: lineHeight.distant,
    fontFamily: font.family.highlight,
    fontWeight: font.weight.bold,
    color: color.neutral.neutral01
  }
})
