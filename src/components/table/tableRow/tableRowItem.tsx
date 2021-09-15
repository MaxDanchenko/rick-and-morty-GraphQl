import React, {FC} from 'react'
import TableRow from '@material-ui/core/TableRow'
import styles from '../DataTable.module.scss'
import TableCell from '@material-ui/core/TableCell'
import {CharType, EpisodeType, LocationType} from '../../types/types'


interface PropsType {
  handleOpenModal: (e: any) => void
  el: CharType & EpisodeType & LocationType
}

export const TableRowItem: FC<PropsType> = ({handleOpenModal, el}) => {
  return (
      <TableRow onClick={handleOpenModal} className={styles.tableRow} key={el.id}>
        {el.image &&
          <TableCell id={el.id.toString()} className={styles.tableCell}>
            <img className={styles.charImage} src={el.image} alt={el.name}/>
          </TableCell>
        }
        <TableCell id={el.id.toString()} align="left">{el.name}</TableCell>
        <TableCell align="left">{el.status || el.episode || el.type}</TableCell>
        <TableCell align="left">{el.species || el.air_date || el.dimension}</TableCell>
        <TableCell align="left">{el.gender || el.url || el.created}</TableCell>
      </TableRow>
  )
}