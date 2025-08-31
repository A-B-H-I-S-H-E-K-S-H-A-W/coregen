import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/ui/app-sidebar";

export default function DocumentationLayout({ children }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="relative top-16">
        {/* <SidebarTrigger /> */}
        {children}
      </main>
    </SidebarProvider>
  );
}
