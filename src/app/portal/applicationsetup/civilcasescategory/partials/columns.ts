import { ColumnDef } from "@tanstack/react-table";
import format from "date-fns/format";

export interface IGrade {
  code: string;
  id: number;
  createdAt: string;
  name: string;
  description: string;
}

export const columns: ColumnDef<IGrade>[] = [
  {
    accessorKey: "id",
    header: "#",
  },
  { accessorKey: "code", header: "Code" },
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

export const tableData: IGrade[] = [
  {
    id: 1,
    name: "Land",
    code: "A001",
    createdAt: format(new Date(), "dd MMM yyy"),
    description: "",
  },
  {
    id: 2,
    name: "Commercial",
    code: "A002",
    createdAt: format(new Date(), "dd MMM yyy"),
    description: "This covers all commercial cases",
  },
  {
    id: 3,
    name: "Industrial",
    code: "A003",
    createdAt: format(new Date(), "dd MMM yyy"),
    description: "This covers all Industrial cases",
  },
  {
    id: 4,
    name: "Divorce and Matrimonial",
    code: "A004",
    createdAt: format(new Date(), "dd MMM yyy"),
    description: "",
  },
  {
    id: 5,
    name: "Defamation",
    code: "A005",
    createdAt: format(new Date(), "dd MMM yyy"),
    description: "",
  },
  {
    id: 6,
    name: "Family Tribunal",
    code: "A006",
    createdAt: format(new Date(), "dd MMM yyy"),
    description: "",
  },
  {
    id: 7,
    name: "Letters of Administration",
    code: "A007",
    createdAt: format(new Date(), "dd MMM yyy"),
    description: "",
  },
  {
    id: 8,
    name: "Estate Actions",
    code: "A008",
    createdAt: format(new Date(), "dd MMM yyy"),
    description: "",
  },
  {
    id: 9,
    name: "Landlord/Tenant",
    code: "A009",
    createdAt: format(new Date(), "dd MMM yyy"),
    description: "",
  },
  {
    id: 10,
    name: "Running Down (Accident)",
    code: "A010",
    createdAt: format(new Date(), "dd MMM yyy"),
    description: "",
  },
  {
    id: 11,
    name: "Others",
    code: "A011",
    createdAt: format(new Date(), "dd MMM yyy"),
    description: "",
  },
];
