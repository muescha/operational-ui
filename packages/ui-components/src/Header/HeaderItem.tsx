import * as React from "react"

import glamorous, { GlamorousComponent } from "glamorous"
import { Theme } from "contiamo-ui-theme"

export interface IProps {
  key?: string | number
  css?: any
  className?: string
  children: Node
  onClick?: any
  active?: boolean
}

const Container = glamorous.div(({ theme, active }: { theme: Theme; active: boolean }): any => {
  const opacity = 0.1
  const activeBackground = `rgba(0, 0, 0, ${opacity * 2})`

  return {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: `${theme.spacing / 4}px ${theme.spacing / 2}px`,
    minHeight: 32,
    borderRadius: 2,
    cursor: "pointer",
    transition: ".1s background-color ease, .05s transform ease",
    userSelect: "none",
    backgroundColor: active ? activeBackground : "transparent",

    ":hover": {
      backgroundColor: `rgba(0, 0, 0, ${opacity})`
    },

    "& + &": {
      marginLeft: theme.spacing / 2
    },

    "& > svg": {
      width: 16,
      marginRight: theme.spacing / 2
    }
  }
})

const HeaderItem: React.SFC<IProps> = ({ key, css, className, children, onClick, active }: IProps) => (
  <Container key={key} tabIndex={-1} role="button" css={css} onClick={onClick} className={className} active={!!active}>
    {children}
  </Container>
)

export default HeaderItem
