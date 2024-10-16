import {
    Breadcrumb as BreadcrumbComponent,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb"
import { useLocation } from "react-router-dom"
  

const Breadcrumb = () => {
    const { pathname } = useLocation();

    const path = pathname.split("/").map((path) => {
        return path.split("-").join(" ")  
    })
    path.shift()

    return (
        <BreadcrumbComponent>
        {/* FIX THIS */}
            <BreadcrumbList>
                <BreadcrumbItem className="text-neutral-100 font-semibold">
                    <BreadcrumbLink href="/">HOME</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="text-neutral-100" />
                {
                    path.length > 0 && path.map((link) => {
                        return (
                            <BreadcrumbItem className="text-white font-semibold" key={link}>
                                <BreadcrumbLink href={link}>{link.toUpperCase()}</BreadcrumbLink>
                            </BreadcrumbItem>
                        )
                    })
                }
            </BreadcrumbList>
        </BreadcrumbComponent>
    )
}


export default Breadcrumb