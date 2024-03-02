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
    accessorKey: "contact",
    header: "Contact",
  },
  {
    accessorKey: "location",
    header: "Location",
  },
  {
    accessorKey: "createdAt",
    header: "Created At",
  },
];

export const tableData: IGrade[] = [
  {
    id: 1,
    name: "Court 1",
    contact: "Contact 1",
    location: "Location 1",
    createdAt: format(new Date(), "dd MMM yyy"),
  },
  {
    id: 2,
    name: "Court 2",
    contact: "Contact 2",
    location: "Location 2",
    createdAt: format(new Date(), "dd MMM yyy"),
  },
  {
    id: 3,
    name: "Court 3",
    contact: "Contact 3",
    location: "Location 3",
    createdAt: format(new Date(), "dd MMM yyy"),
  },
  {
    id: 4,
    name: "Court 4",
    contact: "Contact 4",
    location: "Location 4",
    createdAt: format(new Date(), "dd MMM yyy"),
  },
  {
    id: 5,
    name: "Court 5",
    contact: "Contact 5",
    location: "Location 5",
    createdAt: format(new Date(), "dd MMM yyy"),
  },
];
