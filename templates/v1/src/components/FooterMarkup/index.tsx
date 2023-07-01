import React, { FunctionComponent } from 'react';
import { FooterHelp, Link } from 'pcs-polaris';
import { App } from '../../config/app.ts';

const FooterMarkup: FunctionComponent = () => (
  <FooterHelp>
    Copyright © {new Date().getFullYear()}{' '}
    <Link url={App.website} target={'_blank'} removeUnderline>
      {App.name}
    </Link>
  </FooterHelp>
);
export default FooterMarkup;
