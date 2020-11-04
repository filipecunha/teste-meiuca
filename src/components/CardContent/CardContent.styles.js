import {makeStyles} from "@material-ui/styles";

import {spacing} from "../../shared/designSystemName/tokens";

export const useStyles = makeStyles({
  shape:{
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'stretch',
    width: 300,
    margin: 61,
  },
  heading: {
    marginBottom: spacing.stack.xxxs
  },
  subtitle: {
    marginBottom: spacing.stack.xxs
  },
  paragraph: {
    marginBottom: spacing.stack.sm
  }
})
