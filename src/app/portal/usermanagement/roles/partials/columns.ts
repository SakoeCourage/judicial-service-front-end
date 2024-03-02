import { ColumnDef } from "@tanstack/react-table";
import format from "date-fns/format";

interface IRole {}

export const columns: ColumnDef<IRole>[] = [
  {
    accessorKey: "id",
    header: "#",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "description",
    header: "Description",
  },
  {
    accessorKey: "createdAt",
    header: "Created At",
  },
];

export const tableData: IRole[] = [
  {
    id: 1,
    name: "Role 1",
    description: "",
    createdAt: format(new Date(), "dd MMM yyy"),
  },
  {
    id: 2,
    name: "Role 2",
    description: "",
    createdAt: format(new Date(), "dd MMM yyy"),
  },
  {
    id: 3,
    name: "Role 3",
    description: "",
    createdAt: format(new Date(), "dd MMM yyy"),
  },
  {
    id: 4,
    name: "Role 4",
    description: "",
    createdAt: format(new Date(), "dd MMM yyy"),
  },
  {
    id: 5,
    name: "Role 5",
    description: "",
    createdAt: format(new Date(), "dd MMM yyy"),
  },
];
