import React, { lazy, Suspense, useCallback, useEffect, useRef, useState } from 'react';
import {
  ActionList,
  AppProvider,
  Badge,
  Button,
  Frame,
  Icon,
  LegacyCard,
  LegacyStack,
  Navigation,
  PolarisIcons,
  Popover,
  Tabs,
  Text,
  Toast,
  TopBar,
} from 'pcs-polaris';
import enTranslations from '@shopify/polaris/locales/en.json';
import { Navigate, Route, Routes } from 'react-router';
import LoadingMarkup from '../components/LoadingMarkup';
import Empty from '../components/NoData/Empty';
import { useDispatch, useSelector } from 'react-redux';
import { setupGuideAction } from '../store/reducers/setupGuideReducer';
import { apiClient } from '../utils/api';
import { debounce } from 'lodash';
import { AppState } from '../store';
import Theme from '../config/theme';
import { searchAction } from '../store/reducers/searchReducer';
import RouterLink from '../components/RouterLink';
import FooterMarkup from '../components/FooterMarkup';
import SetupGuide from '../components/SetupGuide';
import { toastAction } from '../store/reducers/toastReducer';
import { useLocation } from 'react-router-dom';
import Login from '../pages/Auth/Login.tsx';

const Home = lazy(() => import('../pages/Home'));
const OrderList = lazy(() => import('../pages/Order/List.tsx'));

const MainApp = () => {
  const location = useLocation();
  const toastState = useSelector((state: AppState) => state.toast);

  const [informationPopover, setInformationPopover] = useState(false);
  const [selectedTab, setSelectedTab] = useState(0);
  const [newsNotifications, setNewsNotifications] = useState<any>([]);
  const [activitiesNotifications, setActivitiesNotifications] = useState<any>([]);
  const [newsNotReadLength, setNewsNotReadLength] = useState(0);
  const [activitiesNotReadLength, setActivitiesNotReadLength] = useState(0);

  const dispatch = useDispatch();

  const loadingPageMarkup = <LoadingMarkup />;

  const defaultState = useRef({
    email: 'admin@pcs.vn',
    userName: 'Admin',
  });

  const [userOpen, setUserOpen] = useState(false);
  const userMenuMarkup = (
    <TopBar.UserMenu
      actions={[
        {
          items: [
            {
              content: 'Hướng dẫn sử dụng',
              url: '',
              external: true,
            },
            {
              content: 'Liên hệ hỗ trợ',
              url: '',
              external: true,
            },
            {
              content: 'Phím tắt',
              url: '',
              external: true,
            },
          ],
        },

        {
          items: [
            {
              content: 'Đăng xuất',
              onAction: () => {
                window.location.href = '/login';
              },
              icon: PolarisIcons.LogOutMinor,
            },
          ],
        },
      ]}
      name={defaultState.current.userName}
      detail={defaultState.current.email}
      initials='A'
      open={userOpen}
      onToggle={() => setUserOpen(!userOpen)}
    />
  );

  const [mobileNavigationActive, setMobileNavigationActive] = useState(false);

  const toggleMobileNavigationActive = () =>
    setMobileNavigationActive((mobileNavigationActive) => !mobileNavigationActive);
  const navigationMarkup = (
    <Navigation location={location.pathname}>
      <Navigation.Section
        separator
        title={'OVERVIEW'}
        items={[
          {
            label: 'Dashboard',
            url: '/home',
            icon: PolarisIcons.HomeMajor,
          },
          {
            label: 'Orders',
            url: '/orders',
            icon: PolarisIcons.OrdersMajor,
          },
        ]}
      />
    </Navigation>
  );

  const secondaryMenu = (
    <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginRight: 16 }}>
      <div
        onClick={() => dispatch(setupGuideAction.openSetupGuide())}
        className={'hover-background'}
        style={{
          padding: 8,
          borderRadius: 8,
          cursor: 'pointer',
        }}
      >
        <div style={{ position: 'relative', display: 'flex', gap: 4 }}>
          <Icon source={PolarisIcons.FlagMajor} color={'highlight'} />
          <span style={{ width: 82 }}>Hướng dẫn</span>
        </div>
      </div>
      {/*<div>*/}
      {/*  <div style={{marginTop: "0.7rem", position: "relative"}} className={"shake"}*/}
      {/*       onClick={() => setOpenReviewModal(true)}>*/}
      {/*    <Icon source={StarFilledMinor}/>*/}
      {/*  </div>*/}
      {/*</div>*/}
      <Popover
        fullHeight
        active={informationPopover}
        activator={
          <div className={'sync-information hover-background'} onClick={() => handleOpenNotification()}>
            <Button icon={PolarisIcons.NotificationMajor} plain />
            {newsNotReadLength + activitiesNotReadLength > 0 ? (
              <>
                <Badge status={'critical'}>{`${newsNotReadLength + activitiesNotReadLength}`}</Badge>
                <div className='loader'>loading...</div>
              </>
            ) : null}
          </div>
        }
        onClose={() => setInformationPopover(false)}
      >
        <Tabs
          selected={selectedTab}
          tabs={[
            {
              id: 'news',
              content: `Hệ thống (${newsNotReadLength})`,
            },
            {
              id: 'activities',
              content: `Hành động (${activitiesNotReadLength})`,
            },
          ]}
          onSelect={(selectedTabIndex) => handleChangeTabNotification(selectedTabIndex)}
        >
          {selectedTab == 0 ? (
            <LegacyCard>
              {/*<LegacyCard.Section title={<Text as={"h3"} variant={"headingMd"}>SEO 2.0 🎉</Text>}>*/}
              {/*  <FormLayout>*/}
              {/*    <p>Ready to take your SEO to the next level? <strong>SEO 2.0</strong> comes now*/}
              {/*    </p>*/}
              {/*    <p>✔️ New UI interface</p>*/}
              {/*    <p>✔️ SEO modules controller, more customization, more optimization, more*/}
              {/*      automation...</p>*/}
              {/*    <p>✔️ Best price, <strong>yearly</strong> price*/}
              {/*      saved, <strong>lifetime</strong> price saved</p>*/}
              {/*    <Button primary fullWidth url={"/app-features"}>Check features now!</Button>*/}
              {/*  </FormLayout>*/}
              {/*</LegacyCard.Section>*/}
              {newsNotifications.map((value: any, index: number) => (
                <LegacyCard.Section
                  key={index}
                  title={
                    <Text as={'h3'} variant={'headingMd'}>
                      {value.title}
                    </Text>
                  }
                >
                  <div dangerouslySetInnerHTML={{ __html: value.description }} />
                </LegacyCard.Section>
              ))}
              {newsNotifications.length == 0 ? (
                <LegacyCard.Section title={''}>
                  <Empty />
                </LegacyCard.Section>
              ) : null}
            </LegacyCard>
          ) : null}
          {selectedTab == 1 ? (
            <LegacyCard>
              {activitiesNotifications.map((value: any, index: number) => (
                <LegacyCard.Section key={index} title={<strong>{value.time_ago}</strong>}>
                  <span dangerouslySetInnerHTML={{ __html: value.title }} />.{' '}
                  <span dangerouslySetInnerHTML={{ __html: value.description }} />
                </LegacyCard.Section>
              ))}
              {activitiesNotifications.length == 0 ? (
                <LegacyCard.Section title={''}>
                  <Empty />
                </LegacyCard.Section>
              ) : null}
            </LegacyCard>
          ) : null}
        </Tabs>
      </Popover>
    </div>
  );

  const handleChangeTabNotification = (tabIndex: number) => {
    setSelectedTab(tabIndex);
    if (tabIndex == 0) {
      apiClient
        .post('/notification/read_news.json')
        .then(() => {
          setNewsNotReadLength(0);
        })
        .catch(() => {
          console.log('123');
        });
    }
    if (tabIndex == 1) {
      apiClient
        .post('/notification/read_activities.json')
        .then(() => {
          setActivitiesNotReadLength(0);
        })
        .catch(() => {
          console.log('123');
        });
    }
  };

  const handleOpenNotification = () => {
    setInformationPopover(true);
    handleChangeTabNotification(0);
  };

  const [isSearchActive, setIsSearchActive] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [searchResults, setSearchResults] = useState<any>([]);

  const searchState = useSelector((state: AppState) => state.search);

  const searchResultsMarkup = (
    <ActionList items={searchState.loading_customers ? [{ content: 'Searching customers...' }] : searchResults} />
  );
  const handleSearchResultsDismiss = () => {
    setIsSearchActive(false);
    setSearchValue('');
    setSearchResults([]);
  };

  const debounceSearchEmailFun = useCallback(
    debounce(
      (keyword: string) =>
        dispatch(
          searchAction.searchCustomers({
            keyword: keyword,
          }),
        ),
      500,
    ),
    [],
  );

  useEffect(() => {
    let tmp = [];
    let customers = searchState.customers;
    for (let i = 0; i < customers.length; i++) {
      const item = customers[i];
      tmp.push({
        content: item.email,
        url: `/customers/${item.id}`,
        icon: PolarisIcons.CustomersMajor,
      });
    }
    setSearchResults(tmp);
  }, [searchState.customers]);

  const handleSearchChange = (value: any) => {
    setSearchValue(value);
    setIsSearchActive(value.length > 0);
    if (value.length) {
      debounceSearchEmailFun(value);
    } else {
      setSearchResults([]);
    }
  };

  const searchFieldMarkup = (
    <LegacyStack wrap={false}>
      <LegacyStack.Item fill>
        <TopBar.SearchField placeholder='Search customers' value={searchValue} onChange={handleSearchChange} />
      </LegacyStack.Item>
    </LegacyStack>
  );

  const topBarMarkup = (
    <TopBar
      secondaryMenu={secondaryMenu}
      searchField={searchFieldMarkup}
      searchResults={searchResultsMarkup}
      searchResultsVisible={isSearchActive}
      onSearchResultsDismiss={handleSearchResultsDismiss}
      showNavigationToggle
      userMenu={userMenuMarkup}
      onNavigationToggle={toggleMobileNavigationActive}
    />
  );

  return (
    <>
      {location.pathname == '/login' ? (
        <AppProvider i18n={enTranslations} linkComponent={RouterLink}>
          <Login />
        </AppProvider>
      ) : (
        <AppProvider i18n={enTranslations} linkComponent={RouterLink}>
          <Frame
            logo={Theme.logo}
            topBar={topBarMarkup}
            navigation={navigationMarkup}
            showMobileNavigation={mobileNavigationActive}
            onNavigationDismiss={toggleMobileNavigationActive}
          >
            <Suspense fallback={loadingPageMarkup}>
              <Routes>
                <Route path={'/home'} element={<Home />} />
                <Route path={'/orders'} element={<OrderList />} />
                <Route path='*' element={<Navigate to='/home' replace />} />
              </Routes>
              <FooterMarkup />
            </Suspense>
            <SetupGuide />
            {toastState.open ? (
              <Toast
                error={toastState.status == 'error'}
                content={toastState.message}
                onDismiss={() => dispatch(toastAction.closeToast())}
              />
            ) : null}
          </Frame>
        </AppProvider>
      )}
    </>
  );
};

export default MainApp;
