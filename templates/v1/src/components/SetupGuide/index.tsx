import React, { useEffect, useState } from 'react';
import {
  Button,
  Divider,
  Icon,
  List,
  ProgressBar,
  Spinner,
  Text,
  TextContainer,
  Tooltip,
  PolarisIcons,
} from 'pcs-polaris';
import { AppState } from '../../store';
import { useDispatch, useSelector } from 'react-redux';
import { setupGuideAction } from '../../store/reducers/setupGuideReducer';

const SetupGuide = () => {
  const [activeGuideId, setActiveGuideId] = useState(0);

  const setupGuideState = useSelector((state: AppState) => state.setupGuide);
  const dispatch = useDispatch();

  const [total, setTotal] = useState(3);

  useEffect(() => {
    toggleSetupGuide(setupGuideState.open);
  }, [setupGuideState.open]);

  const toggleSetupGuide = (isOpen: boolean) => {
    const el: HTMLDivElement | null = document.querySelector('.setup-guide');
    if (el) {
      el.style.right = isOpen ? '0px' : '-384px';
    }
  };

  const renderActiveGuide = () => {
    if (activeGuideId == 1) {
      return (
        <div className='content-detail'>
          <div className='detail-title'>
            {buildAction('setting_template')}
            <div className='title'>
              <Text as={'h2'} variant={'headingMd'}>
                Setting templates
              </Text>
              <p className={'subtitle'}>
                <Text as={'span'} variant={'bodySm'} color={'subdued'}>
                  Create an awesome template for your order
                </Text>
              </p>
            </div>
          </div>
          <Divider />
          <div>
            <TextContainer>
              <p>
                <Text as={'h3'} variant={'headingMd'} fontWeight={'bold'} color={'success'}>
                  How to setup:
                </Text>
              </p>
              <List>
                <List.Item>
                  <p>
                    Click to{' '}
                    <Text as={'span'} variant={'bodyMd'} fontWeight={'bold'}>
                      PDF templates
                    </Text>{' '}
                    on the Left menu.
                  </p>
                </List.Item>
                <List.Item>
                  <p>
                    Click{' '}
                    <Text as={'span'} variant={'bodyMd'} fontWeight={'bold'}>
                      New template
                    </Text>{' '}
                    on the right screen.
                  </p>
                </List.Item>
                <List.Item>
                  <p>
                    Select one of template then click{' '}
                    <Text as={'span'} variant={'bodyMd'} fontWeight={'bold'}>
                      Create
                    </Text>
                  </p>
                </List.Item>
              </List>
              <p>
                <Text as={'h3'} variant={'headingMd'} fontWeight={'bold'} color={'success'}>
                  There are 5 template types:
                </Text>
              </p>
              <List>
                <List.Item>
                  <TextContainer spacing={'tight'}>
                    <Text as={'p'} variant={'bodyMd'} fontWeight={'semibold'}>
                      Invoices
                    </Text>
                    <p style={{ fontStyle: 'italic' }}>
                      Use a professional invoice to leave a lasting impression and encourage customers to come back for
                      many years!
                    </p>
                  </TextContainer>
                </List.Item>
                <List.Item>
                  <TextContainer spacing={'tight'}>
                    <Text as={'p'} variant={'bodyMd'} fontWeight={'semibold'}>
                      Orders
                    </Text>
                    <p style={{ fontStyle: 'italic' }}>
                      Why being so normal? Use HKT Apps order template to put your professional, eye-catching, and
                      bright personality on display.
                    </p>
                  </TextContainer>
                </List.Item>
                <List.Item>
                  <TextContainer spacing={'tight'}>
                    <Text as={'p'} variant={'bodyMd'} fontWeight={'semibold'}>
                      Packing slips
                    </Text>
                    <p style={{ fontStyle: 'italic' }}>
                      Use pre-made Packing Slip template to get better invoice management. Like other types of PDF
                      documents, including Order, Refund, or Invoice, it is super simple to custom your Packing Slip
                      template to your satisfaction.
                    </p>
                  </TextContainer>
                </List.Item>
                <List.Item>
                  <TextContainer spacing={'tight'}>
                    <Text as={'p'} variant={'bodyMd'} fontWeight={'semibold'}>
                      Refunds
                    </Text>
                    <p style={{ fontStyle: 'italic' }}>
                      Sending professional and functional refund to your clients doesn’t have to be a headache! Refund
                      default template assists you to create and deliver refund emails in a matter of minutes. All
                      needed fields for refunding is ready to use.
                    </p>
                  </TextContainer>
                </List.Item>
                <List.Item>
                  <TextContainer spacing={'tight'}>
                    <Text as={'p'} variant={'bodyMd'} fontWeight={'semibold'}>
                      Draft orders
                    </Text>
                    <p style={{ fontStyle: 'italic' }}>
                      HKT Apps professionally designed form saves much of your time and effort from building draft order
                      template. Ask for help from our technical team to custom the template beautiful as you want.
                    </p>
                  </TextContainer>
                </List.Item>
              </List>
            </TextContainer>
          </div>
          <div className={'detail-action'}>
            <Button plain external url={''}>
              Hard to setup? Get support now
            </Button>
          </div>
        </div>
      );
    } else if (activeGuideId == 2) {
      return (
        <div className='content-detail'>
          <div className='detail-title'>
            {buildAction('custom_store_information')}
            <div className='title'>
              <Text as={'h2'} variant={'headingMd'}>
                Custom store information
              </Text>
              <p className={'subtitle'}>
                <Text as='span' color={'subdued'}>
                  Configure your store general information to show on PDF Invoice: Upload logo, enter address, phone
                  number and more.
                </Text>
              </p>
            </div>
          </div>
          <Divider />
          <div>
            <TextContainer>
              <p>
                <Text as={'h3'} variant={'headingMd'} fontWeight={'bold'} color={'success'}>
                  How to setup:
                </Text>
              </p>
              <List>
                <List.Item>
                  <p>
                    Click to{' '}
                    <Text as={'span'} variant={'bodyMd'} fontWeight={'bold'}>
                      Settings
                    </Text>{' '}
                    on the Left menu.
                  </p>
                </List.Item>
                <List.Item>
                  <p>Update your store information to display on your invoices</p>
                </List.Item>
              </List>
              <p>
                <Text as={'h3'} variant={'headingMd'} fontWeight={'bold'} color={'success'}>
                  Sections should be completed:
                </Text>
              </p>
              <List>
                <List.Item>
                  <TextContainer spacing={'tight'}>
                    <Text as={'p'} variant={'bodyMd'} fontWeight={'semibold'}>
                      Store details
                    </Text>
                    <p style={{ fontStyle: 'italic' }}>The details about your store will appear on your invoices</p>
                  </TextContainer>
                </List.Item>
                <List.Item>
                  <TextContainer spacing={'tight'}>
                    <Text as={'p'} variant={'bodyMd'} fontWeight={'semibold'}>
                      Store address
                    </Text>
                    <p style={{ fontStyle: 'italic' }}>The physical store address will appear on your invoices</p>
                  </TextContainer>
                </List.Item>
                <List.Item>
                  <TextContainer spacing={'tight'}>
                    <Text as={'p'} variant={'bodyMd'} fontWeight={'semibold'}>
                      Standard and formats
                    </Text>
                    <p style={{ fontStyle: 'italic' }}>
                      Standards and formats are used to format product prices, and order times.
                    </p>
                  </TextContainer>
                </List.Item>
                <List.Item>
                  <TextContainer spacing={'tight'}>
                    <Text as={'p'} variant={'bodyMd'} fontWeight={'semibold'}>
                      Social networking
                    </Text>
                    <p style={{ fontStyle: 'italic' }}>
                      Social networking information that your store used in the internet
                    </p>
                  </TextContainer>
                </List.Item>
              </List>
            </TextContainer>
          </div>
          <div className={'detail-action'}>
            <Button plain external url={''}>
              Hard to setup? Get support now
            </Button>
          </div>
        </div>
      );
    } else if (activeGuideId == 3) {
      return (
        <div className='content-detail'>
          <div className='detail-title'>
            {buildAction('setup_language')}
            <div className='title'>
              <Text as={'h2'} variant={'headingMd'}>
                Setup language
              </Text>
              <p className={'subtitle'}>
                <Text as='span' color={'subdued'}>
                  You can customize primary and supported languages
                </Text>
              </p>
            </div>
          </div>
          <Divider />
          <div>
            <TextContainer>
              <p>
                <Text as={'h3'} variant={'headingMd'} fontWeight={'bold'} color={'success'}>
                  How to setup:
                </Text>
              </p>
              <List>
                <List.Item>
                  <p>
                    Click to{' '}
                    <Text as={'span'} variant={'bodyMd'} fontWeight={'bold'}>
                      Settings
                    </Text>{' '}
                    on the Left menu.
                  </p>
                </List.Item>
                <List.Item>
                  <p>
                    Click to{' '}
                    <Text as={'span'} variant={'bodyMd'} fontWeight={'bold'}>
                      Translations
                    </Text>{' '}
                    on the sub menu.
                  </p>
                </List.Item>
                <List.Item>
                  <p>Add your language and customize</p>
                </List.Item>
              </List>
            </TextContainer>
          </div>
          <div className={'detail-action'}>
            <Button plain external url={''}>
              Hard to setup? Get support now
            </Button>
          </div>
        </div>
      );
    }
  };

  const buildAction = (setupCode: string) => {
    const toggleState = setupGuideState.toggle_setup;
    if (toggleState == setupCode) {
      return (
        <div className='check-done-container'>
          <div className='check-done-content'>
            <button className='check-done-action'>
              <Tooltip content={''} dismissOnMouseOut zIndexOverride={9999} preferredPosition={'above'}>
                <div className='check-icon'>
                  <Spinner size={'small'} />
                </div>
              </Tooltip>
            </button>
          </div>
        </div>
      );
    } else {
      const isChecked = setupGuideState.setup_codes.includes(setupCode);
      if (!isChecked) {
        return (
          <div
            className='check-done-container'
            onClick={() => dispatch(setupGuideAction.toggleSetupGuide({ setup_code: setupCode }))}
          >
            <div className='check-done-content'>
              <button className='check-done-action'>
                <Tooltip content={'Mark as done'} dismissOnMouseOut zIndexOverride={9999} preferredPosition={'above'}>
                  <div className='check-icon'>
                    <svg
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                      className='Zx1I3'
                    >
                      <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M21.9147 13.3062L19.9315 13.0475C19.9761 12.7056 19.9993 12.3561 19.9993 12.0001C19.9993 11.6442 19.9761 11.2946 19.9315 10.9527L21.9147 10.694C21.9705 11.1215 21.9993 11.5575 21.9993 12.0001C21.9993 12.4428 21.9705 12.8787 21.9147 13.3062ZM21.2405 8.17224L19.393 8.93835C19.1238 8.28906 18.7709 7.68206 18.3474 7.13093L19.9333 5.91228C20.4621 6.6004 20.9033 7.35927 21.2405 8.17224ZM18.0871 4.06613L16.8685 5.65197C16.3173 5.22845 15.7103 4.87563 15.061 4.60638L15.8271 2.75893C16.6401 3.09605 17.399 3.53734 18.0871 4.06613ZM13.3054 2.08464L13.0467 4.06784C12.7048 4.02324 12.3552 4.00012 11.9993 4.00012C11.6433 4.00012 11.2938 4.02324 10.9519 4.06784L10.6932 2.08464C11.1206 2.02889 11.5566 2.00012 11.9993 2.00012C12.4419 2.00012 12.8779 2.02889 13.3054 2.08464ZM8.17139 2.75893L8.9375 4.60638C8.2882 4.87563 7.6812 5.22845 7.13008 5.65197L5.91143 4.06613C6.59954 3.53734 7.35841 3.09606 8.17139 2.75893ZM4.06527 5.91228L5.65111 7.13093C5.22759 7.68206 4.87478 8.28906 4.60552 8.93835L2.75807 8.17225C3.0952 7.35927 3.53648 6.6004 4.06527 5.91228ZM2.08379 10.694C2.02803 11.1215 1.99927 11.5575 1.99927 12.0001C1.99927 12.4428 2.02803 12.8787 2.08379 13.3062L4.06699 13.0475C4.02239 12.7056 3.99927 12.3561 3.99927 12.0001C3.99927 11.6442 4.02239 11.2946 4.06699 10.9527L2.08379 10.694ZM2.75807 15.828L4.60553 15.0619C4.87478 15.7112 5.22759 16.3182 5.65111 16.8693L4.06527 18.088C3.53648 17.3998 3.0952 16.641 2.75807 15.828ZM5.91143 19.9341L7.13008 18.3483C7.68121 18.7718 8.28821 19.1246 8.9375 19.3939L8.17139 21.2413C7.35841 20.9042 6.59955 20.4629 5.91143 19.9341ZM10.6932 21.9156L10.9519 19.9324C11.2938 19.977 11.6433 20.0001 11.9993 20.0001C12.3552 20.0001 12.7048 19.977 13.0467 19.9324L13.3054 21.9156C12.8779 21.9714 12.4419 22.0001 11.9993 22.0001C11.5566 22.0001 11.1206 21.9714 10.6932 21.9156ZM15.8271 21.2413L15.061 19.3939C15.7103 19.1246 16.3173 18.7718 16.8685 18.3483L18.0871 19.9341C17.399 20.4629 16.6401 20.9042 15.8271 21.2413ZM19.9333 18.088L18.3474 16.8693C18.7709 16.3182 19.1238 15.7112 19.393 15.0619L21.2405 15.828C20.9033 16.641 20.4621 17.3998 19.9333 18.088Z'
                        fill='#8C9196'
                        className='Ei0Ju'
                      />
                      <circle cx='12' cy='12' r='12' fill='#DBDDDF' className='round' />
                      <circle cx='12' cy='12' r='9' fill='#F6F6F7' stroke='#999EA4' strokeWidth='2' className='round' />
                    </svg>
                  </div>
                </Tooltip>
              </button>
            </div>
          </div>
        );
      } else {
        return (
          <div
            className='check-done-container'
            onClick={() => dispatch(setupGuideAction.toggleSetupGuide({ setup_code: setupCode }))}
          >
            <div className='check-done-content'>
              <button className='check-done-action'>
                <Tooltip
                  preferredPosition={'above'}
                  content={'Mark as not done'}
                  dismissOnMouseOut
                  zIndexOverride={9999}
                >
                  <div className='check-icon'>
                    <Icon source={PolarisIcons.CircleTickMajor} color={'primary'} />
                  </div>
                </Tooltip>
              </button>
            </div>
          </div>
        );
      }
    }
  };

  return (
    <div className={'setup-guide'}>
      <div className='head-guide'>
        <div className='head-title'>
          {activeGuideId ? (
            <div className='head-back'>
              <Button plain monochrome icon={PolarisIcons.ArrowLeftMinor} onClick={() => setActiveGuideId(0)} />
            </div>
          ) : null}
          <Text as={'h2'} variant={'headingMd'}>
            Setup guide
          </Text>
          <button className={'head-close'} onClick={() => dispatch(setupGuideAction.closeSetupGuide())}>
            <Icon source={PolarisIcons.MobileCancelMajor} />
          </button>
        </div>
        <div className='head-progress'>
          <ProgressBar
            color={'highlight'}
            progress={(setupGuideState.setup_codes.length / total) * 100}
            size={'small'}
          />
        </div>
        {!activeGuideId ? (
          <Text color={'subdued'} variant={'bodyMd'} as={'span'}>
            {setupGuideState.setup_codes.length} of {total} tasks complete
          </Text>
        ) : null}
      </div>
      <div className='content-guide'>
        {activeGuideId ? (
          renderActiveGuide()
        ) : (
          <>
            <div className='content-item'>
              {buildAction('setting_template')}
              <button className={'task-container'} onClick={() => setActiveGuideId(1)}>
                <div className='task-title'>Setting templates</div>
                <div>
                  <Icon source={PolarisIcons.ChevronRightMinor} color={'subdued'} />
                </div>
              </button>
            </div>
            <div className='content-item'>
              <div className='check-done-container'>{buildAction('custom_store_information')}</div>
              <button className={'task-container'} onClick={() => setActiveGuideId(2)}>
                <div className='task-title'>Custom store information</div>
                <div>
                  <Icon source={PolarisIcons.ChevronRightMinor} color={'subdued'} />
                </div>
              </button>
            </div>
            <div className='content-item'>
              {buildAction('setup_language')}
              <button className={'task-container'} onClick={() => setActiveGuideId(3)}>
                <div className='task-title'>Setup language</div>
                <div>
                  <Icon source={PolarisIcons.ChevronRightMinor} color={'subdued'} />
                </div>
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default SetupGuide;
