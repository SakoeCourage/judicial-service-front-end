import { ColumnDef } from "@tanstack/react-table";
import format from "date-fns/format";

export interface ICaseCategory {
  code: string;
  id: number;
  createdAt: string;
  name: string;
  description: string;
  section: string;
}

export const columns: ColumnDef<ICaseCategory>[] = [
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
    accessorKey: "section",
    header: "Section",
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

export const tableData: ICaseCategory[] = [
  {
    id: 1,
    name: "Attempt, Abetment and Conspiracy",
    code: "C001",
    createdAt: format(new Date(), "dd MMM yyy"),
    description: "This covers all Attempt, Abetment and Conspiracy",
    section: "Sect. 18 - 25",
  },
  {
    id: 2,
    name: "Commital and Similar Offences",
    code: "C002",
    createdAt: format(new Date(), "dd MMM yyy"),
    description: "",
    section: "Sect. 46 - 68",
  },
  {
    id: 3,
    name: "Criminal Harm to the Person",
    code: "C003",
    createdAt: format(new Date(), "dd MMM yyy"),
    description: "",
    section: "Sect. 69 - 83",
  },
  {
    id: 4,
    name: "Assault and Similar Offences",
    code: "C004",
    createdAt: format(new Date(), "dd MMM yyy"),
    description: "",
    section: "Sect. 84 - 88",
  },
  {
    id: 5,
    name: "Kidnapping, Abduction and Similar Offences",
    code: "C005",
    createdAt: format(new Date(), "dd MMM yyy"),
    description: "",
    section: "Sect. 89 - 96",
  },
  {
    id: 6,
    name: "Sexual Offences",
    code: "C006",
    createdAt: format(new Date(), "dd MMM yyy"),
    description: "",
    section: "Sect. 97 - 111",
  },
  {
    id: 7,
    name: "Offences Involving Dishonesty",
    code: "C007",
    createdAt: format(new Date(), "dd MMM yyy"),
    description: "",
    section: "Sect. 120 - 157",
  },
  {
    id: 8,
    name: "Forgery and Similar Offences",
    code: "C008",
    createdAt: format(new Date(), "dd MMM yyy"),
    description: "",
    section: "Sect. 120 - 157",
  },
  {
    id: 9,
    name: "Unlawful Damage Offences",
    code: "C009",
    createdAt: format(new Date(), "dd MMM yyy"),
    description: "",
    section: "Sect. 172 - 179",
  },
  {
    id: 10,
    name: "Offences Against the Peace",
    code: "C010",
    createdAt: format(new Date(), "dd MMM yyy"),
    description: "",
    section: "Sect. 180 - 209",
  },
  {
    id: 11,
    name: "Offences Concerning Justice Administration",
    code: "C011",
    createdAt: format(new Date(), "dd MMM yyy"),
    description: "",
    section: "Sect. 210 - 235",
  },
  {
    id: 12,
    name: "Offences Relating to Public Offices and Elections",
    code: "C012",
    createdAt: format(new Date(), "dd MMM yyy"),
    description: "",
    section: "Sect. 236 - 261",
  },
  {
    id: 13,
    name: "Public Morals and Nuisance Offences",
    code: "C013",
    createdAt: format(new Date(), "dd MMM yyy"),
    description: "",
    section: "Sect. 273 - 298",
  },
  {
    id: 14,
    name: "Offences Relating to Animals",
    code: "C012",
    createdAt: format(new Date(), "dd MMM yyy"),
    description: "",
    section: "Sect. 299 - 310",
  },
];
