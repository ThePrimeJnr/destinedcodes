'use client';

import Cmdk from '@/lib/plugins/search/Cmdk';
import { Command, Search as SearchIcon } from 'lucide-react';
import { useEffect, useState } from 'react';

import { Button } from '@/components/ui/button';

import siteData from '@/site.config';

const Search = () => {
  const { search } = siteData;
  const [open, setOpen] = useState(false); // Always call useState at the top of the component
  const engines = search?.engine;

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((prevOpen) => !prevOpen);
      }
    };
    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []); // Ensure useEffect is called unconditionally with an empty dependency array

  if (!search?.enabled) return null; // Move conditional return to the top if needed

  return (
    <>
      <div className="hidden md:block">
        <Button
          className="w-48 justify-between mr-2"
          size="sm"
          variant="outline"
          onClick={() => {
            setOpen(true);
          }}
        >
          Search Blog...
          <div className="p-1 flex justify-center items-center">
            <Command size={16} />
            <span className="text-base">K</span>
          </div>
        </Button>
      </div>
      <div className="block md:hidden">
        <Button
          size="icon"
          variant="ghost"
          onClick={() => {
            setOpen(true);
          }}
        >
          <SearchIcon size={20} />
        </Button>
      </div>
      {open && engines === 'cmdk' && <Cmdk open={open} setOpen={setOpen} />}
    </>
  );
};

export default Search;
