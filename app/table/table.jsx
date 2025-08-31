import { FaFilePdf } from "react-icons/fa6";
import { Input } from "@/components/ui/input";
import { IoFilterSharp } from "react-icons/io5";
import { Checkbox } from "@/components/ui/checkbox";
import { RiArrowDropDownLine } from "react-icons/ri";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";

const table = () => {
  return (
    <div className="w-screen md:w-full shadow-sm rounded-2xl border-2 flex flex-col gap-2 p-4 overflow-scroll">
      <div>
        <p className="font-semibold text-2xl">My Uploads</p>
        <p className="text-sm text-muted-foreground">
          Documents that are uploaded by you.
        </p>
      </div>

      {/* search and filter */}

      <div className="flex justify-between">
        <Input
          className="w-2xs border-2 shadow-xs"
          placeholder={"Search here.."}
        />
        <Badge variant="secondary" className="border-2 shadow-xs">
          <IoFilterSharp />
          Filter
        </Badge>
      </div>

      <div className="">
        <Table className="w-full">
          <TableHeader className="bg-gray-100 border">
            <TableRow className="">
              <TableHead className="text-muted-foreground md:table-cell">
                Document Name
              </TableHead>
              <TableHead className="text-muted-foreground md:table-cell">
                Document Type
              </TableHead>
              <TableHead className="text-muted-foreground md:table-cell">
                AI App Inclusion
              </TableHead>
              <TableHead className="text-muted-foreground md:table-cell">
                Dashboard Inclusion
              </TableHead>
              <TableHead className="text-muted-foreground md:table-cell">
                Stage Access
              </TableHead>
              <TableHead className="text-muted-foreground md:table-cell"></TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {/* Row 1 */}
            <TableRow>
              <TableCell className="font-semibold flex items-center gap-1">
                <Checkbox />
                <FaFilePdf className="text-2xl" />
                <div>
                  <p>Tech requirements.pdf</p>
                  <p className="text-[9px] text-muted-foreground">200kb</p>
                </div>
              </TableCell>

              <TableCell>
                <Badge
                  variant="secondary"
                  className="bg-sky-100 text-sky-500 rounded-xl border border-sky-500"
                >
                  Legal
                </Badge>
              </TableCell>

              <TableCell>
                <Switch
                  className="data-[state=checked]:bg-sky-500"
                  defaultChecked
                />
              </TableCell>

              <TableCell>
                <Switch
                  className="data-[state=checked]:bg-sky-500"
                  defaultChecked
                />
              </TableCell>

              <TableCell className="flex items-center border rounded-md">
                Full
                <RiArrowDropDownLine className="text-xl" />
              </TableCell>

              <TableCell className="text-right space-x-2">
                <Button variant="outline" size="sm" className="text-sky-500">
                  Edit
                </Button>
                <Button variant="outline" size="sm">
                  Delete
                </Button>
              </TableCell>
            </TableRow>

            {/* 2nd Row */}

            <TableRow>
              <TableCell className="font-semibold flex items-center gap-1">
                <Checkbox />
                <FaFilePdf className="text-2xl" />
                <div>
                  <p>DashBoard screenshot.jpg</p>
                  <p className="text-[9px] text-muted-foreground">720kb</p>
                </div>
              </TableCell>

              <TableCell>
                <Badge
                  variant="secondary"
                  className="bg-green-100 text-green-500 rounded-xl border border-green-500"
                >
                  Vendor & Assets
                </Badge>
              </TableCell>

              <TableCell>
                <Switch
                  className="data-[state=checked]:bg-sky-500"
                  defaultChecked
                />
              </TableCell>

              <TableCell>
                <Switch
                  className="data-[state=checked]:bg-sky-500"
                  defaultChecked
                />
              </TableCell>

              <TableCell className="flex items-center border rounded-md">
                Onboarding
                <RiArrowDropDownLine className="text-xl" />
              </TableCell>

              <TableCell className="text-right space-x-2">
                <Button variant="outline" size="sm" className="text-sky-500">
                  Edit
                </Button>
                <Button variant="outline" size="sm">
                  Delete
                </Button>
              </TableCell>
            </TableRow>

            {/* 3rd Row */}

            <TableRow>
              <TableCell className="font-semibold flex items-center gap-1">
                <Checkbox />
                <FaFilePdf className="text-2xl" />
                <div>
                  <p>Dashboard prototype recording.mp4</p>
                  <p className="text-[9px] text-muted-foreground">200kb</p>
                </div>
              </TableCell>

              <TableCell>
                <Badge
                  variant="secondary"
                  className="bg-orange-100 text-orange-500 rounded-xl border border-orange-500"
                >
                  Technology
                </Badge>
              </TableCell>

              <TableCell>
                <Switch />
              </TableCell>

              <TableCell>
                <Switch
                  className="data-[state=checked]:bg-sky-500"
                  defaultChecked
                />
              </TableCell>

              <TableCell className="flex items-center">
                Franchisee
                <RiArrowDropDownLine className="text-xl" />
              </TableCell>

              <TableCell className="text-right space-x-2">
                <Button variant="outline" size="sm" className="text-sky-500">
                  Edit
                </Button>
                <Button variant="outline" size="sm">
                  Delete
                </Button>
              </TableCell>
            </TableRow>

            {/* 4th Row */}

            <TableRow>
              <TableCell className="font-semibold flex items-center gap-1">
                <Checkbox />
                <FaFilePdf className="text-2xl" />
                <div>
                  <p>Financial Overview</p>
                  <p className="text-[9px] text-muted-foreground">4.2MB</p>
                </div>
              </TableCell>

              <TableCell>
                <Badge
                  variant="secondary"
                  className="bg-pink-100 text-pink-500 rounded-xl border border-pink-500"
                >
                  Financial
                </Badge>
              </TableCell>

              <TableCell>
                <Switch
                  className="data-[state=checked]:bg-sky-500"
                  defaultChecked
                />
              </TableCell>

              <TableCell>
                <Switch
                  className="data-[state=checked]:bg-sky-500"
                  defaultChecked
                />
              </TableCell>

              <TableCell className="flex items-center">
                Prospect
                <RiArrowDropDownLine className="text-xl" />
              </TableCell>

              <TableCell className="text-right space-x-2">
                <Button variant="outline" size="sm" className="text-sky-500">
                  Edit
                </Button>
                <Button variant="outline" size="sm">
                  Delete
                </Button>
              </TableCell>
            </TableRow>

            {/* 5th Row */}

            <TableRow>
              <TableCell className="font-semibold flex items-center gap-1">
                <Checkbox />
                <FaFilePdf className="text-2xl" />
                <div>
                  <p>UX Design Guidelines.docx</p>
                  <p className="text-[9px] text-muted-foreground">400kb</p>
                </div>
              </TableCell>

              <TableCell>
                <Badge
                  variant="secondary"
                  className="bg-sky-100 text-sky-500 rounded-xl border border-sky-500"
                >
                  Legal
                </Badge>
              </TableCell>

              <TableCell>
                <Switch
                  className="data-[state=checked]:bg-sky-500"
                  defaultChecked
                />
              </TableCell>

              <TableCell>
                <Switch />
              </TableCell>

              <TableCell className="flex items-center">
                Onboarding
                <RiArrowDropDownLine className="text-xl" />
              </TableCell>

              <TableCell className="text-right space-x-2">
                <Button variant="outline" size="sm" className="text-sky-500">
                  Edit
                </Button>
                <Button variant="outline" size="sm">
                  Delete
                </Button>
              </TableCell>
            </TableRow>

            {/* 6th Row */}

            <TableRow>
              <TableCell className="font-semibold flex items-center gap-1">
                <Checkbox />
                <FaFilePdf className="text-2xl" />
                <div>
                  <p>Dashboard interaction.aep</p>
                  <p className="text-[9px] text-muted-foreground">12MB</p>
                </div>
              </TableCell>

              <TableCell>
                <Badge
                  variant="secondary"
                  className="bg-sky-100 text-sky-500 rounded-xl border border-sky-500"
                >
                  Legal
                </Badge>
              </TableCell>

              <TableCell>
                <Switch
                  className="data-[state=checked]:bg-sky-500"
                  defaultChecked
                />
              </TableCell>

              <TableCell>
                <Switch
                  className="data-[state=checked]:bg-sky-500"
                  defaultChecked
                />
              </TableCell>

              <TableCell className="flex items-center">
                Onboarding
                <RiArrowDropDownLine className="text-xl" />
              </TableCell>

              <TableCell className="text-right space-x-2">
                <Button variant="outline" size="sm" className="text-sky-500">
                  Edit
                </Button>
                <Button variant="outline" size="sm">
                  Delete
                </Button>
              </TableCell>
            </TableRow>

            {/* 7th Row */}

            <TableRow>
              <TableCell className="font-semibold flex items-center gap-1">
                <Checkbox />
                <FaFilePdf className="text-2xl" />
                <div>
                  <p>Briefing call recording.mp3</p>
                  <p className="text-[9px] text-muted-foreground">200kb</p>
                </div>
              </TableCell>

              <TableCell>
                <Badge
                  variant="secondary"
                  className="bg-sky-100 text-sky-500 rounded-xl border border-sky-500"
                >
                  Financial
                </Badge>
              </TableCell>

              <TableCell>
                <Switch />
              </TableCell>

              <TableCell>
                <Switch />
              </TableCell>

              <TableCell className="flex items-center">
                Prospect
                <RiArrowDropDownLine className="text-xl" />
              </TableCell>

              <TableCell className="text-right space-x-2">
                <Button variant="outline" size="sm" className="text-sky-500">
                  Edit
                </Button>
                <Button variant="outline" size="sm">
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default table;
