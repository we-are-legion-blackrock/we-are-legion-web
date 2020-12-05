import React from 'react';
import { withMenuComponentBlock } from './withMenuComponentBlock';

export const HoursBlock = withMenuComponentBlock({
  id: 'hours',
  Component: () => <div className='hours-column'>
     <div className='has-text-left-desktop has-text-centered-mobile is-size-3-desktop is-size-5-touch'>
      <span className='brand-black-underline'>Raidzeiten</span> sind Montags und Donnerstag von 19:45 bis 23:00
    </div>
  </div>,
});
