import {makeStyles} from "@material-ui/styles";

import {
  font,
  lineHeight,
  color
} from "../../tokens";

export const useStyles = makeStyles({
  paragraph: {
    fontSize: font.size.xs,
    lineHeight: lineHeight.distant,
    fontFamily: font.family.highlight,
    fontWeight: font.weight.regular,
    color: color.neutral.neutral02
  }
})
