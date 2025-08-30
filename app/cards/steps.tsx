import { FaCheckCircle } from "react-icons/fa";
import {
    Card,
    CardContent,

} from "@/components/ui/card"

const steps = () => {
    return (
        <Card className="rounded-2xl shadow-sm border py-4">
            <CardContent>
                    <div className="bg-gray-100 p-4 rounded-md mb-4">
                        <p className="text-sm font-semibold">Steps Completed</p>
                        <ul className="space-y-2 mt-2">
                            <li className="flex items-start gap-3 justify-between">
                                <div className="flex gap-2">
                                    <span className="w-2 h-2 mt-2 bg-gray-300 rounded-full"></span>
                                    <span className="flex flex-wrap text-muted-foreground font-semibold">Profit Setup</span>
                                </div>
                                <span className="text-green-500"><FaCheckCircle className="text-green-600" /></span>

                            </li>
                            <li className="flex items-start gap-3 justify-between">
                                <div className="flex gap-2">
                                    <span className="w-2 h-2 mt-2 bg-gray-300 rounded-full"></span>
                                    <span className="flex flex-wrap text-muted-foreground font-semibold">Initial Training</span>
                                </div>
                                <span className="text-green-500"><FaCheckCircle className="text-green-600" /></span>
                            </li>
                            <li className="flex items-start gap-3 justify-between">
                                <div className="flex gap-2">
                                    <span className="w-2 h-2 mt-2 bg-gray-300 rounded-full"></span>
                                    <span className="flex flex-wrap text-muted-foreground font-semibold">Legal Documents</span>
                                </div>
                                <span className="text-green-500"><FaCheckCircle className="text-green-600" /></span>
                            </li>

                        </ul>

                    </div>
                    <div className="bg-gray-100 p-4 rounded-md mb-4">
                        <p className="text-sm font-semibold">Steps Completed</p>
                        <ul className="space-y-2 mt-2">
                            <li className="flex items-start gap-3 justify-between">
                                <div className="flex gap-2">
                                    <span className="w-2 h-2 mt-2 bg-gray-300 rounded-full"></span>
                                    <span className="flex flex-wrap text-muted-foreground font-semibold">Financial Integration</span>
                                </div>
                                <span className="text-green-500"><FaCheckCircle className="text-muted-foreground" /></span>

                            </li>
                            <li className="flex items-start gap-3 justify-between">
                                <div className="flex gap-2">
                                    <span className="w-2 h-2 mt-2 bg-gray-300 rounded-full"></span>
                                    <span className="flex flex-wrap text-muted-foreground font-semibold">Final Review</span>
                                </div>
                                <span className="text-green-500"><FaCheckCircle className="text-muted-foreground" /></span>
                            </li>
                            

                        </ul>

                    </div>
            </CardContent>
        </Card>
    )
}

export default steps
