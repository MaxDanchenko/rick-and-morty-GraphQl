import React, {ChangeEvent, FC, useEffect, useState} from "react"
import {FormControl, InputLabel, Select} from "@material-ui/core"
import styles from "./Filter.module.scss"
import {FormItem} from "./FormItem/Formtem"



interface ParamsType {
  id: number
  name: string
  value: string[]
}

interface PropsType {
  queryParams: any
  setQueryParams: (query: any) => void
  params: ParamsType
  name: string
  clearFields: boolean
  setCharPage: (page: number) => void
}

export const Filter: FC<PropsType> = ({
                                        clearFields,
                                        queryParams,
                                        setQueryParams,
                                        name,
                                        params,
                                        setCharPage
                                      }) => {

  const [personName, setPersonName] = useState<any>("")

  useEffect(() => {
    if (clearFields) {
      setPersonName("")
    }
  }, [clearFields])


  const handleChange = (e: ChangeEvent<{ name?: string | undefined; value: unknown; }>) => {
    const value = e.target.value
    setQueryParams({...queryParams, [name]: value})
    setCharPage(1)
    setPersonName(value)
  }

  return (
    <div className={styles.wrapper}>
      <FormControl size={"small"} className={styles.formControl}>
        <InputLabel htmlFor="grouped-native-select">
          {name}
        </InputLabel>
        <Select value={personName}
                onChange={handleChange}
                native
                id="grouped-native-select">
          <option aria-label="None" value=""/>
          <FormItem name={name} value={params.value}/>
        </Select>
      </FormControl>
    </div>
  )
}