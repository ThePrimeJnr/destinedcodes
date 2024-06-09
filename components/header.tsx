'use client';

import { Menu, Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

import siteData from '@/site.config';

const Header = () => {
  const {
    header: { logo, title, routes },
  } = siteData;

  const pathname = usePathname();
  const active = routes.find(
    (item: any) => item.value == '/' + pathname.split('/')[1],
  )?.name;

  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <header className="container flex justify-between items-center py-4">
      <div className="md:hidden flex items-center justify-between w-full">
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
          <SheetContent side={'top'} className="w-full space-y-4 p-12 text-sm">
            {routes.map((route: any, index: number) => (
              <div className="space-y-4" key={route.value}>
                <Link
                  href={route.value}
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  <Button
                    variant={active == route.name ? 'secondary' : 'ghost'}
                    className="text-base w-full"
                  >
                    {route.name}
                  </Button>
                </Link>
                {index != routes.length - 1 && <Separator />}
              </div>
            ))}
          </SheetContent>
        </Sheet>
        <Link className="flex justify-center items-center mr-4" href="/">
          <div className="border-2 border-gray-300 p-0.5 rounded-full">
            <Image src={logo} height={32} width={32} alt="logo" />
          </div>
        </Link>
        <Button
          size={'icon'}
          variant={'ghost'}
          onClick={() => {
            setTheme(theme == 'light' ? 'dark' : 'light');
          }}
        >
          <Sun className="h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        </Button>
      </div>
      <div className="hidden md:flex justify-between items-center w-full">
        <Link className="flex justify-center items-center mr-4" href="/">
          <div className="border-2 border-gray-300 p-0.5 rounded-full">
            <Image src={logo} height={32} width={32} alt="logo" />
          </div>
          <div className="ml-2 text-2xl font-semibold">{title}</div>
        </Link>
        <div className="flex items-center space-x-1">
          {routes.map((route: any) => (
            <Link href={route?.value} key={route?.value}>
              <Button
                variant={active == route.name ? 'secondary' : 'ghost'}
                className="text-base"
              >
                {route.name}
              </Button>
            </Link>
          ))}
          <Button
            size={'icon'}
            variant={'ghost'}
            onClick={() => {
              setTheme(theme == 'light' ? 'dark' : 'light');
            }}
          >
            <Sun className="h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
