import { ColumnDef } from "@tanstack/react-table";
import format from "date-fns/format";

interface IGrade {}

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
  { id: 1, name: "Grade 1", createdAt: format(new Date(), "dd MMM yyy") },
  { id: 2, name: "Grade 2", createdAt: format(new Date(), "dd MMM yyy") },
  { id: 3, name: "Grade 3", createdAt: format(new Date(), "dd MMM yyy") },
  { id: 4, name: "Grade 4", createdAt: format(new Date(), "dd MMM yyy") },
  { id: 5, name: "Grade 5", createdAt: format(new Date(), "dd MMM yyy") },
];
