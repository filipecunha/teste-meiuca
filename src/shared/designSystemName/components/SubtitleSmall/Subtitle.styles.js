import {makeStyles} from "@material-ui/styles";

import {
  font,
  lineHeight,
  color
} from "../../tokens";

export const useStyles = makeStyles({
  heading: {
    fontSize: font.size.md,
    lineHeight: lineHeight.medium,
    fontFamily: font.family.highlight,
    fontWeight: font.weight.medium,
    color: color.neutral.neutral02
  }
})
