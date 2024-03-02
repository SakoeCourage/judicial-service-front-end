"use client";
import FileUpload from "app/app/components/form-components/fileUpload";
import Fieldset from "app/app/components/ui/partials/Fieldset";

const UploadSummon = () => {
  return (
    <div className="space-y-6 py-4">
      <Fieldset label="Upload Writ of Summon" showIcon={false}>
        <FileUpload />
      </Fieldset>
    </div>
  );
};

export default UploadSummon;
