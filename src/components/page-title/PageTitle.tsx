import React, {FC} from "react"
import {Helmet} from "react-helmet"



type PropsType = {
  title?: string
}

export const PageTitle: FC<PropsType> = ({ title }) => {
  return (
    <Helmet>
      <title>
        {`Rick and Morty ${title ? `/ ${title}` : ""}`}
      </title>
    </Helmet>
  )
}