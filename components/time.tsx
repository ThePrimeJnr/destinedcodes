'use client';

import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import localizedFormat from 'dayjs/plugin/localizedFormat';

dayjs.extend(localizedFormat);

const Time = ({ date }: any) => {
  return (
    <time className={'text-base text-zinc-400'}>
      {dayjs(date).format('MMMM D, YYYY')}
    </time>
  );
};

export default Time;
