import {makeStyles} from "@material-ui/styles";

import {
  border,
  spacing,
  color
} from "../../tokens";

export const useStyles = makeStyles({
  shape: {
    border: '1px solid gray',
    display: 'inline-block',
    borderRadius: border.radius.none,
    padding: spacing.inset.lg,
    borderWidth: border.width.thin,
    borderColor: color.neutral.neutral04,
    backgroundColor: color.neutral.neutral05
  }
})
