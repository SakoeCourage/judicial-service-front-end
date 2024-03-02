"use client";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "app/app/components/ui/partials/tabs";
import WritOfSummon from "./writofsummon";
import UploadSummon from "./uploadSummon";
import React, { useState } from "react";
import { Button } from "app/app/components/form-components/button";
import Description from "./description";
import { showError, showSuccess } from "app/app/lib/utils";

interface IProp {
  done: () => void;
}

const Editor: React.FC<IProp> = ({ done }) => {
  const [formData, setFormData] = useState({
    caseType: "",
    caseNature: 0,
    paid: false,
    paymentMode: "",
  });
  const [toPay, setToPay] = useState({
    amount: 0,
    busy: false,
  });
  const [busy, setBusy] = useState(false);

  const getAmountToPay = () => {
    setToPay({ amount: 0, busy: true });
    setTimeout(() => {
      setToPay({ amount: 100.0, busy: false });
    }, 1000);
  };

  const submitFile = () => {
    if (!formData.paid) {
      showError("Payment must be done.");
      return;
    }
    setBusy(true);
    setTimeout(() => {
      showSuccess("Successfully submit filed case");
      setBusy(false);
      done();
    }, 1000);
  };
  return (
    <div className="w-full py-4 h-full">
      <div className="flex justify-center">
        <Tabs defaultValue="upload">
          <TabsList>
            <TabsTrigger value="upload" className="w-[530px]">
              File Upload
            </TabsTrigger>
            <TabsTrigger value="manual" className="w-[530px]">
              Manual Form
            </TabsTrigger>
          </TabsList>
          <TabsContent value="upload">
            <UploadSummon />
          </TabsContent>
          <TabsContent value="manual">
            <WritOfSummon />
          </TabsContent>
        </Tabs>
      </div>
      <div className="px-4">
        <Description
          amount={toPay.amount}
          setFormData={setFormData}
          formData={formData}
        />
        <nav className="flex items-center justify-end gap-3 py-10">
          <Button
            variant="primary"
            className="w-40"
            onClick={getAmountToPay}
            processing={toPay.busy}
          >
            Amount to pay
          </Button>

          <Button
            variant="success"
            size="sm"
            className=""
            onClick={submitFile}
            processing={busy}
          >
            Submit
          </Button>
        </nav>
      </div>
    </div>
  );
};

export default Editor;
