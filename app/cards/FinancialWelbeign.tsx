import { FaArrowTrendUp } from "react-icons/fa6";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge";

const FinancialWellbeing = () => {
    return (
        <Card className="rounded-2xl shadow-sm border p-4">
            <CardHeader>
                <CardTitle>Financial Wellbeing</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex flex-col gap-3">
                    <p className="text-[30px] font-bold mb-2">20</p>
                    <p className="text-sm text-muted-foreground flex justify-between">Total Franchisees <Badge variant="secondary" className="text-[#0A9952] border border-[#0A9952]">
                <FaArrowTrendUp className="text-[#0A9952]" /> 2.1%
              </Badge></p>
                </div>

                <hr className="my-4 border-gray-300" />
                <div className="mt-3 flex justify-between md:justify-around text-sm">
                    <div className="bg-gray-100 p-6 rounded-lg text-center flex flex-col gap-1">
                        <p className="font-medium text-muted-foreground">Target</p>
                        <p className="font-bold text-xl">$500,000</p>
                    </div>
                    <div className="bg-gray-100 p-6 rounded-lg text-center flex flex-col gap-1">
                        <p className="font-medium text-muted-foreground">Current</p>
                        <p className="font-bold text-xl">$450,000</p>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default FinancialWellbeing

