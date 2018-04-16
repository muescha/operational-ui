import * as React from "react"
import glamorous from "glamorous"
import { Theme } from "@operational/theme"
import { TitleType } from "./Typography"

export interface Props {
  title: string
  breadcrumbs?: React.ReactNode
  controls?: React.ReactNode
  children?: React.ReactNode
}

const Container = glamorous.div(({ theme }: { theme: Theme }): {} => ({
  label: "page-content",
  backgroundColor: theme.colors.white,
  padding: `0px ${theme.spacing * 1.5}px`,
  overflow: "auto",
  height: "100%"
}))

const TopBar = glamorous.div(({ theme }: { theme: Theme }): {} => ({
  height: theme.box,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between"
}))

const TitleBar = glamorous.div(({ theme }: { theme: Theme }): {} => ({
  ...theme.typography.title,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: 2 * theme.spacing
}))

const ControlsContainer = glamorous.div(({ theme }: { theme: Theme }): {} => ({
  "& > :last-child": {
    marginRight: 0
  }
}))

const Page = (props: Props) => (
  <Container>
    <TopBar>
      {props.breadcrumbs}
      <ControlsContainer>{props.controls}</ControlsContainer>
    </TopBar>
    <TitleBar>{props.title}</TitleBar>
    {props.children}
  </Container>
)

export default Page
