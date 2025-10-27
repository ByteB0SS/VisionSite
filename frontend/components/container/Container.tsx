import React from "react"
import { Card } from "../ui/card"

interface ContainerInterface {
    children: React.ReactNode
}

export default function Container (props: ContainerInterface) {
    return (
        <div className="mt-12 p-4   sm:ml-11 sm:mt-0  sm:flex  md:gap-8 md:grid-cols-2 md:grid md:m-auto">
            <div className="sm:max-w-full  md:ml-11">
                {
                    props.children
                }
            </div>

            <div className="relative">
                <Card className="min-h-[94.5vh] max-h-[94.5vh] hidden md:flex bg-primary justify-center items-center sticky dark:bg-primary-foreground">
                    <Card className="w-3xs bg-transparent border-2 p-3.5 gap-0">
                        <div className="flex items-center gap-2.5">
                            <div className="border-2 w-[2.5rem] h-[2.5rem] flex justify-center items-center rounded bg-transparent text-white ">
                                V
                            </div>
                            <span className="font-bold  text-white text-2xl">VisionSite</span>
                        </div>
                        <span className="mt-1 text-gray-400">Sua visão, nosso código.</span>
                    </Card>
                </Card>
            </div>
        </div>
    )
}