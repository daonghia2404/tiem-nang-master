import React, { lazy, Suspense } from 'react';
import { Redirect, RouteComponentProps } from '@reach/router';

import Helpers from '@/services/helpers';
import Loading from '@/components/Loading';

const retryLoadComponent = (fn: () => Promise<unknown>, retriesLeft = 5, interval = 1000): any =>
  new Promise((resolve, reject) => {
    fn()
      .then(resolve)
      .catch((error) => {
        setTimeout(() => {
          if (retriesLeft === 1) {
            reject(error);
            return;
          }

          retryLoadComponent(fn, retriesLeft - 1, interval).then(resolve, reject);
        }, interval);
      });
  });

const BooksLibrary = lazy(() => retryLoadComponent(() => import('@/pages/BooksLibrary')));
const BooksListSearch = lazy(() => retryLoadComponent(() => import('@/pages/BooksListSearch')));
const Release = lazy(() => retryLoadComponent(() => import('@/pages/Release')));
const Courses = lazy(() => retryLoadComponent(() => import('@/pages/Courses')));
const Contact = lazy(() => retryLoadComponent(() => import('@/pages/Contact')));
const PrivacyPolicy = lazy(() => retryLoadComponent(() => import('@/pages/PrivacyPolicy')));
const PrivatePolicy = lazy(() => retryLoadComponent(() => import('@/pages/PrivatePolicy')));
const AboutUs = lazy(() => retryLoadComponent(() => import('@/pages/AboutUs')));
const Faq = lazy(() => retryLoadComponent(() => import('@/pages/Faq')));
const ListBanks = lazy(() => retryLoadComponent(() => import('@/pages/ListBanks')));
const BookShelf = lazy(() => retryLoadComponent(() => import('@/pages/BookShelf')));
const NotificationDetail = lazy(() => retryLoadComponent(() => import('@/pages/NotificationDetail')));
const BookDetail = lazy(() => retryLoadComponent(() => import('@/pages/BookDetail')));
const BookReader = lazy(() => retryLoadComponent(() => import('@/pages/BookReader')));

const AccountInformation = lazy(() => retryLoadComponent(() => import('@/pages/AccountInformation')));
const Notifications = lazy(() => retryLoadComponent(() => import('@/pages/Notifications')));
const HistoryTranscation = lazy(() => retryLoadComponent(() => import('@/pages/HistoryTranscation')));
const AffiliateMarketing = lazy(() => retryLoadComponent(() => import('@/pages/AffiliateMarketing')));
const Event = lazy(() => retryLoadComponent(() => import('@/pages/Event')));
const Member = lazy(() => retryLoadComponent(() => import('@/pages/Member')));

const Login = lazy(() => retryLoadComponent(() => import('@/pages/Login')));
const Dashboard = lazy(() => retryLoadComponent(() => import('@/pages/Dashboard')));

export const LayoutPaths = {
  Guest: '/',
  Auth: '/xac-thuc',
  Admin: '/tai-khoan',
};

export const ModulePaths = {};

export const Paths = {
  BooksLibrary: '/',
  BooksListSearch: (keyword?: string): string => `/tim-kiem/${keyword || ':keyword'}`,
  Release: '/giai-toa',
  Contact: '/lien-he',
  Courses: '/khoa-hoc',
  PrivacyPolicy: '/dieu-khoan-chinh-sach',
  PrivatePolicy: '/chinh-sach-bao-mat',
  AboutUs: '/ve-chung-toi',
  Faq: '/cau-hoi-thuong-gap',
  ListBanks: '/chuyen-khoan-ngan-hang',
  BookShelf: '/ke-sach',
  NotificationDetail: (id?: string): string => `/thong-bao/${id || ':id'}`,
  BookDetail: (slug?: string, id?: string): string => `/chi-tiet-sach/${slug || ':slug'}/${id || ':id'}`,
  BookReader: (slug?: string, id?: string): string => `/doc-sach/${slug || ':slug'}/${id || ':id'}`,

  AccountInformation: '/thong-tin-tai-khoan',
  Notifications: '/thong-bao',
  HistoryTranscation: '/lich-su-giao-dich',
  AffiliateMarketing: '/tiep-thi-lien-ket',
  Event: (id?: string): string => `/su-kien/${id || ':id'}`,
  Member: '/thanh-vien',

  Login: '/',

  Dashboard: '/',

  Rest: '*',
};

export const Pages = {
  BooksLibrary,
  BooksListSearch,
  Release,
  Contact,
  Courses,
  PrivacyPolicy,
  PrivatePolicy,
  AboutUs,
  Faq,
  ListBanks,
  BookShelf,
  NotificationDetail,
  BookDetail,
  BookReader,

  AccountInformation,
  Notifications,
  HistoryTranscation,
  AffiliateMarketing,
  Event,
  Member,

  Login,

  Dashboard,
};

interface IRouteProps extends RouteComponentProps {
  component: React.FC;
}

export const AuthRoute: React.FC<IRouteProps> = ({ component: Component, ...rest }) => {
  const loggedIn: string | any = Helpers.getAccessToken();

  return loggedIn ? (
    <Redirect noThrow from={Paths.Rest} to={LayoutPaths.Admin} />
  ) : (
    <Suspense
      fallback={
        <div style={{ padding: 100 }}>
          <Loading />
        </div>
      }
    >
      <Component {...rest} />
    </Suspense>
  );
};

export const ProtectedRoute: React.FC<IRouteProps> = ({ component: Component, ...rest }) => {
  const loggedIn: string | any = Helpers.getAccessToken();

  return loggedIn ? (
    <Suspense
      fallback={
        <div style={{ padding: 100 }}>
          <Loading />
        </div>
      }
    >
      <Component {...rest} />
    </Suspense>
  ) : (
    <Redirect noThrow from={Paths.Rest} to={LayoutPaths.Guest} />
  );
};

export const PublicRoute: React.FC<IRouteProps> = ({ component: Component, ...rest }) => (
  <Suspense
    fallback={
      <div style={{ padding: 100 }}>
        <Loading />
      </div>
    }
  >
    <Component {...rest} />
  </Suspense>
);
