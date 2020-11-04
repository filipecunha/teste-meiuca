import {makeStyles} from "@material-ui/styles";

import {
  font,
  lineHeight,
  border,
  spacing,
  color
} from "../../tokens";

export const useStyles = makeStyles({
  button: {
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: font.sm,
    lineHeight: lineHeight.tight,
    borderRadius: border.radius.none,
    padding: spacing.squish.xs,
    fontFamily: font.family.highlight,
    fontWeight: font.weight.regular,
    color: color.neutral.neutral05,
    backgroundColor: color.brand.primary03,
    textDecoration: 'none',

    '&:hover': {
      backgroundColor: color.brand.primary02,
    }
  }
})
