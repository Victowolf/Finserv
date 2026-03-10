import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  LayoutDashboard, FileText, PlusCircle, Building2, Landmark, LogOut,
} from 'lucide-react';
import { NavLink } from '@/components/NavLink';
import {
  Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel,
  SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarFooter, useSidebar,
} from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';

const companyItems = [
  { title: 'Dashboard', url: '/company/dashboard', icon: LayoutDashboard },
  { title: 'New Application', url: '/company/apply', icon: PlusCircle },
  { title: 'My Applications', url: '/company/applications', icon: FileText },
];

const bankItems = [
  { title: 'Dashboard', url: '/bank/dashboard', icon: LayoutDashboard },
];

const AppSidebar: React.FC = () => {
  const { state } = useSidebar();
  const collapsed = state === 'collapsed';
  const location = useLocation();
  const navigate = useNavigate();
  const isBank = location.pathname.startsWith('/bank');
  const items = isBank ? bankItems : companyItems;

  return (
    <Sidebar collapsible="icon">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="px-3 py-4">
            <div className="flex items-center gap-2">
              {isBank ? <Landmark className="h-5 w-5 text-sidebar-primary" /> : <Building2 className="h-5 w-5 text-sidebar-primary" />}
              {!collapsed && (
                <span className="font-display font-bold text-sm text-sidebar-foreground">
                  {isBank ? 'Bank Portal' : 'Company Portal'}
                </span>
              )}
            </div>
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink to={item.url} className="hover:bg-sidebar-accent" activeClassName="bg-sidebar-accent text-sidebar-primary font-medium">
                      <item.icon className="mr-2 h-4 w-4" />
                      {!collapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="p-3">
        <Button
          variant="ghost"
          className="w-full justify-start text-sidebar-foreground hover:bg-sidebar-accent"
          onClick={() => navigate('/login')}
        >
          <LogOut className="mr-2 h-4 w-4" />
          {!collapsed && <span>Logout</span>}
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
