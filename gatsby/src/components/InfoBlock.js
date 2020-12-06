import React from 'react';
import { withMenuComponentBlock } from './withMenuComponentBlock';

export const InfoBlock = withMenuComponentBlock({
  id: 'info',
  Component: () => (
    <div className="info-column">
      <div className="has-text-left-desktop has-text-centered-mobile is-size-5-desktop is-size-5-touch">
        „We are Legion“ vereint Gemeinschaftlichkeit und Progress in einer
        Gilde. Erfolge wie Cutting Edge und Tequilla auf Ex können wir unser
        Eigen nennen. Unser aktuelles Ziel ist es unter den besten 1000 Gilden
        der Welt zu spielen. "Eine Gemeinschaft wird nicht durch ihre Erfolge
        geprägt, sondern wie sie mit Misserfolgen umgehen kann"
      </div>
    </div>
  ),
});
