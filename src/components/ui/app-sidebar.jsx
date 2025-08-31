import {
  BookOpen,
  Rocket,
  Home,
  Inbox,
  Calendar,
  Search,
  Settings,
} from "lucide-react";

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

// Sidebar menu data
const menuSections = [
  {
    label: "Documentation",
    items: [
      { title: "Overview", url: "/docs/overview", icon: BookOpen },
      { title: "Components", url: "/docs/components", icon: Settings },
      { title: "API Reference", url: "/docs/api", icon: Search },
    ],
  },
  {
    label: "Get Started",
    items: [
      { title: "Quick Start", url: "/get-started/quick", icon: Rocket },
      { title: "Installation", url: "/get-started/install", icon: Home },
      { title: "Examples", url: "/get-started/examples", icon: Calendar },
    ],
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        {menuSections.map((section) => (
          <SidebarGroup key={section.label}>
            <SidebarGroupLabel>{section.label}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {section.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <a href={item.url}>
                        <item.icon className="w-4 h-4" />
                        <span>{item.title}</span>
                      </a>
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
