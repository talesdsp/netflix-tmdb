import React from "react"
import Header from "../components/Header"

export default {
  title: "Header",
  component: Header,
}

const HeaderTemplate = (args) => <Header {...args} />

export const header = HeaderTemplate.bind({})

header.args = { black: false }
