'use client';

import { Menu, Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

import Logo from '@/components/logo';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

import siteData from '@/site.config';

const Header = () => {
  const {
    header: { routes },
  } = siteData;

  const pathname = usePathname();
  const active = routes.find(
    (item: any) => item.value == '/' + pathname.split('/')[1],
  )?.name;

  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);

  const ThemeToggleButton = () => (
    <Button
      size={'icon'}
      variant={'ghost'}
      onClick={() => {
        setTheme(theme == 'light' ? 'dark' : 'light');
      }}
    >
      <Sun className="w-6 h-6 transition-all rotate-0 scale-100 dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute w-6 h-6 transition-all rotate-90 scale-0 dark:rotate-0 dark:scale-100" />
    </Button>
  );

  const RouteLinks = () => (
    <>
      {routes.map((route: any, index: number) => (
        <div className="space-y-2" key={route.value}>
          <Link
            href={route.value}
            onClick={() => {
              setOpen(false);
            }}
          >
            <Button
              variant={active == route.name ? 'default' : 'ghost'}
              className="w-full"
            >
              <route.logo className="mr-2 w-5 h-5" />
              {route.name}
            </Button>
          </Link>
          {index != routes.length - 1 && <Separator className="md:hidden" />}
        </div>
      ))}
    </>
  );

  return (
    <>
      <header className="flex justify-between items-center p-4 md:p-6 container">
        <div className="flex justify-between items-center md:hidden w-full">
          <Sheet
            open={open}
            onOpenChange={() => {
              setOpen(!open);
            }}
          >
            <SheetTrigger asChild>
              <Button size={'icon'} variant={'ghost'}>
                <Menu size={32} />
              </Button>
            </SheetTrigger>
            <SheetContent side={'top'} className="space-y-2 px-12">
              <RouteLinks />
            </SheetContent>
          </Sheet>
          <Logo />
          <ThemeToggleButton />
        </div>
        <div className="md:flex justify-between items-center hidden w-full">
          <Logo title={'DestinedCodes'} />
          <div className="flex items-center space-x-1">
            <RouteLinks />
            <ThemeToggleButton />
          </div>
        </div>
      </header>
      <Separator />
    </>
  );
};

export default Header;
