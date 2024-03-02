import { Form } from "app/app/components/form-components";
import { Button } from "app/app/components/form-components/button";
import { Input } from "app/app/components/form-components/input";
import React from "react";

const Editor = () => {
  return (
    <div className="p-6 space-y-6">
      <Input name="" label="Name" required />
      <Input name="" label="Contact" required />
      <Input name="" label="Location" required />

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
