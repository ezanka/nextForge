
import { SidebarProvider, SidebarTrigger } from "@/src/components/ui/shadcn/sidebar"
import SidebarComponent from "@/src/components/layout/global/sidebar";

export default function DocsPage() {
    return (
        <SidebarProvider>
            <SidebarComponent />
            <div className="md:hidden mt-2 ml-2">
                <SidebarTrigger />
            </div>
            <div className="w-full flex flex-col items-center py-2 ">
                <h1 className="text-3xl font-bold">Welcome to the Docs!</h1>
                <p className="mt-4">Get started by editing <code>app/docs/page.tsx</code></p>
            </div>
        </SidebarProvider>
    );
}