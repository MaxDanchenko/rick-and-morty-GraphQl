import React, {useEffect, useState} from "react"
import styles from "./Locations.module.scss"
import {PageTitle} from "../../components/page-title/PageTitle"
import {ListFilter} from "../../components/filter/listFilter/ListFilter"
import {DataTable} from "../../components/table/DataTable"
import {ModalWindow} from "../../components/modal/ModalWindow"
import {Paginator} from "../../components/paginator/Paginator"
import {ErrorMessage} from "../../components/error/ErrorMessage"
import {useQuery} from "@apollo/client"
import {getLocation, getLocationList} from "../../graphql/locationGQL"



export const Locations = () => {
  const [count, setCount] = useState(1)
  const [locationPage, setLocationPage] = useState<number>(1)
  const [locationId, setLocationId] = useState<number>(1)
  const [clearFilterField, setClearFilterField] = useState<boolean>(false)
  const [showPreloader, setShowPreload] = useState<boolean>(false)
  const [showModal, setShowModal] = useState<boolean>(false)
  const [filerValues, setFilerValues] = useState({
    name: "",
    type: "",
    dimension: ""
  })

  const { data, loading, error } = useQuery(getLocationList(locationPage, filerValues))
  const location = useQuery(getLocation(locationId))



  useEffect(() => {
    setShowPreload(loading)
    setClearFilterField(false)
  }, [loading])

  useEffect(() => {
    const pagesCount = data?.locations?.info?.pages
    if (pagesCount) {
      setCount(pagesCount)
    }
  }, [data])


  const reset = () => {
    setFilerValues({ name: "", type: "", dimension: "" })
    setClearFilterField(true)
  }


  const filterLocations = (value: any) => {
    setFilerValues(value)
  }

  const openModalWithSelectedEpisode = (id: number) => {
    setShowModal(true)
    setLocationId(id)
  }

  return (
    <div className={styles.wrapper}>
      <PageTitle title={"Locations"}/>
      {error &&
      <ErrorMessage reset={reset}
                    error={error}
                    setShowModal={setShowModal}/>
      }
      <ModalWindow name={"locations"}
                   selectedEl={location?.data?.location}
                   showModal={showModal}
                   setShowModal={setShowModal}/>
      <ListFilter name={"locations"}
                  inputsName={["Name", "Type", "Dimension",]}
                  clearFilterField={clearFilterField}
                  filterList={filterLocations}/>
      <DataTable componentName={"locations"}
                 openModalWithSelectedEl={openModalWithSelectedEpisode}
                 data={data?.locations}
                 showPreloader={showPreloader}/>
      <Paginator page={locationPage}
                 setPage={setLocationPage}
                 count={count}/>
    </div>
  )
}