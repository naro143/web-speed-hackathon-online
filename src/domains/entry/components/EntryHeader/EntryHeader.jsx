import React from 'react';
import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import relativeTime from 'dayjs/plugin/relativeTime';
import { Link } from 'react-router-dom';

dayjs.extend(timezone);
dayjs.extend(relativeTime);
dayjs.tz.setDefault('Asia/Tokyo');

export function EntryHeader({ title, publishedAt, location }) {
  return (
    <div className="entry-EntryHeader">
      <h2 className="entry-EntryHeader__title">
        <Link to={location.pathname} className="entry-EntryHeader__title-link">
          {title}
        </Link>
      </h2>
      <time
        className="entry-EntryHeader__published-at"
        dateTime={dayjs(publishedAt).toISOString(true)}
        title={dayjs(publishedAt).toISOString(true)}
      >
        {dayjs(publishedAt).format('YYYY-MM-DD')}
      </time>
    </div>
  );
}
