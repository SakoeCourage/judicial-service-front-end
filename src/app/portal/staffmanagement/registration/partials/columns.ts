import { ColumnDef } from "@tanstack/react-table";
import format from "date-fns/format";

interface IStaff {
  id: number;
  fullName: string;
  staffID: string;
  email: string;
  department: string;
  grade: string;
  firstName: string;
  otherName: string;
  phoneNumber: string;
  lastName: string;
  createdAt: string;
  dateOfBirth: string;
}

export const columns: ColumnDef<IStaff>[] = [
  {
    accessorKey: "id",
    header: "#",
  },
  {
    accessorKey: "staffID",
    header: "Staff ID",
  },
  {
    accessorKey: "fullName",
    header: "Full Name",
  },
  {
    accessorKey: "phoneNumber",
    header: "Phone Number",
  },

  {
    accessorKey: "email",
    header: "Email",
  },

  {
    accessorKey: "department",
    header: "Department ",
  },
  {
    accessorKey: "grade",
    header: "Grade",
  },
];

export const tableData: IStaff[] = [
  {
    id: 1,
    dateOfBirth: format(new Date(), "dd MMM yyy"),
    firstName: "First Name 1",
    otherName: "",
    lastName: "Last Name 1",
    fullName: "Full Name 1",
    staffID: "Staff ID 1",
    email: "email 1",
    phoneNumber: "phone number 1",
    department: "Department 1",
    grade: "Grade 1",
    createdAt: format(new Date(), "dd MMM yyy"),
  },
  {
    id: 2,
    firstName: "First Name 2",
    otherName: "",
    lastName: "Last Name 2",
    fullName: "Full Name 2",
    staffID: "Staff ID 2",
    email: "email 2",
    phoneNumber: "phone number 2",
    department: "Department 2",
    grade: "Grade 2",
    createdAt: format(new Date(), "dd MMM yyy"),
    dateOfBirth: format(new Date(), "dd MMM yyy"),
  },
  {
    id: 3,
    firstName: "First Name 3",
    otherName: "",
    lastName: "Last Name 3",
    fullName: "Full Name 3",
    staffID: "Staff ID 3",
    email: "email 3",
    phoneNumber: "phone number 3",
    department: "Department 3",
    grade: "Grade 3",
    createdAt: format(new Date(), "dd MMM yyy"),
    dateOfBirth: format(new Date(), "dd MMM yyy"),
  },
];
