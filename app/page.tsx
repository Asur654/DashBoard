import Image from "next/image";
import Chart from "./cards/chat";
import FinancialWellbeing from "./cards/FinancialWelbeign";
import KeyinsightNFeedback from "./cards/keyinsight";
import ProspectLeads from "./cards/prospectLeads";
import TotalFran from "./cards/totalFran";
import Table from "./table/table";
import { CiSettings } from "react-icons/ci";


export default function Home() {
  return (
    <div className="md:m-4 md:p-2">
      <div className="flex justify-end items-center gap-4 mb-4 border rounded-md p-4 -mt-3">
        <CiSettings />
        <Image src="/profile.png" alt="Profile" width={30} height={30} priority className="rounded-full" />
      </div>
      <div className="flex">
        <div className="px-1 md:px-6 grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="row-span-2">
              <Chart />
            </div>
            <TotalFran />
            <KeyinsightNFeedback />
            <FinancialWellbeing />
            <ProspectLeads />
        </div>
      </div>
      
      <div className="p-6">
        <Table />
      </div>
        </div>
  );
}
