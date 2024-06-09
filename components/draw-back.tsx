'use client';

import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React from 'react';

import { Button } from '@/components/ui/button';

const DrawBack = () => {
  const router = useRouter();

  return (
    <>
      <div className={'sm:block hidden'}>
        <div
          className={
            'sm:absolute -left-40 top-0 flex justify-center items-center'
          }
        >
          <Button
            variant={'ghost'}
            onClick={() => {
              router.back();
            }}
          >
            <ArrowLeft size={20} />
            <span className={'ml-2'}>Go Back</span>
          </Button>
        </div>
      </div>
      <div
        className={'md:hidden block mb-8'}
        onClick={() => {
          router.back();
        }}
      >
        <div className={'flex items-center'}>
          <ArrowLeft size={16} />
          <span className={'ml-2'}>Go Back</span>
        </div>
      </div>
    </>
  );
};

export default DrawBack;
