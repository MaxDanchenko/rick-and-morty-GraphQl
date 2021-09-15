import React, {ChangeEvent, FC, useEffect, useState} from "react"
import {Button, TextField} from "@material-ui/core"
import styles from "./EpisodeFilter.module.scss"



interface PropsType {
  filterList: (value: Record<string, string>) => void
  clearFilterField?: boolean
  name: string
  inputsName: string[]
}

export const ListFilter: FC<PropsType> = ({ inputsName, name, clearFilterField, filterList }) => {
  const [valueName, setValueName] = useState("")
  const [valueType, setValueType] = useState("")
  const [valueDimension, setValueDimension] = useState("")

  useEffect(() => {
    if (clearFilterField) {
      setValueName("")
      setValueType("")
      setValueDimension("")
    }
  }, [clearFilterField])



  const handleSubmit = (e: any) => {
    e.preventDefault()
    const formData = e.target
    if (name === "locations") {
      filterList({
        name: formData[0].value || "",
        type: formData[2].value || "",
        dimension: formData[4].value || ""
      })
    }
    if (name === "episodes") {
      filterList({
        name: formData[0].value
      })
    }
  }


  const handleChangeName = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValueName(e.target.value)
  }
  const handleChangeType = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValueType(e.target.value)
  }
  const handleChangeDimension = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValueDimension(e.target.value)
  }

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
        <TextField value={valueName}
                   onChange={handleChangeName}
                   id="outlined-basic"
                   label={inputsName[0]}
                   variant="outlined"/>
        {
          name === "locations"
          &&
          <div>
            <TextField value={valueType}
                       onChange={handleChangeType}
                       id="outlined-basic"
                       label={inputsName[1]}
                       variant="outlined"/>
            <TextField value={valueDimension}
                       onChange={handleChangeDimension}
                       id="outlined-basic"
                       label={inputsName[2]}
                       variant="outlined"/>
          </div>
        }
        <Button type={"submit"}
                color={"primary"}
                variant={"contained"}>
          filter
        </Button>
      </form>
    </>
  )
}