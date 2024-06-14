'use client';

import { useState } from 'react';

import Giscus from '@/lib/plugins/comments/giscus';
import Utterances from '@/lib/plugins/comments/utterances';

import { Button } from '@/components/ui/button';

import { siteData } from '@/site.config';

const Comments = () => {
  const { comment } = siteData;
  const [show, setShow] = useState(false);

  if (!comment?.enabled) return null;

  const engine = comment?.engine;

  return (
    <>
      {!show && (
        <Button
          className="w-full"
          variant="outline"
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
