"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import COA from "app/app/assets/images/coa.svg.png";
import { ICase } from "../../../filedcases/partials/columns";
import format from "date-fns/format";
interface IProps {
  data: ICase;
}
const HearingNotice: React.FC<IProps> = React.forwardRef((props, ref) => {
  const { data } = props;
  const [formData, setFormData] = useState<ICase>();
  useEffect(() => {
    if (data) {
      setFormData(data);
    }
  }, [data]);

  return (
    <div className="py-6 px-10" ref={ref}>
      <div className="flex justify-center">
        <Image src={COA} alt="" className="w-24" />
      </div>
      <div className="flex justify-end">{format(new Date(), "dd MMM yyy")}</div>
      <p className="text-center text-xl py-2 tracking-wide font-medium underline uppercase">
        Hearing Notice To Parties
      </p>
      To :
      <div className="pb-4 pt-2">
        <p>{formData?.plaintiffName}</p>
        <p>{formData?.plaintiffAddress}</p>
        <p>{formData?.plaintiffPhone}</p>
        <p className="font-medium">PLAINTIFF</p>
      </div>
      AND
      <div className="pt-3">
        <p>{formData?.defendantName}</p>
        <p>{formData?.defentAddress}</p>
        <p>{formData?.defendatPhone}</p>
        <p className="font-medium">DEFENDANT</p>
      </div>
      <div className="pt-4 flex flex-col gap-5">
        <p>
          This is to inform you that a hearing has been scheduled in the matter
          of{" "}
          <strong>
            {formData?.title} - {formData?.suitNo}
          </strong>
          . The details of the hearing are as follows:
        </p>
        <div>
          <p>
            <strong>Date :</strong> {formData?.allocatedDate}
          </p>
          <p>
            <strong>Time :</strong> {formData?.time}
          </p>
          <p>
            <strong>Location :</strong> {formData?.location}
          </p>
        </div>
        <p>
          Please be present at the scheduled time. Failure to attend may result
          in a decision being made in your absence.
        </p>
        <p>
          If you have any questions regarding this notice or the hearing, please
          do not hesitate to contact the court at the above-mentioned contact
          information.
        </p>

        <div className="flex justify-end">
          <div className="flex flex-col">
            <p className="text-center">Mansah Musah</p>
            <p className="text-center">SENIOR REGISTRAR</p>
          </div>
        </div>
      </div>
    </div>
  );
});

export default HearingNotice;
