import { Form } from "app/app/components/form-components";
import { Button } from "app/app/components/form-components/button";
import { Input } from "app/app/components/form-components/input";
import { Textarea } from "app/app/components/form-components/textarea";
import React from "react";

interface EditorProp {
  id?: number;
  isDone: () => void;
  edit?: boolean;
  data?: any;
}
const Editor: React.FC<EditorProp> = ({
  id = 0,
  isDone,
  edit = false,
  data = {},
}) => {
  return (
    <div className="p-6 space-y-6">
      <Input name="code" label="Category code" required />
      <Input name="name" label="Name" required />
      <Textarea name="description" label="Description" />
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
