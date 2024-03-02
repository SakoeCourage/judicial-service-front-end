import { Form } from "app/app/components/form-components";
import { Button } from "app/app/components/form-components/button";
import { Input } from "app/app/components/form-components/input";
import { Textarea } from "app/app/components/form-components/textarea";
import Fieldset from "app/app/components/ui/partials/Fieldset";
import React from "react";

const WritOfSummon = () => {
  return (
    <div className="pt-2 pb-4 space-y-4">
 
      <Fieldset label="Particular of claims" showIcon={false}>
        <div className="space-y-4">
          <Textarea name="" label="Claims" required />
          <Textarea name="" label="Refief(s)" required />
          <Textarea
            name=""
            label="Summary of subject matter of claim"
            required
            rows={5}
          />
        </div>
      </Fieldset>
    </div>
  );
};

export default WritOfSummon;
