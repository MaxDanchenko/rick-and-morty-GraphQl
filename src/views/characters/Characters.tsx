import React, { FC, useEffect, useState } from "react";
import styles from "./Characters.module.scss";
import { PageTitle } from "../../components/page-title/PageTitle";
import { DataTable } from "../../components/table/DataTable";
import { ModalWindow } from "../../components/modal/ModalWindow";
import { Paginator } from "../../components/paginator/Paginator";
import { Filter } from "../../components/filter/charFilter/Filter";
import { Button } from "@material-ui/core";
import { ErrorMessage } from "../../components/error/ErrorMessage";
import { tableItems } from "./staticData";
import { getChar, getCharList } from "../../graphql/charGQL";
import { useQuery } from "@apollo/client";

export const Characters: FC = () => {
  const [count, setCount] = useState(1);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [charId, setCharId] = useState<number>(1);
  const [charPage, setCharPage] = useState<number>(1);
  const [clearFields, setClearFields] = useState<boolean>(false);
  const [queryParams, setQueryParams] = useState<Record<string, string>>({
    status: "",
    species: "",
    gender: "",
  });

  const { data, error, loading } = useQuery(
    getCharList(charPage, {
      status: queryParams.status,
      species: queryParams.species,
      gender: queryParams.gender,
    })
  );
  const { data: charData } = useQuery(getChar(charId));

  useEffect(() => {
    const pagesCount = data?.characters?.info?.pages;
    if (pagesCount) {
      setCount(pagesCount);
    }
  }, [data]);

  useEffect(() => {
    if (!error) {
      setClearFields(false);
    }
  }, [error]);

  useEffect(() => {
    setQueryParams({
      status: "",
      species: "",
      gender: "",
    });
  }, [clearFields]);

  const openModalWithSelectedChar = (id: number) => {
    setShowModal(true);
    setCharId(id);
  };

  const reset = () => {
    setQueryParams({
      status: "",
      species: "",
      gender: "",
    });
    setClearFields(true);
  };

  return (
    <div className={styles.wrapper}>
      {error && (
        <ErrorMessage reset={reset} error={error} setShowModal={setShowModal} />
      )}
      <PageTitle title={"Characters"} />
      <ModalWindow
        name={"characters"}
        selectedEl={charData?.character}
        showModal={showModal}
        setShowModal={setShowModal}
      />
      <div className={styles.filterWrapper}>
        <div className={styles.filterSubWrapper}>
          {tableItems.map((el) => {
            return (
              <Filter
                key={el.id}
                clearFields={clearFields}
                name={el.name}
                queryParams={queryParams}
                setCharPage={setCharPage}
                setQueryParams={setQueryParams}
                params={el}
              />
            );
          })}
          <Button
            size={"small"}
            color={"primary"}
            variant={"contained"}
            onClick={reset}
          >
            reset
          </Button>
        </div>
      </div>
      <DataTable
        componentName={"characters"}
        showPreloader={loading}
        data={data?.characters}
        openModalWithSelectedEl={openModalWithSelectedChar}
      />
      <Paginator page={charPage} setPage={setCharPage} count={count} />
    </div>
  );
};
