"use client";
import { Form } from "app/app/components/form-components";
import { Button } from "app/app/components/form-components/button";
import { Input } from "app/app/components/form-components/input";
import Fieldset from "app/app/components/ui/partials/Fieldset";
import React, { useEffect, useState } from "react";
import { ICase } from "../../../filedcases/partials/columns";
import IconifyIcon from "app/app/components/ui/iconsbutton";
import { Textarea } from "app/app/components/form-components/textarea";
import Select2options from "app/app/components/form-components/select2options";
import Datepicker from "app/app/components/form-components/datepicker";
import format from "date-fns/format";
import { showError, showSuccess } from "app/app/lib/utils";

interface IProp {
  data?: ICase;
  done: () => void;
}

const COURT = [
  { value: "Court 1", label: "Court 1" },
  { value: "Court 2", label: "Court 2" },
];

const Editor: React.FC<IProp> = ({ data, done }) => {
  const [formData, setFormData] = useState({
    date: format(new Date().setMonth(new Date().getMonth() + 3), "d/M/Y"),
    court: "",
  });
  const [busy, setBusy] = useState(false);

  const allocate = () => {
    if (!formData.court) {
      showError("Select a court");
      return;
    }
    setBusy(true);
    setTimeout(() => {
      showSuccess("Successfully allocated case");
      setBusy(false);
      done();
    }, 1000);
  };

  return (
    <div className="flex flex-col gap-4 py-4 px-8">
      <Fieldset label="Descriptions" showIcon={false}>
        <div className="space-y-4">
          <Input label="Title" name="title" readOnly value={data?.title} />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <Input label="Suit No." readOnly value={data?.suitNo} />
            <Input label="Date of filing" readOnly value={data?.createdAt} />
            <Input label="Type of Case" readOnly value={data?.caseType} />
            <Input label="Nature of Case" readOnly value={data?.caseNature} />
          </div>
          <div className="grid grid-cols-3 gap-3">
            <Input
              label="Plaintiff Name"
              name="platiff"
              readOnly
              value={data?.plaintiffName}
            />
            <Input
              label="Plaintiff Address"
              name="plaintiffAddress"
              readOnly
              value={data?.plaintiffAddress}
            />
            <Input
              label="Plaintiff Phone"
              name="plaintiffPhone"
              readOnly
              value={data?.plaintiffPhone}
            />
            <Input
              label="Defendant Name"
              name="platiff"
              readOnly
              value={data?.defendantName}
            />
            <Input
              label="Defendant Address"
              name="plaintiffAddress"
              readOnly
              value={data?.defentAddress}
            />
            <Input
              label="Defendant Phone"
              name="defendantAddress"
              readOnly
              value={data?.defendatPhone}
            />
          </div>
          {!data?.files && (
            <div className="flex flex-col gap-4">
              <Textarea
                label="Cliams"
                value={data?.cliams}
                name="claims"
                readOnly
              />
              <Textarea
                label="Relief(s)"
                value={data?.reflief}
                name="refliefs"
                readOnly
              />
              <Textarea
                label="Summary"
                value={data?.summary}
                name="summary"
                readOnly
              />
            </div>
          )}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <Input label="Amount Paid" readOnly value={data?.amount} />
            <Input
              label="Date of Payment"
              readOnly
              value={data?.dateOfPayment}
            />
          </div>
        </div>
        {data?.files && (
          <div className="border-4 border-dotted p-4 mt-5">
            <button className="bg-blue-50 px-4 py-6 rounded-md  hover:bg-blue-100 w-full">
              <div className="flex justify-center">
                <div className="flex flex-col items-center">
                  <IconifyIcon icon="fa6-solid:download" />
                  <p className="text-xs">Download attached documents</p>
                </div>
              </div>
            </button>
          </div>
        )}
      </Fieldset>
      <Fieldset label="Allocation" showIcon={false}>
        <div className="flex flex-col gap-4">
          <Select2options
            value={formData.court}
            label="Court"
            data={COURT}
            required
            placeholder="Select court to handle case"
            onChange={(e) => setFormData((d) => ({ ...d, court: e }))}
          />
          <Datepicker
            value={formData.date}
            label="Date of sitting"
            name="date"
            required
            onChange={(e) => setFormData((d: any) => ({ ...d, date: e }))}
          />
        </div>
      </Fieldset>
      <div className="flex justify-end gap-2">
        <Button variant="outline">Cancel</Button>
        <Button onClick={allocate} processing={busy}>
          Allocate
        </Button>
      </div>
    </div>
  );
};

export default Editor;
