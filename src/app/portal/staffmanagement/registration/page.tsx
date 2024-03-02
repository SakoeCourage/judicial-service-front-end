"use client";
import Modal from "app/app/components/ui/modal";
import React, { useState } from "react";
import Editor from "./partials/editor";
import DataTable from "app/app/components/datatable/datatable";
import { columns, tableData } from "./partials/columns";
import AlertModal from "app/app/components/ui/alertModal";
import { ITableRowActionList } from "app/app/components/datatable/partials/tabletypedefs";
import PostingEditor from "./partials/postingEditor";

const tableActions: ITableRowActionList[] = [
  { icon: "fe:edit", title: "Edit", accessor: "edit" },
  {
    icon: "fluent:person-swap-20-filled",
    title: "Posting / Transfer",
    accessor: "posting",
  },
  { icon: "mdi:trash", title: "Delete", accessor: "delete" },
];

const Page = () => {
  const [open, setOpen] = useState(false);
  const [edit, setEdit] = useState({
    recordId: 0,
    open: false,
  });
  const [data, setData] = useState<any | null>(null);
  const [alert, setAlert] = useState({ recordId: 0, open: false });
  const [busy, setBusy] = useState(false);
  const [openPosting, setOpenPosting] = useState(false);

  const toggleModal = () => {
    if (open) {
      setOpen(false);
    } else {
      setOpen(true);
    }
    setEdit({ recordId: 0, open: false });
    if (data) {
      setData(null);
    }
  };

  const togglePosting = () => {
    if (openPosting) {
      setOpenPosting(false);
    } else {
      setOpenPosting(true);
    }
  };

  const onRowAction = (action: string, row: Record<string, any>) => {
    switch (action) {
      case "edit":
        toggleModal();
        const d = row as any;
        setData(d);
        setEdit({ recordId: row.id, open: true });
        break;
      case "delete":
        setAlert({ open: true, recordId: row.id });
        break;
      case "posting":
        togglePosting();
        break;
      default:
        break;
    }
  };

  const closeAlert = () => {
    setAlert({ recordId: 0, open: false });
  };

  return (
    <div className=" container mx-auto p-5">
      <div className=" w-full mb-2 flex flex-col gap-2  md:flex-row p-5  items-center justify-between py-2">
        <h1 className=" text-gray-500 font-medium text-lg flex items-center">
          Staff
        </h1>
      </div>

      <Modal
        size="2xl"
        open={open}
        closeModal={toggleModal}
        title={edit.open ? "Update Staff" : "New Staff"}
      >
        <Editor />
      </Modal>
      <Modal
        size="lg"
        open={openPosting}
        closeModal={togglePosting}
        title="Posting / Transfer"
      >
        <PostingEditor />
      </Modal>
      <DataTable
        columns={columns}
        actionName="New Staff"
        onAction={toggleModal}
        data={tableData}
        showTableActions
        allowCustomRowActionList
        tableRowActionList={tableActions}
        onTableRowAction={onRowAction}
      />

      <AlertModal
        open={alert.open}
        onCancel={closeAlert}
        onContinue={() => {}}
        busy={busy}
      />
    </div>
  );
};

export default Page;
