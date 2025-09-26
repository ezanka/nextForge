
import { SidebarProvider, SidebarTrigger } from "@/src/components/ui/shadcn/sidebar"
import SidebarComponent from "@/src/components/layout/global/sidebar";
import NextPageComponents from "@/src/components/ui/docs/global/nav-button";

export default function DocsLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <SidebarProvider>
            <SidebarComponent />
            <div className="flex-1">
                <div className="md:hidden mt-2 ml-2">
                    <SidebarTrigger />
                </div>
            </div>
            <div className="w-full flex flex-col py-12 flex-4 max-w-256 ">
                {children}
                <NextPageComponents showPrevious={true} />
            </div>
            <div className="flex-1">

            </div>
        </SidebarProvider>
    )
}