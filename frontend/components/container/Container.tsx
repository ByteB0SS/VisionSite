import React from "react"
import { Card } from "../ui/card"

interface ContainerInterface {
    children: React.ReactNode
}

export default function Container (props: ContainerInterface) {
    return (
            <div className=" w-full md:ml-11 sm:max-w-2xl pt-14! sm:pt-0! sm:pl-14">
                {
                    props.children
                }
            </div>
    )
}