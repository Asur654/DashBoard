import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FaArrowTrendUp } from "react-icons/fa6";
import { Badge } from "@/components/ui/badge";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const totalFran = () => {
  return (
    <Card className="rounded-2xl shadow-sm border flex flex-col transition-transform duration-200 hover:scale-105">
      <CardHeader>
        <CardTitle>Total Franchisees Onboard</CardTitle>  
      </CardHeader>
      <CardContent className="flex flex-col gap-8">
        <div className="flex justify-between">
          <div className="flex gap-4">
            <p className="text-[30px] font-bold flex">14</p>

            <Badge
              variant="secondary"
              className="text-[#0A9952] border border-[#0A9952]"
            >
              <FaArrowTrendUp className="text-[#0A9952]" /> 2.1%
            </Badge>
          </div>

          {/* Avatars */}

          <div className="flex-wrap *:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2 ">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarImage src="https://github.com/leerob.png" alt="@leerob" />
              <AvatarFallback>LR</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarImage src="/avatar1.svg" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarImage src="avatar2.jpeg" alt="@leerob" />
              <AvatarFallback>LR</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarImage
                src="https://github.com/evilrabbit.png"
                alt="@evilrabbit"
              />
              <AvatarFallback>ER</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarImage src="" alt="@evilrabbit" />
              <AvatarFallback>+7</AvatarFallback>
            </Avatar>
          </div>
        </div>

        {/* Progress Bar */}

        <div className="flex gap-2">
          <span className="bg-sky-700 w-[35%] rounded-md h-3"></span>
          <span className="bg-sky-600 w-[14%] rounded-md h-3"></span>
          <span className="bg-sky-500 w-[50%] rounded-md h-3"></span>
        </div>

        {/* Stages */}

        <div>
          <ul className="flex flex-col gap-4">
            <li className="flex items-start gap-3 justify-between">
              <div className="flex gap-2">
                <span className="w-2 h-2 mt-2 bg-sky-700 rounded-full"></span>
                <span className="flex flex-wrap text-muted-foreground font-semibold">
                  Stage 1 (Initial Inquiry)
                </span>
              </div>
              <span className="font-semibold">02</span>
            </li>
            <li className="flex items-start gap-3 justify-between">
              <div className="flex gap-2">
                <span className="w-2 h-2 mt-2 bg-sky-600 rounded-full"></span>
                <span className="flex flex-wrap text-muted-foreground font-semibold">
                  Stage 2 (Document Submission)
                </span>
              </div>
              <span className="font-semibold">07</span>
            </li>
            <li className="flex items-start gap-3 justify-between">
              <div className="flex gap-2">
                <span className="w-2 h-2 mt-2 bg-sky-500 rounded-full"></span>
                <span className="flex flex-wrap text-muted-foreground font-semibold">
                  Stage 3 (Training)
                </span>
              </div>
              <span className="font-semibold">05</span>
            </li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default totalFran;
