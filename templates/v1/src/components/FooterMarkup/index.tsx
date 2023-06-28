import React, { FunctionComponent } from 'react';
import { FooterHelp, Link } from 'pcs-polaris';

const FooterMarkup: FunctionComponent = () => (
  <FooterHelp>
    Explore more from{' '}
    <Link url={''} external removeUnderline>
      Shipquocte
    </Link>
  </FooterHelp>
);
export default FooterMarkup;
