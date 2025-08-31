import Image from "next/image"


import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

const prospectLeads = () => {
    return (
        <Card className="rounded-2xl shadow-sm border transition-transform duration-200 hover:scale-105">
            <CardHeader>
                <CardTitle className="text-2xl">Prospect Leads</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
                <div className="flex flex-col gap-2 md:flex-row justify-between items-center bg-gray-100 p-3 rounded-lg">
                    <div className="flex items-center gap-3">
                        <Image src="/lead1.png" alt="Top Perf" width={40} height={40} priority className="rounded-full" />
                        <p className="font-semibold text-black">Wade Warren</p>
                    </div>
                    <p className="text-black"><span className="text-muted-foreground">Stage: </span>Initial Inquiry</p>

                </div>
                <div className="flex flex-col gap-2 md:flex-row justify-between items-center bg-gray-100 p-3 rounded-lg">
                    <div className="flex items-center gap-3">
                        <Image src="/lead2.png" alt="Top Perf" width={40} height={40} priority className="rounded-full" />
                        <p className="font-semibold text-black">Ava Wright</p>
                    </div>
                    <p className="text-black"><span className="text-muted-foreground">Stage: </span>Initial Inquiry</p>

                </div>
                <div className="flex flex-col gap-2 md:flex-row justify-between items-center bg-gray-100 p-3 rounded-lg">
                    <div className="flex items-center gap-3">
                        <Image src="/lead3.png" alt="Top Perf" width={40} height={40} priority className="rounded-full" />
                        <p className="font-semibold text-black">Cody Fisher</p>
                    </div>
                    <p className="text-black"><span className="text-muted-foreground">Stage: </span>Initial Inquiry</p>

                </div>
            </CardContent>
        </Card>
    )
}

export default prospectLeads
