import React, { useEffect } from 'react';
import { Redirect, Router, globalHistory } from '@reach/router';
import { useDispatch } from 'react-redux';

import { AuthRoute, LayoutPaths, Pages, Paths, ProtectedRoute, PublicRoute } from '@/pages/routers';
import Guest from '@/layouts/Guest';
import Auth from '@/layouts/Auth';
import Admin from '@/layouts/Admin';
import { uiActions } from '@/redux/actions';
import { scrollToTop } from '@/utils/functions';

import './App.scss';

const App: React.FC = () => {
  const dispatch = useDispatch();

  globalHistory.listen((): void => {
    scrollToTop();
  });

  useEffect(() => {
    const updateSize = (): void => {
      dispatch(uiActions.setDevice(window.innerWidth));
    };
    window.addEventListener('resize', updateSize);
    return (): void => window.removeEventListener('resize', updateSize);
  }, [dispatch]);

  return (
    <div className="App">
      <Router primary={false}>
        <Guest path={LayoutPaths.Guest}>
          <PublicRoute path={Paths.BooksLibrary} component={Pages.BooksLibrary} />
          <PublicRoute path={Paths.Release} component={Pages.Release} />
          <PublicRoute path={Paths.Contact} component={Pages.Contact} />
          <PublicRoute path={Paths.Courses} component={Pages.Courses} />
          <PublicRoute path={Paths.PrivacyPolicy} component={Pages.PrivacyPolicy} />
          <PublicRoute path={Paths.AboutUs} component={Pages.AboutUs} />
          <PublicRoute path={Paths.Faq} component={Pages.Faq} />
          <PublicRoute path={Paths.ListBanks} component={Pages.ListBanks} />
          <PublicRoute path={Paths.BookShelf} component={Pages.BookShelf} />
          <PublicRoute path={Paths.NotificationDetail()} component={Pages.NotificationDetail} />
          <PublicRoute path={Paths.BookDetail()} component={Pages.BookDetail} />
          <PublicRoute path={Paths.BookReader()} component={Pages.BookReader} />

          <PublicRoute path={Paths.Event()} component={Pages.Event} />
          <PublicRoute path={Paths.Member} component={Pages.Member} />

          <Redirect noThrow from={Paths.Rest} to={`${LayoutPaths.Guest}${Paths.BooksLibrary}`} />
        </Guest>

        <Auth path={LayoutPaths.Auth}>
          <AuthRoute path={Paths.Login} component={Pages.Login} />
          <Redirect noThrow from={Paths.Rest} to={`${LayoutPaths.Auth}${Paths.Login}`} />
        </Auth>

        <Admin path={LayoutPaths.Admin}>
          <ProtectedRoute path={Paths.AccountInformation} component={Pages.AccountInformation} />
          <ProtectedRoute path={Paths.HistoryTranscation} component={Pages.HistoryTranscation} />
          <ProtectedRoute path={Paths.AffiliateMarketing} component={Pages.AffiliateMarketing} />

          <ProtectedRoute path={Paths.Dashboard} component={Pages.Dashboard} />

          <Redirect noThrow from={Paths.Rest} to={`${LayoutPaths.Guest}${Paths.BooksLibrary}`} />
        </Admin>
      </Router>
    </div>
  );
};

export default App;
