"use client";
import Select2options from "app/app/components/form-components/select2options";
import Fieldset from "app/app/components/ui/partials/Fieldset";
import { tableData as civilNature } from "../../../applicationsetup/civilcasescategory/partials/columns";
import { tableData as criminalNature } from "../../../applicationsetup/criminalcasescategory/partials/columns";
import React, { useMemo } from "react";
import IconifyIcon from "app/app/components/ui/iconsbutton";
import { Input } from "app/app/components/form-components/input";
import { Textarea } from "app/app/components/form-components/textarea";

export const CASETYPE = [
  { value: "Civil", label: "Civil" },
  { value: "Criminal", label: "Criminal" },
];

interface IProp {
  setFormData: any;
  formData: any;
  amount: number;
}

const Description: React.FC<IProp> = ({ formData, setFormData, amount }) => {
  const caseNature = useMemo(() => {
    const natureList =
      formData.caseType === CASETYPE[0].value
        ? civilNature
        : formData.caseType === CASETYPE[1].value
        ? criminalNature
        : [];

    return natureList.map((a) => ({
      value: a.id,
      label: `${a.name} - ${a.code}`,
    }));
  }, [formData.caseType]);
  return (
    <Fieldset label="Descriptions" showIcon={false}>
      <div className="space-y-4">
        <Input label="Title" name="title" required />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <Select2options
            required
            value={formData.caseType}
            label="Case Type"
            data={CASETYPE}
            placeholder="Select the type of case"
            onChange={(e) => {
              setFormData((data: any) => ({
                ...data,
                caseType: e,
                caseNature: 0,
              }));
            }}
          />
          <Select2options
            value={formData.caseNature}
            label="Nature of Case"
            required
            data={caseNature}
            placeholder="Select the nature of case"
          />
        </div>
        <div className="grid grid-cols-3 gap-3">
          <Input label="Plaintiff Name" name="platiff" required />
          <Input label="Plaintiff Address" name="plaintiffAddress" required />
          <Input label="Plaintiff Phone" name="plaintiffPhone" required />
          <Input label="Defendant Name" name="platiff" required />
          <Input label="Defendant Address" name="plaintiffAddress" required />
          <Input label="Defendant Phone" name="defendantAddress" required />
        </div>

        {amount > 0 && (
          <>
            <div className="bg-blue-50 rounded-md shadow-sm shadow-gray-400 px-4 py-4">
              <div className="flex flex-col">
                <p className=" flex items-center gap-1">
                  <IconifyIcon icon="tdesign:money" />
                  <span className="text-gray-500"> Amount to pay</span>
                </p>
                <span className="pl-9 font-medium">GH₵ {amount}</span>
              </div>
            </div>
            <Select2options
              label="Mode of Payment"
              placeholder="Select a payment mode"
              data={[
                { value: "Cash", label: "Cash" },
                { value: "MOMO", label: "MOMO" },
                { value: "Cheque", label: "Cheque" },
              ]}
              required
              onChange={(e) =>
                setFormData((d: typeof formData) => ({ ...d, paymentMode: e }))
              }
            />
            {formData.paymentMode === "MOMO" && (
              <div>
                <Input
                  label="Momo Number"
                  name="momoNumber"
                  placeholder="Enter momo number"
                  required={formData.paymentMode === "MOMO" ? true : false}
                />
              </div>
            )}
            {formData.paymentMode === "Cheque" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input label="Bank" name="bank" />
                <Input label="Cheque Number" name="cheque" />
              </div>
            )}
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                value={formData.paid}
                onChange={(e) =>
                  setFormData((data: typeof formData) => ({
                    ...data,
                    paid: e.target.value,
                  }))
                }
              />
              <p>Has made payment?</p>
            </div>
          </>
        )}
      </div>
    </Fieldset>
  );
};

export default Description;
