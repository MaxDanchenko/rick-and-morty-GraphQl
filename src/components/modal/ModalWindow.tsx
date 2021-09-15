import React, {FC} from "react"
import {CharModalItem} from "./charModalItem/CharModalItem"
import {Modal} from "@material-ui/core"
import styles from "./ModalWindow.module.scss"
import {Preloader} from "../preloader/Preloader"
import {EpisodeModalItem} from "./episodeModalItem/EpisodeModalItem"
import {LocationsModalItem} from "./licationsModalItem/LocationsModalITem"



interface PropsType {
  showModal: boolean
  setShowModal: (close: boolean) => void
  selectedEl: any
  name: string
}

export const ModalWindow: FC<PropsType> = ({ name, selectedEl, showModal, setShowModal }) => {

  const handleCloseModal = () => setShowModal(false)

  return (
    <div>
      {showModal &&
      <Modal
        className={styles.wrapper}
        open={showModal}
        onClose={handleCloseModal}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description">
        <div>
          {!selectedEl
            ? <Preloader/>
            : <div>
              {name === "characters" && <CharModalItem char={selectedEl}/>}
              {name === "episodes" && <EpisodeModalItem episode={selectedEl}/>}
              {name === "locations" && <LocationsModalItem locations={selectedEl}/>}
            </div>
          }
        </div>
      </Modal>
      }
    </div>
  )
}