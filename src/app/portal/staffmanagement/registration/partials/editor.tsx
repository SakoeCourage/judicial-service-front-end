import { Form } from "app/app/components/form-components";
import { Button } from "app/app/components/form-components/button";
import Datepicker from "app/app/components/form-components/datepicker";
import { Input } from "app/app/components/form-components/input";
import Select2options from "app/app/components/form-components/select2options";
import React from "react";

const Editor = () => {
  return (
    <div className="p-6 space-y-6">
      <Input name="" label="Staff ID" required />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input name="" label="First name" required />
        <Input name="" label="Last name" required />
        <Input name="" label="Other name(s)" />
        <Input name="" label="Official Email" required />
        <Input name="" label="Phone Number" required />
        <Datepicker name="" label="Date of Birth" required/>
        <Input name="" label="ECOWAS Card No." required />
        <Select2options
          required
          data={[]}
          label="Current Grade"
          placeholder="Assigned Staff"
        />
      </div>
      <nav className="flex items-center justify-end gap-3">
        <Button variant="outline" size="sm">
          Cancel
        </Button>
        <Button variant="primary" size="sm" className="">
          Save
        </Button>
      </nav>
    </div>
  );
};

export default Editor;
