import React from 'react';
import { Helmet } from 'react-helmet';
import { ContactsBlock } from '../components/ContactsBlock';
import { InfoBlock } from '../components/InfoBlock';
import { HoursBlock } from '../components/HoursBlock';
import { Menu } from '../components/Menu';
import { StartBlock } from '../components/StartBlock';

import '../styles/index.scss';

const Index = () =>  {
  return (
    <main>
      <Helmet>
        <title>We Are Legion</title>
      </Helmet>
      <Menu />
      <StartBlock />
      <HoursBlock />
      <InfoBlock />
      <ContactsBlock />
    </main>
  );
}

export default Index;