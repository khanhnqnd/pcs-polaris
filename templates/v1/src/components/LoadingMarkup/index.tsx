import React, { FunctionComponent } from 'react';
import { LegacyCard, Layout, SkeletonBodyText, SkeletonDisplayText, SkeletonPage, TextContainer } from 'pcs-polaris';

const LoadingMarkup: FunctionComponent = () => (
  <SkeletonPage>
    <Layout>
      <Layout.Section>
        <LegacyCard sectioned>
          <TextContainer>
            <SkeletonDisplayText size='small' />
            <SkeletonBodyText lines={9} />
          </TextContainer>
        </LegacyCard>
      </Layout.Section>
    </Layout>
  </SkeletonPage>
);

export default LoadingMarkup;
