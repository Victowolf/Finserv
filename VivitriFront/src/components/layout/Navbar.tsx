import React from 'react';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { useLocation } from 'react-router-dom';
import { Bell, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar: React.FC = () => {
  const location = useLocation();
  const isBank = location.pathname.startsWith('/bank');

  return (
    <header className="flex h-14 items-center justify-between border-b bg-card px-4">
      <div className="flex items-center gap-3">
        <SidebarTrigger />
        <h1 className="font-display text-lg font-bold text-foreground">
          LoanFlow<span className="text-primary">Pro</span>
        </h1>
      </div>
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-4 w-4" />
          <span className="absolute -top-0.5 -right-0.5 h-2 w-2 rounded-full bg-destructive" />
        </Button>
        <div className="flex items-center gap-2 rounded-full bg-secondary px-3 py-1.5">
          <User className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm font-medium">{isBank ? 'Bank Officer' : 'Company User'}</span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
