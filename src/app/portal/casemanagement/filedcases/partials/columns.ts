import { ColumnDef } from "@tanstack/react-table";
import format from "date-fns/format";

export interface ICase {
  id: number;
  title: string;
  amount: number;
  suitNo: string;
  defendantName: string;
  defentAddress: string;
  defendatPhone: string;
  plaintiffName: string;
  plaintiffAddress: string;
  plaintiffPhone: string;
  allocatedDate: string;
  time: string;
  files?: string[];
  createdAt: string;
  paid: boolean;
  caseType: string | number;
  caseNature: string;
  reflief?: string;
  cliams?: string;
  summary?: string;
  dateOfPayment: string;
  location: string;
}

export const columns: ColumnDef<ICase>[] = [
  {
    accessorKey: "suitNo",
    header: "Suit No.",
  },
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "caseType",
    header: "Case Type",
  },
  {
    accessorKey: "caseNature",
    header: "Case Nature",
  },
  {
    accessorKey: "createdAt",
    header: "Created At",
  },
];

export const awaitingSittingColumns: ColumnDef<ICase>[] = [
  {
    accessorKey: "suitNo",
    header: "Suit No.",
  },
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "caseType",
    header: "Case Type",
  },
  { accessorKey: "allocatedDate", header: "Allocated Date" },

  {
    accessorKey: "caseNature",
    header: "Case Nature",
  },
  {
    accessorKey: "createdAt",
    header: "Created At",
  },
];

// Get the current date
var currentDate = new Date();

// Add 2 months to the current date
var futureDate = new Date(
  currentDate.getFullYear(),
  currentDate.getMonth() + 2,
  currentDate.getDate()
);

// Format the future date as "dd MMM yyy"
var formattedDate =
  futureDate.getDate() +
  " " +
  futureDate.toLocaleString("default", { month: "short" }) +
  " " +
  futureDate.getFullYear();

// Assign the formatted date to allocatedDate
var allocatedDate = formattedDate;

export const tableData: ICase[] = [
  {
    id: 1,
    caseType: "Civil",
    caseNature: "Divorce and Matrmonial",
    paid: true,
    allocatedDate: allocatedDate,
    title: "Rita Emefa Agbalo VS Samuel Ataa",
    amount: 100.0,
    time: "09:00 am",
    suitNo: `A001/001/${format(new Date(), "yyy")}`,
    defendantName: "Samuel Ataa",
    defendatPhone: "012234442342",
    defentAddress: "Address 1",
    plaintiffAddress: "Address 2",
    plaintiffName: "Rita Emefa Agbalo",
    plaintiffPhone: "111344223",
    createdAt: format(new Date(), "dd MMM yyy"),
    dateOfPayment: format(new Date(), "dd MMM yyy"),
    files: ["file 1", "file 2"],
    location: "Court A",
  },
  {
    id: 1,
    caseType: "Criminal",
    caseNature: "Sexual Offences",
    time: "09:00 am",
    paid: true,
    title: "Plaintiff VS Defendant",
    allocatedDate: allocatedDate,
    amount: 100.0,
    suitNo: `C011/012/${format(new Date(), "yyy")}`,
    defendantName: "Samuel Ataa",
    defendatPhone: "012234442342",
    defentAddress: "Address 1",
    plaintiffAddress: "Address 2",
    plaintiffName: "Rita Emefa Agbalo",
    plaintiffPhone: "111344223",
    createdAt: format(new Date(), "dd MMM yyy"),
    reflief: "This will be for reliefs",
    summary: "this is for summary",
    cliams: "This id for cliams",
    dateOfPayment: format(new Date(), "dd MMM yyy"),
    location: "Court B",
  },
];
