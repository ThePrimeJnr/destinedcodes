'use client';

import Giscus from '@/plugins/comments/giscus';
import Utterances from '@/plugins/comments/utterances';
import { useState } from 'react';

import { Button } from '@/components/ui/button';

import siteData from '@/site.config';

const Comments = () => {
  const { comment } = siteData;
  if (!comment?.enabled) return null;
  const engine = comment?.engine;
  const [show, setShow] = useState(false);

  return (
    <>
      {!show && (
        <Button
          className={'w-full'}
          variant={'outline'}
          onClick={() => setShow(true)}
        >
          Show Comments
        </Button>
      )}
      {show && (
        <>
          {engine === 'giscus' && (
            <Giscus id="comments" config={comment[engine]} />
          )}
          {engine === 'utterances' && <Utterances config={comment[engine]} />}
        </>
      )}
    </>
  );
};

export default Comments;
