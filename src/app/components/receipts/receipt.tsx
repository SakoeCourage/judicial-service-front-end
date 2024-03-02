"use client";
import React, { useEffect } from "react";
import QrCode from "qrcode";
import Image from "next/image";

import Ghana from "app/app/assets/images/nationalflags/ghana.png";
import JudicialLogo from "app/app/assets/images/court.gif";
import format from "date-fns/format";

interface IProp {
  data?: any;
}
const Receipt: React.FC<IProp> = React.forwardRef((props, ref) => {
  useEffect(() => {
    const generateQRCode = async () => {
      const Qrimage = document.querySelector("img#img-qr");
      const data = Qrimage.dataset.qrdata;
      const matrix = await QrCode.toDataURL(data);
      Qrimage.src = matrix;
    };

    generateQRCode();
  }, []);

  return (
    <div className="browncard-entry" ref={ref}>
      <section className="u-container b-card-section-content">
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-2">
            <Image className="w-24" src={Ghana} alt="" />
            <Image className="w-24" src={JudicialLogo} alt="" />
          </div>

          <div className=" u-flex u-flex-column u-gap-2xs u-font-extra-bold u-text-xl u-line-height-xl browncard-text-variants">
            <p className="u-text-center text-[#CC9159] ">
              Judicial Service of Ghana
            </p>
            <p className="u-text-center text-xl">Adenta District Court</p>
            <p className="text-center text-base">PMB 100, Adenta - Accra</p>
            <p className="u-text-center uppercase text-xl">official receipt</p>
          </div>

          <nav className=" u-flex u-flex-column u-relative">
            <Image
              id="img-qr"
              data-qrdata="Sticker/No: STSLICO62473912834"
              src=""
              alt="qr-code"
            />

            <svg
              className=" mobile-frame"
              width="100"
              height="103"
              viewBox="0 0 100 103"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            ></svg>
          </nav>
        </div>
        <div className="flex justify-end">
          <div className="flex flex-col">
            <p className="flex gap-2  font-medium">
              <strong className="italic">Receipt No:</strong>
              <span>0167987</span>
            </p>
            <p className="flex gap-2  font-medium ">
              <strong className="italic">Suit No:</strong>
              <span>A001/023/2024</span>
            </p>
          </div>
        </div>

        <div className="  notice-section">
          <nav className="qs-fields">
            <div className="flex items-center gap-4">
              <p className="qs-French italic">Received From:</p>
              <p className="">Mary Arthur</p>
            </div>
            <div className="flex items-center gap-4 pt-3">
              <p className="qs-English italic ">The sum of:</p>
              <p className="">One Hundred Ghana Cedis and Zero Pesewas.</p>
            </div>
            <div className="pt-3">
              <p className="qs-Portuguese italic">being:</p>
              <p className="qs-answer uppercase pt-2">
                The estate of Mary Serwaa Adjei (Deceased) and L.A by Adjei
                Derrick Okyere
              </p>
            </div>
            <div className="flex items-center gap-4 pt-3">
              <p className="qs-English italic ">Payment Mode:</p>
              <p className="">Cash</p>
            </div>
            <div className="flex items-center gap-4 pt-2">
              <p className="qs-English italic ">Payment Mode No:</p>
              <p className="">None</p>
            </div>
            <div className="flex items-center gap-4 pt-3">
              <p className="qs-English italic ">Amount:</p>
              <p className="text-black">GH₵ 100.00</p>
            </div>
            <div className="flex items-center gap-4 pt-3">
              <p className="qs-English italic ">Payment Date:</p>
              <p className="text-black">{format(new Date(), "dd MMM yyy")}</p>
            </div>
          </nav>
        </div>
      </section>
      <section className="flex justify-end">
        <div className="uppercase font-semibold text-center">
          <p>Kofi Asare Marfo</p>
          <div>
            {/* <p>Accounts Receivable</p> */}
            <p>(Filing Clerk)</p>
          </div>
        </div>
      </section>
    </div>
  );
});
export default Receipt;
