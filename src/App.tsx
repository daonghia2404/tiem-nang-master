import React, { useEffect } from 'react';
import { Redirect, Router, globalHistory } from '@reach/router';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';

import { AuthRoute, LayoutPaths, Pages, Paths, ProtectedRoute, PublicRoute } from '@/pages/routers';
import Guest from '@/layouts/Guest';
import Auth from '@/layouts/Auth';
import Admin from '@/layouts/Admin';
import { uiActions } from '@/redux/actions';
import { scrollToTop } from '@/utils/functions';
import BookAudio from '@/containers/BookAudio';
import { TRootState } from '@/redux/reducers';

import './App.scss';

const App: React.FC = () => {
  const dispatch = useDispatch();

  const productState = useSelector((state: TRootState) => state.productReducer.getProductResponse?.data);
  const bookData = productState?.book;

  const audioState = useSelector((state: TRootState) => state.uiReducer.audio);

  const handleChangeAudio = (type: string): void => {
    if (audioState?.voice) {
      const indexArray = audioState?.voice.index - 1;
      const nextChapter = bookData?.voice?.[indexArray + 1];
      const prevChapter = bookData?.voice?.[indexArray - 1];

      if (type === 'prev' && prevChapter) {
        dispatch(uiActions.setAudio({ voice: prevChapter }));
      }
      if (type === 'next' && nextChapter) {
        dispatch(uiActions.setAudio({ voice: nextChapter }));
      }
    }
  };

  const handleChangeAudioPlay = (status: boolean): void => {
    dispatch(uiActions.setAudio({ isAudioPlay: status }));
  };
  const handleChangeAudioLoading = (status: boolean): void => {
    dispatch(uiActions.setAudio({ isAudioLoading: status }));
  };

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
    <div className={classNames('App', { 'visible-audio': audioState.visible })}>
      <Router primary={false}>
        <Guest path={LayoutPaths.Guest}>
          <PublicRoute path={Paths.BooksLibrary} component={Pages.BooksLibrary} />
          <PublicRoute path={Paths.BooksListSearch()} component={Pages.BooksListSearch} />
          <PublicRoute path={Paths.Release} component={Pages.Release} />
          <ProtectedRoute path={Paths.Contact} component={Pages.Contact} />
          <PublicRoute path={Paths.Courses} component={Pages.Courses} />
          <PublicRoute path={Paths.PrivacyPolicy} component={Pages.PrivacyPolicy} />
          <PublicRoute path={Paths.PrivatePolicy} component={Pages.PrivatePolicy} />
          <PublicRoute path={Paths.AboutUs} component={Pages.AboutUs} />
          <PublicRoute path={Paths.Faq} component={Pages.Faq} />
          <PublicRoute path={Paths.ListBanks} component={Pages.ListBanks} />
          <ProtectedRoute path={Paths.BookShelf} component={Pages.BookShelf} />
          <PublicRoute path={Paths.NotificationDetail()} component={Pages.NotificationDetail} />
          <PublicRoute path={Paths.BookDetail()} component={Pages.BookDetail} />
          <PublicRoute path={Paths.BookReader()} component={Pages.BookReader} />

          <PublicRoute path={Paths.Event()} component={Pages.Event} />
          <ProtectedRoute path={Paths.Member} component={Pages.Member} />

          <Redirect noThrow from={Paths.Rest} to={`${LayoutPaths.Guest}${Paths.BooksLibrary}`} />
        </Guest>

        <Auth path={LayoutPaths.Auth}>
          <AuthRoute path={Paths.Login} component={Pages.Login} />
          <Redirect noThrow from={Paths.Rest} to={`${LayoutPaths.Auth}${Paths.Login}`} />
        </Auth>

        <Admin path={LayoutPaths.Admin}>
          <ProtectedRoute path={Paths.AccountInformation} component={Pages.AccountInformation} />
          <ProtectedRoute path={Paths.Notifications} component={Pages.Notifications} />
          <ProtectedRoute path={Paths.HistoryTranscation} component={Pages.HistoryTranscation} />
          <ProtectedRoute path={Paths.AffiliateMarketing} component={Pages.AffiliateMarketing} />

          <ProtectedRoute path={Paths.Dashboard} component={Pages.Dashboard} />

          <Redirect noThrow from={Paths.Rest} to={`${LayoutPaths.Guest}${Paths.BooksLibrary}`} />
        </Admin>
      </Router>

      <BookAudio
        source={audioState?.voice}
        isAudioPlay={audioState?.isAudioPlay}
        onClickPrev={(): void => handleChangeAudio('prev')}
        onClickNext={(): void => handleChangeAudio('next')}
        onChangeAudioIsPlay={handleChangeAudioPlay}
        onChangeAudioLoading={handleChangeAudioLoading}
      />
    </div>
  );
};

export default App;
