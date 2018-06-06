import * as React from "react"
import glamorous, { GlamorousComponent } from "glamorous"
import { Theme, expandColor } from "@operational/theme"
import { darken } from "@operational/utils"

export interface Props {
  id?: string | number
  css?: any
  className?: string
  placeholder?: string
  onChange?: (newVal: string) => void
  color?: string
}

const Container = glamorous.div(({ theme, color }: { theme: Theme; color?: string }) => {
  const backgroundColor = expandColor(theme, color) || theme.colors.white

  return {
    label: "selectfilter",

    "& > input": {
      width: "100%",
      padding: `${theme.spacing / 2}px ${(theme.spacing * 3) / 4}px`,
      border: 0,
      outline: "none",
      font: "inherit",
    },
  }
})

const SelectFilter = (props: Props) => (
  <Container key={props.id} css={props.css} className={props.className}>
    <input
      onClick={e => e.stopPropagation()}
      onChange={(e: any) => {
        props.onChange(e.target.value)
      }}
      placeholder={props.placeholder || "Filter ..."}
    />
  </Container>
)

export default SelectFilter
