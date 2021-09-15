import React, {FC} from "react"
import styles from "./ErrorMessage.module.scss"
import {Button} from "@material-ui/core"
import {ApolloError} from "@apollo/client"



interface PropsType {
  error: ApolloError
  setShowModal: (close: boolean) => void
  reset?: () => void
}

export const ErrorMessage: FC<PropsType> = ({ reset, setShowModal, error }) => {

  const handleClick = () => {
    if (reset) {
      reset()
    }
    setShowModal(false)
  }

  return (
    <div className={styles.wrapper}>
      <p className={styles.error}>
        Error: {error.message}
      </p>
      <Button onClick={handleClick}
              variant={"contained"}
              className={styles.button}>
        return to safety
      </Button>
    </div>
  )
}