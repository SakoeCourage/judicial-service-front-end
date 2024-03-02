"use client";
import Modal from "app/app/components/ui/modal";
import React, { useState } from "react";
import Editor from "../partials/editor";
import DataTable from "app/app/components/datatable/datatable";
// import { columns, tableData } from "./partials/columns";
import { ITableRowActionList } from "app/app/components/datatable/partials/tableRowActions";
import { columns, tableData } from "../../../filedcases/partials/columns";
import Reactbigcalendar from "app/app/components/ui/reactbigcalendar";

const actionOptions: ITableRowActionList[] = [
    {
        icon: "clarity:date-outline-alerted",
        title: "Allocate Case",
        accessor: "allocate",
    },
    // { icon: "ion:open-outline", title: "Open Docket", accessor: "docket" },
];

const Pendingallocationtable = () => {
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
            case "allocate":
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
        <>
            <Reactbigcalendar />

            {/* <Modal
                size="3xl"
                open={open}
                closeModal={toggleModal}
                title={"Case Allocation"}
            >
                <Editor data={data} done={toggleModal} />
            </Modal>
            <DataTable
                columns={columns}
                hasAction={false}
                onAction={toggleModal}
                data={tableData}
                showTableActions
                allowCustomRowActionList
                tableRowActionList={actionOptions}
                onTableRowAction={onRowAction}
            /> */}
        </>
    );
};

export default Pendingallocationtable;
