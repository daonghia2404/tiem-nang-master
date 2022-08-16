import React, { useState, useRef, useEffect } from 'react';
import classNames from 'classnames';

import { regex } from '@/common/constants';

import { TPasscodeProps } from './Passcode.types.d';
import { initPasscode } from './Passcode.data';
import './Passcode.scss';

const Passcode: React.FC<TPasscodeProps> = ({ disabled, onChange, onSubmit }) => {
  const [passcode, setPasscode] = useState<{ [key: number]: string }>(initPasscode);

  const inputCodeRef0 = useRef<HTMLInputElement>(null);
  const inputCodeRef1 = useRef<HTMLInputElement>(null);
  const inputCodeRef2 = useRef<HTMLInputElement>(null);
  const inputCodeRef3 = useRef<HTMLInputElement>(null);
  const inputCodeRef4 = useRef<HTMLInputElement>(null);
  const inputCodeRef5 = useRef<HTMLInputElement>(null);

  const inputCodeRef: { [key: number]: React.RefObject<HTMLInputElement> } = {
    0: inputCodeRef0,
    1: inputCodeRef1,
    2: inputCodeRef2,
    3: inputCodeRef3,
    4: inputCodeRef4,
    5: inputCodeRef5,
  };

  const handlePressKeyboard = (e: React.KeyboardEvent<HTMLInputElement>, codePosition: number): void => {
    const value = e.key;
    const notAtTheLastPosition = codePosition < Object.keys(passcode).length - 1;
    const notAtTheFirstPosition = codePosition > 0;

    if (regex.numeric.test(value)) {
      setPasscode({ ...passcode, [codePosition]: value });

      if (notAtTheLastPosition) {
        document.getElementById(`inputCode-${codePosition + 1}`)?.focus();
      }
    } else if (value === 'Backspace' && notAtTheFirstPosition) {
      if (passcode[codePosition]) {
        setPasscode({ ...passcode, [codePosition]: '' });
      } else {
        setPasscode({ ...passcode, [codePosition - 1]: '' });
        document.getElementById(`inputCode-${codePosition - 1}`)?.focus();
      }
    }
  };

  useEffect(() => {
    onChange?.(Object.values(passcode).join(''));

    const isFillCodeComplete = Object.values(passcode).every((code) => code);
    if (isFillCodeComplete) {
      const finalPasscode = Object.values(passcode).join('');
      onSubmit?.(finalPasscode);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [passcode]);

  useEffect(() => {
    document.getElementById('inputCode-0')?.focus();
  }, []);

  return (
    <div className="Passcode flex items-center justify-around">
      {Object.keys(passcode).map((key) => (
        <div key={key} className={classNames('Passcode-item', { 'has-value': passcode[+key] })}>
          <input
            className="Passcode-item-input"
            id={`inputCode-${key}`}
            ref={inputCodeRef[+key]}
            value={passcode[+key]}
            onChange={(): void => {}}
            disabled={disabled}
            onKeyDown={(e): void => handlePressKeyboard(e, +key)}
            maxLength={1}
          />
        </div>
      ))}
    </div>
  );
};

export default Passcode;
