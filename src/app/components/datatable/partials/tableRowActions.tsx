import React from "react";

import IconifyIcon from "../../ui/iconsbutton";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "../../ui/dropdown";
import { Button } from "../../form-components/button";

export interface ITableRowActionList {
  title: string;
  accessor?: string;
  icon?: string;
}

interface ITableRowActions {
  showEdit?: boolean;
  showDelete?: boolean;
  showAddBranches?: boolean;
  showViewBranches?: boolean;
  onRowAction?: (action: string) => void;
  actionList?: ITableRowActionList[];
  allowCustomRowActionList?: boolean;
}

const TableRowActions: React.FC<ITableRowActions> = ({
  showEdit = true,
  showDelete = true,
  allowCustomRowActionList = false,
  actionList = [],
  onRowAction,
}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="grid place-content-center  p-0.5 rounded-[5px] bg-white shadow">
          <IconifyIcon icon="tabler:dots" className="h-3 w-3" />
          <span className="sr-only">Open menu</span>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min:w-[160px] w-full ">
        {allowCustomRowActionList && actionList?.length ? (
          actionList.map((x, index) => {
            return (
              <React.Fragment key={index}>
                <DropdownMenuItem
                  className="cursor-pointer space-x-4"
                  onClick={() =>
                    onRowAction && onRowAction(x.accessor ?? x.title)
                  }
                >
                  {x.title}
                  <DropdownMenuShortcut>
                    <IconifyIcon
                      icon={x.icon!}
                      fontSize={15}
                      className={
                        x.title.toLowerCase().includes("delete")
                          ? "text-red-600"
                          : ""
                      }
                    />
                  </DropdownMenuShortcut>
                </DropdownMenuItem>
                {index !== actionList.length - 1 && <DropdownMenuSeparator />}
              </React.Fragment>
            );
          })
        ) : (
          <>
            {showEdit && (
              <>
                <DropdownMenuItem
                  className="cursor-pointer"
                  onClick={() => onRowAction && onRowAction("edit")}
                >
                  Edit
                  <DropdownMenuShortcut>
                    <IconifyIcon icon="fe:edit" fontSize={15} />
                  </DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
              </>
            )}
            {showDelete && (
              <>
                <DropdownMenuItem
                  className="cursor-pointer"
                  onClick={() => onRowAction && onRowAction("delete")}
                >
                  Delete
                  <DropdownMenuShortcut>
                    <IconifyIcon
                      icon="mdi:trash"
                      fontSize={15}
                      className="text-red-600"
                    />
                  </DropdownMenuShortcut>
                </DropdownMenuItem>
              </>
            )}
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default TableRowActions;
