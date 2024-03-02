import { ColumnDef } from "@tanstack/react-table";
import format from "date-fns/format";

export interface IGrade {}

export const columns: ColumnDef<IGrade>[] = [
  {
    accessorKey: "id",
    header: "#",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "createdAt",
    header: "Created At",
  },
];

export const tableData: IGrade[] = [
  { id: 1, name: "Department 1", createdAt: format(new Date(), "dd MMM yyy") },
  { id: 2, name: "Department 2", createdAt: format(new Date(), "dd MMM yyy") },
  { id: 3, name: "Department 3", createdAt: format(new Date(), "dd MMM yyy") },
  { id: 4, name: "Department 4", createdAt: format(new Date(), "dd MMM yyy") },
  { id: 5, name: "Department 5", createdAt: format(new Date(), "dd MMM yyy") },
];
