import React from 'react';
import { withMenuComponentBlock } from './withMenuComponentBlock';

export const InfoBlock = withMenuComponentBlock({
  id: 'info',
  Component: () => <div className='info-column'>
     <div className='has-text-left-desktop has-text-centered-mobile is-size-5-desktop is-size-5-touch'>
     „We are Legion“ ist eine Gilde, welche den sozialen Aspekt sowie den einer Semi-Progress Gilde vereint. 
     Unser aktuelles Ziel ist es unter den besten 1000 Gilden der Welt zu spielen. 
    </div>
  </div>,
});
