import React from 'react';
import { withMenuComponentBlock } from './withMenuComponentBlock';

export const StartBlock = withMenuComponentBlock({
  id: 'about',
  Component: () => <>
    <div className='columns'>
      <div className='column is-3  is-size-2-desktop is-size-4-touch'>
        <div className='brand-name has-text-left brand-name-900'>We Are Legion</div>
        <div className='brand-name has-text-centered brand-name-600'>Blackrock</div>
      </div>
    </div>
    <div className='columns'>
      <div className='column is-3 is-size-2-desktop is-size-4-touch'>
          <div className='brand-name has-text-left  brand-name-900'>Gestalte</div>
          <div className='brand-name has-text-left brand-name-600'> unsere progressorienterte und geile Gemeinschaft mit</div>
      </div>
    </div>
 
  </>,
});