import React, { useEffect, useState } from "react";
import styles from "./Episodes.module.scss";
import { PageTitle } from "../../components/page-title/PageTitle";
import { ModalWindow } from "../../components/modal/ModalWindow";
import { DataTable } from "../../components/table/DataTable";
import { Paginator } from "../../components/paginator/Paginator";
import { ListFilter } from "../../components/filter/listFilter/ListFilter";
import { ErrorMessage } from "../../components/error/ErrorMessage";
import { useQuery } from "@apollo/client";
import { getEpisode, getEpisodeList } from "../../graphql/episodeGQL";

export const Episodes = () => {
  const [count, setCount] = useState(1);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showPreload, setShowPreload] = useState<boolean>(false);
  const [clearFilterField, setClearFilterField] = useState<boolean>(false);

  const [episodePage, setEpisodePage] = useState<number>(1);
  const [episodeId, setEpisodeId] = useState<number>(1);
  const [episodeFilter, setEpisodeFilter] = useState<Record<string, string>>({
    name: "",
  });

  const episode = useQuery(getEpisode(episodeId));
  const { data, loading, error } = useQuery(
    getEpisodeList(episodePage, episodeFilter.name)
  );

  useEffect(() => {
    setShowPreload(loading);
    setClearFilterField(false);
  }, [loading]);

  useEffect(() => {
    const pagesCount = data?.episodes?.info?.pages;
    if (pagesCount) {
      setCount(pagesCount);
    }
  }, [data]);

  const filterEpisode = (value: Record<string, string>) => {
    setEpisodeFilter(value);
  };

  const openModalWithSelectedEpisode = (id: number) => {
    setShowModal(true);
    setEpisodeId(id);
  };

  const reset = () => {
    setEpisodeFilter({ name: "" });
    setClearFilterField(true);
  };

  return (
    <div className={styles.wrapper}>
      <PageTitle title={"Episodes"} />
      {error && (
        <ErrorMessage reset={reset} error={error} setShowModal={setShowModal} />
      )}
      <ModalWindow
        name={"episodes"}
        selectedEl={episode?.data?.episode}
        showModal={showModal}
        setShowModal={setShowModal}
      />
      <ListFilter
        name={"episodes"}
        inputsName={["Episode name"]}
        clearFilterField={clearFilterField}
        filterList={filterEpisode}
      />
      <DataTable
        componentName={"episodes"}
        openModalWithSelectedEl={openModalWithSelectedEpisode}
        data={data?.episodes}
        showPreloader={showPreload}
      />
      <Paginator page={episodePage} setPage={setEpisodePage} count={count} />
    </div>
  );
};