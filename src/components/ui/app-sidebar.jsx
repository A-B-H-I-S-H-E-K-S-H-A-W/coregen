import { BookOpen } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";
import docs from "@/data";

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        {docs.map((section) => (
          <SidebarGroup key={section.category}>
            <SidebarGroupLabel>{section.category}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {section.items.map((doc) => (
                  <SidebarMenuItem key={doc.slug}>
                    <SidebarMenuButton asChild>
                      <Link href={`/documentation/${doc.slug}`}>
                        <BookOpen className="w-4 h-4" />
                        <span>{doc.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
    </Sidebar>
  );
}
