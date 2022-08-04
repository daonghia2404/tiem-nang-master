import React from 'react';

import { TAuthProps } from '@/layouts/Auth/Auth.types';

const Auth: React.FC<TAuthProps> = ({ children }) => {
  return <div className="Auth">{children}</div>;
};

export default Auth;
