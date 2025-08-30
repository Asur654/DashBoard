import Image from "next/image"

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const KeyinsightNFeedback = () => {
    return (
        <Card className="rounded-2xl shadow-sm border p-4">
            <CardHeader>
                <CardTitle>Key Insight & Feedback</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex justify-between items-center">
                    <div className="gap-2 flex flex-col">
                        <p className="text-[30px] font-bold">10%</p>
                        <p className="text-muted-foreground">Sales Growth</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <Image src="/best.png" alt="Top Perf" width={40} height={40} priority className="rounded-b-full mb-1" />
                        <Badge variant="secondary" className="bg-sky-100 text-sky-500 rounded-xl">Top Performer
                                      </Badge>
                    </div>
                </div>

                <hr className="my-4 border-gray-300" />
                <div className="bg-gray-100 p-4 rounded-md">
                    <p className="text-xl font-semibold text-muted-foreground">Feedback</p>
                    <ul>
                        <li className="flex items-start gap-2">
                            <span className="w-2 h-2 mt-2 bg-gray-300 rounded-full"></span>
                            <span className="flex flex-wrap text-muted-foreground">Franchisees are requesting more detailed training materials</span>
                        </li>

                    </ul>
                </div>

            </CardContent>
        </Card>
    )
}

export default KeyinsightNFeedback;
