"use client";
import DataTable from "app/app/components/datatable/datatable";
import Modal from "app/app/components/ui/modal";
import React, { useRef, useState } from "react";
import {
  awaitingSittingColumns,
  tableData,
} from "../../filedcases/partials/columns";
import { ITableRowActionList } from "app/app/components/datatable/partials/tableRowActions";
import HearingNotice from "./partials/hearingNotice";
import { Button } from "app/app/components/form-components/button";
import { useReactToPrint } from "react-to-print";

const actionOptions: ITableRowActionList[] = [
  {
    icon: "pepicons-pop:bulletin-notice",
    title: "Hearing Notice",
    accessor: "hearing_notice",
  },
  {
    icon: "pepicons-pop:bulletin-notice",
    title: "Cert. of Service",
    accessor: "certificate_of_service",
  },
  // { icon: "ion:open-outline", title: "Open Docket", accessor: "docket" },
];

const Page = () => {
  const [open, setOpen] = useState(false);
  const [recordId, setRecordId] = useState(0);
  const [data, setData] = useState<any | null>(null);
  const componentRef = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const toggleModal = () => {
    if (open) {
      setOpen(false);
    } else {
      setOpen(true);
    }
    setRecordId(0);
    if (data) {
      setData(null);
    }
  };

  const onRowAction = (action: string, row: Record<string, any>) => {
    switch (action) {
      case "hearing_notice":
        toggleModal();
        const d = row as any;
        setData(d);
        setRecordId(row.id);
        break;
      case "":
        break;
      default:
        break;
    }
  };

  return (
    <div className=" container mx-auto p-5">
      <div className=" w-full mb-2 flex flex-col gap-2  md:flex-row p-5  items-center justify-between py-2">
        <h1 className=" text-gray-500 font-medium text-lg flex items-center">
          Dispatch
        </h1>
      </div>

      <Modal
        size="3xl"
        open={open}
        closeModal={toggleModal}
        title={"Hearing Notice"}
      >
        {/* <Editor data={data} done={toggleModal} /> */}
        <div className="flex flex-col">
          <HearingNotice data={data} ref={componentRef} />
          <div className="grid place-content-center pb-8 pt-2">
            <div className="flex gap-4 w-full">
              <Button className="px-10" onClick={handlePrint}>
                Print Hard Copies
              </Button>
              <Button>Send As Email</Button>
              <Button>Send As SMS</Button>
            </div>
          </div>
        </div>
      </Modal>
      <DataTable
        columns={awaitingSittingColumns}
        hasAction={false}
        onAction={toggleModal}
        data={tableData}
        showTableActions
        allowCustomRowActionList
        tableRowActionList={actionOptions}
        onTableRowAction={onRowAction}
      />
    </div>
  );
};

export default Page;
