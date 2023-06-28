import React from 'react';
import { Button, ButtonGroup, FormLayout, Layout, LegacyCard, Page, Text } from 'pcs-polaris';

const Home = () => {
  return (
    <div className={'Polaris-Custom'}>
      <Page>
        <div className={'homepage'}>
          <Layout>
            <Layout.Section>
              <div className={'banner'}>
                <div className='content'>
                  <Text as={'h2'} variant={'headingMd'}>
                    Welcome to SHIPQUOCTE!
                  </Text>
                  <Text as={'p'} variant={'bodyMd'}>
                    Let's run a smart way to tag orders, customers & products automatically
                  </Text>
                  <div className={'action'}>
                    <ButtonGroup>
                      {/*<Button primary icon={ArrowRightMinor} url={"/setup-wizard"}>*/}
                      {/*    Launch the Setup Wizard*/}
                      {/*</Button>*/}
                      <Button url={``} external>
                        Find our guides
                      </Button>
                    </ButtonGroup>
                  </div>
                </div>
              </div>
            </Layout.Section>
            <Layout.Section>
              <LegacyCard title={'Onboarding steps'}>
                <LegacyCard.Section title={<strong>Step 1: Setup workflow</strong>}>
                  <FormLayout>
                    <p>What is the tagging job you need to do, describe them with conditions</p>
                    <Button url={'/rules'}>Setup workflow</Button>
                  </FormLayout>
                </LegacyCard.Section>
                <LegacyCard.Section title={<strong>Step 2: Run workflows</strong>}>
                  <FormLayout>
                    <p>Run the tagging job and save your time</p>
                    <Button url={'/manual-tag'}>Run workflows</Button>
                  </FormLayout>
                </LegacyCard.Section>
              </LegacyCard>
            </Layout.Section>
            <Layout.Section>
              <LegacyCard title={'Frequently asked questions'}>
                <LegacyCard.Section title={<strong>Why should you use this app?</strong>}>
                  <Text as={'span'} variant={'bodyMd'}>
                    This app is a smart way to tag orders, customers & products automatically
                  </Text>
                </LegacyCard.Section>
                <LegacyCard.Section title={<strong>What to do if the app is not working?</strong>}>
                  <Text as={'span'} variant={'bodyMd'}>
                    If the app is not working, please feel free to contact us via. Emails sent and we will respond as
                    quickly as possible.
                  </Text>
                </LegacyCard.Section>
                <LegacyCard.Section title={<strong>How can I contact to app developers?</strong>}>
                  <Text as={'span'} variant={'bodyMd'}>
                    When you need to any support, you can send an email to our support email:
                  </Text>
                </LegacyCard.Section>
                <LegacyCard.Section title={<strong>How to clean code after uninstallation?</strong>}>
                  <Text as={'span'} variant={'bodyMd'}>
                    If you stop using or uninstall app, just click DELETE to remove the app. You don't have to worry
                    about junk snippets or left over codes at all!
                  </Text>
                </LegacyCard.Section>
              </LegacyCard>
            </Layout.Section>
          </Layout>
        </div>
      </Page>
    </div>
  );
};
export default Home;
