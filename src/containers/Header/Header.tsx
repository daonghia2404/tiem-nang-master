import React, { useCallback, useEffect, useState } from 'react';
import { Col, Row } from 'antd';
import classNames from 'classnames';
import { Link, navigate, useLocation } from '@reach/router';
import { useDispatch, useSelector } from 'react-redux';

import Icon, { EIconColor, EIconName } from '@/components/Icon';
import Logo from '@/assets/images/logo.png';
import DropdownCustom from '@/components/DropdownCustom';
import Input from '@/components/Input';
import Avatar from '@/components/Avatar';
import ModalAuth from '@/containers/ModalAuth';
import { EKeyStateModalAuth } from '@/containers/ModalAuth/ModalAuth.enums';
import AccountDropdown from '@/containers/AccountDropdown';
import { Paths } from '@/pages/routers';
import { TRootState } from '@/redux/reducers';
import { getMyMembershipAction, getNotificationsUnreadAction, getProfileAction } from '@/redux/actions';
import Helper from '@/services/helpers';

import { dataHeaderMenu } from './Header.data';
import { THeaderProps } from './Header.types.d';
import './Header.scss';

const Header: React.FC<THeaderProps> = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const atk = Helper.getAccessToken();

  const profileState = useSelector((state: TRootState) => state.profileReducer.getProfileResponse?.data);

  const [visibleAccountDropdown, setVisibleAccountDropdown] = useState(false);
  const [keyword, setKeyword] = useState('');

  const [modalAuthState, setModalAuthState] = useState<{
    visible: boolean;
    defaultKey?: EKeyStateModalAuth;
  }>({
    visible: false,
  });

  const handleSearch = (): void => {
    navigate(Paths.BooksListSearch(keyword));
  };

  const handleOpenAccountDropdown = (): void => {
    setVisibleAccountDropdown(true);
  };

  const handleCloseAccountDropdown = (): void => {
    setVisibleAccountDropdown(false);
  };

  const handleOpenModalAuth = (defaultKey?: EKeyStateModalAuth): void => {
    setModalAuthState({ ...modalAuthState, visible: true, defaultKey });
  };

  const handleCloseModalAuth = (): void => {
    setModalAuthState({ ...modalAuthState, visible: false });
  };

  const getProfile = useCallback(() => {
    if (atk) dispatch(getProfileAction.request({}));
  }, [dispatch, atk]);

  const getMyMembership = useCallback(() => {
    if (atk) dispatch(getMyMembershipAction.request({}));
  }, [dispatch, atk]);

  const getNotificationsUnread = useCallback(() => {
    if (atk) dispatch(getNotificationsUnreadAction.request({}));
  }, [dispatch, atk]);

  useEffect(() => {
    getProfile();
  }, [getProfile]);

  useEffect(() => {
    getMyMembership();
  }, [getMyMembership]);

  useEffect(() => {
    getNotificationsUnread();
  }, [getNotificationsUnread]);

  return (
    <div className="Header">
      <div className="Header-top">
        <div className="container">
          <div className="Header-top-wrapper">
            <Row justify="end" gutter={20}>
              <Col>
                <a href="mailto: admin@admin.com" className="Header-top-contact flex items-center">
                  <Icon name={EIconName.Phone} color={EIconColor.WHITE} />
                  Email: admin@admin.com
                </a>
              </Col>

              <Col>
                <a href="tel: 19001900" className="Header-top-contact flex items-center">
                  <Icon name={EIconName.Phone} color={EIconColor.WHITE} />
                  Hotline: 1900 1900
                </a>
              </Col>
            </Row>
          </div>
        </div>
      </div>

      <div className="Header-middle">
        <div className="container">
          <div className="Header-middle-wrapper">
            <Row justify="space-between" gutter={16} align="middle">
              <Col>
                <Link to={Paths.BooksLibrary} className="Header-middle-logo">
                  <img src={Logo} alt="" />
                </Link>
              </Col>
              <Col flex={1}>
                <div className="Header-middle-search">
                  <Input
                    placeholder="Tìm kiếm"
                    suffix={<Icon name={EIconName.Search} color={EIconColor.BLACK} onClick={handleSearch} />}
                    onChange={(e): void => setKeyword(e.target.value)}
                    onEnter={handleSearch}
                  />
                </div>
              </Col>
              <Col>
                {!profileState ? (
                  <div className="Header-middle-account flex items-center">
                    <div className="Header-middle-account-name">
                      <span onClick={(): void => handleOpenModalAuth(EKeyStateModalAuth.SIGN_IN)}>Đăng nhập</span>/
                      <span onClick={(): void => handleOpenModalAuth(EKeyStateModalAuth.SIGN_UP)}>Đăng ký</span>
                    </div>
                    <div className="Header-middle-account-avatar">
                      <Avatar />
                    </div>
                  </div>
                ) : (
                  <DropdownCustom
                    visible={visibleAccountDropdown}
                    arrow
                    onVisibleChange={setVisibleAccountDropdown}
                    overlayClassName="Header-middle-account-dropdown"
                    overlay={<AccountDropdown visible={visibleAccountDropdown} onClose={handleCloseAccountDropdown} />}
                    placement="bottomRight"
                  >
                    <div className="Header-middle-account flex items-center" onClick={handleOpenAccountDropdown}>
                      <div className="Header-middle-account-name">{profileState.name}</div>
                      <div className="Header-middle-account-avatar">
                        <Avatar image={profileState?.avatar} />
                      </div>
                    </div>
                  </DropdownCustom>
                )}
              </Col>
            </Row>
          </div>
        </div>
      </div>

      <div className="Header-bottom">
        <div className="container">
          <div className="Header-bottom-wrapper">
            <div className="Header-bottom-list">
              <Row align="middle" justify="space-around">
                {dataHeaderMenu.map((item) => (
                  <Col key={item.key}>
                    <Link
                      to={item.link}
                      className={classNames('Header-bottom-list-item', { active: item.activePaths.includes(pathname) })}
                    >
                      {item.title}
                    </Link>
                  </Col>
                ))}
              </Row>
            </div>
          </div>
        </div>
      </div>

      <ModalAuth {...modalAuthState} onClose={handleCloseModalAuth} />
    </div>
  );
};

export default Header;
