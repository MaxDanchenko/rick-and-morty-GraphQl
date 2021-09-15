import React, {FC} from "react"
import Table from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody"
import TableContainer from "@material-ui/core/TableContainer"
import TableHead from "@material-ui/core/TableHead"
import Paper from "@material-ui/core/Paper"
import {CharResponseType, EpisodeResponseType, LocationResponseType} from "../types/types"
import styles from "./DataTable.module.scss"
import {TableTitle} from "./tableTitle/TableTitle"
import {Preloader} from "../preloader/Preloader"
import {TableRowItem} from "./tableRow/tableRowItem"



interface PropsType {
  data: CharResponseType & LocationResponseType & EpisodeResponseType
  showPreloader: boolean
  openModalWithSelectedEl: (id: number) => void
  componentName: string
}

export const DataTable: FC<PropsType> = ({
                                           componentName,
                                           showPreloader,
                                           data,
                                           openModalWithSelectedEl
                                         }) => {

  const handleOpenModal = (e: any) => {
    const targetId = e?.currentTarget?.firstChild?.id
    openModalWithSelectedEl(targetId)
  }

  return (
    <TableContainer className={styles.tableContainer}
                    component={Paper}>
      {showPreloader && <Preloader/>}
      <Table aria-label="simple table"
             className={styles.table}>
        <TableHead>
          <TableTitle component={componentName}/>
        </TableHead>
        <TableBody className={styles.tableBody}>
          {
            data?.results.map((el: any) => (
              <TableRowItem key={el.id} el={el} handleOpenModal={handleOpenModal}/>
            ))
          }
        </TableBody>
      </Table>
    </TableContainer>
  )
}