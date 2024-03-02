import { Form } from "app/app/components/form-components";
import { Button } from "app/app/components/form-components/button";
import Datepicker from "app/app/components/form-components/datepicker";
import { Input } from "app/app/components/form-components/input";
import Select2options from "app/app/components/form-components/select2options";
import React from "react";

const PostingEditor = () => {
  return (
    <div className="p-6 space-y-6">
      <Select2options
        required
        data={[]}
        label="Court"
        placeholder="Assigned Staff"
      />
      <Select2options
        required
        data={[]}
        label="Department / Unit"
        placeholder="Assigned Staff"
      />
      <Datepicker name="" label="Posting Date" required />
      <Datepicker name="" label="Transfer Date" />

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

export default PostingEditor;
