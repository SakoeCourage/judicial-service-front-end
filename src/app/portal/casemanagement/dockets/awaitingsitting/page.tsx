"use client";
import DataTable from "app/app/components/datatable/datatable";
import Modal from "app/app/components/ui/modal";
import React, { useState } from "react";
import {
  awaitingSittingColumns,
  tableData,
} from "../../filedcases/partials/columns";
import { ITableRowActionList } from "app/app/components/datatable/partials/tableRowActions";

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
          Awaiting Sitting
        </h1>
      </div>

      <Modal
        size="3xl"
        open={open}
        closeModal={toggleModal}
        title={"Court List"}
      >
        <div className="h-96 flex justify-center items-center">This will show a court list between a given time frame</div>
        {/* <Editor data={data} done={toggleModal} /> */}
      </Modal>
      <DataTable
        actionName="Generate Court List"
        enableTableFilter
        extendedFilter={{ enable: true, filters: [] }}
        columns={awaitingSittingColumns}
        hasAction={true}
        onAction={toggleModal}
        data={tableData}
        showTableActions={false}
        allowCustomRowActionList
        tableRowActionList={actionOptions}
        onTableRowAction={onRowAction}
      />
    </div>
  );
};

export default Page;
