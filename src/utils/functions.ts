/* eslint-disable no-useless-escape */
import { SyntheticEvent } from 'react';
import { notification } from 'antd';
import { Rule } from 'antd/lib/form';
import moment from 'moment';
import ImageAvatarDefault from '@/assets/images/image-avatar-default.svg';

import { EFormat, ETypeNotification } from '@/common/enums';
import { regex } from '@/common/constants';

export const removeAccents = (str: string): string => {
  let strConverted = str;
  if (strConverted) {
    strConverted = strConverted.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a');
    strConverted = strConverted.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e');
    strConverted = strConverted.replace(/ì|í|ị|ỉ|ĩ/g, 'i');
    strConverted = strConverted.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o');
    strConverted = strConverted.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u');
    strConverted = strConverted.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y');
    strConverted = strConverted.replace(/đ/g, 'd');
    strConverted = strConverted.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, 'A');
    strConverted = strConverted.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, 'E');
    strConverted = strConverted.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, 'I');
    strConverted = strConverted.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, 'O');
    strConverted = strConverted.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, 'U');
    strConverted = strConverted.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, 'Y');
    strConverted = strConverted.replace(/Đ/g, 'D');

    strConverted = strConverted.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, '');
    strConverted = strConverted.replace(/\u02C6|\u0306|\u031B/g, '');
    // Remove extra spaces
    strConverted = strConverted.replace(/ + /g, ' ');
    strConverted = strConverted.trim();
    // Remove punctuations
    strConverted = strConverted.replace(
      /!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g,
      ' ',
    );
    return strConverted;
  }

  return '';
};

export const showNotification = (type: ETypeNotification, description: string): void => {
  const options = {
    message: '',
    description,
    className: 'Notification',
  };

  switch (type) {
    case ETypeNotification.SUCCESS:
      notification.success(options);
      break;
    case ETypeNotification.WARNING:
      notification.warning(options);
      break;
    case ETypeNotification.ERROR:
      notification.error(options);
      break;
    case ETypeNotification.INFO:
      notification.info(options);
      break;
    default:
      notification.open(options);
  }
};

export const searchString = (target: string | string[], searchValue: string): boolean => {
  const searchKey = searchValue.toLowerCase();
  const searchTarget = target instanceof Array ? target.map((str) => str.toLowerCase()) : target.toLowerCase();
  const searchResult =
    searchTarget instanceof Array
      ? !!searchTarget.filter((str) => removeAccents(str).includes(removeAccents(searchKey))).length
      : removeAccents(searchTarget).includes(removeAccents(searchKey));
  return searchResult;
};

export const getTotalPage = (totalItem: number, pageSize: number): number => {
  return Math.ceil(totalItem / pageSize);
};

export const scrollToTop = (): void => {
  window.scrollTo(0, 0);
};

export const validationRules = {
  required: (message?: string): Rule => ({
    required: true,
    message: message || 'Yêu cầu bắt buộc phải nhập !',
  }),
  minLength: (message?: string, length = 2): Rule => ({
    min: length,
    message: message || `Enter characters at least ${length} !`,
  }),
  maxLength: (message?: string, length = 10): Rule => ({
    max: length,
    message: message || `Enter characters at most ${length} !`,
  }),
  email: (message?: string): Rule => ({
    type: 'email',
    message: message || 'Sai định dạng email !',
  }),
  noSpecialKey: (message?: string): Rule => ({
    validator: (rule: any, value: string): Promise<void> => {
      if (!value || !regex.onlySpecialKey.test(value)) return Promise.resolve();
      return Promise.reject(message || 'Cannot enter special characters !');
    },
  }),
  onlyAlphabetic: (message: string): Rule => ({
    validator: (rule: any, value: string): Promise<void> => {
      if (!value || regex.alphabetic.test(removeAccents(value))) return Promise.resolve();
      return Promise.reject(message || 'This is a field where only alphabetic characters are entered !');
    },
  }),
  onlyNumeric: (message?: string): Rule => ({
    validator: (rule: any, value: string): Promise<void> => {
      if (!value || regex.numeric.test(value)) return Promise.resolve();
      return Promise.reject(message || 'Yêu cầu chỉ nhập ký tự là số !');
    },
  }),
  onlyAlphanumerial: (message: string): Rule => ({
    validator: (rule: any, value: string): Promise<void> => {
      if (!value || regex.alphanumerial.test(removeAccents(value))) return Promise.resolve();
      return Promise.reject(message || 'This is a field where only alphanumeric characters are entered !');
    },
  }),
  domain: (message: string): Rule => ({
    validator: (rule: any, value: string): Promise<void> => {
      if (!value || regex.domain.test(value)) return Promise.resolve();
      return Promise.reject(message || 'Invalid domain !');
    },
  }),
  url: (message: string): Rule => ({
    validator: (rule: any, value: string): Promise<void> => {
      if (!value || regex.url.test(value)) return Promise.resolve();
      return Promise.reject(message || 'Invalid URL !');
    },
  }),
  confirmPassword: (confirmPasswordValue: string, message?: string): Rule => ({
    validator: (rule: any, value: string): Promise<void> => {
      if (!value || value === confirmPasswordValue) return Promise.resolve();
      return Promise.reject(message || 'Xác nhận lại mật khẩu không khớp !');
    },
  }),
  emailOrPhoneNumber: (message?: string): Rule => ({
    validator: (rule: any, value: string): Promise<void> => {
      if (!value || regex.emailOrPhoneNumber.test(value)) return Promise.resolve();
      return Promise.reject(message || 'Vui lòng nhập email hoặc số điện thoại hợp lệ !');
    },
  }),
};

export const formatAbbreviationsName = (value: string): string => {
  const arrayString = value.trim().split(' ');
  const onlyOneWord = arrayString.length === 1;

  if (onlyOneWord) {
    const firstLetter = arrayString[0].trim().charAt(0);
    return `${firstLetter}`.toUpperCase();
  }

  const firstLastWordFirstLetter = arrayString[arrayString.length - 2].trim().charAt(0);
  const secondLastWordFirstLetter = arrayString[arrayString.length - 1].trim().charAt(0);

  return `${firstLastWordFirstLetter}${secondLastWordFirstLetter}`.toUpperCase();
};

export const formatISODateToDateTime = (time: string, format?: string): string => {
  return moment(time).format(format || EFormat.TIME_DATE);
};

export const formatMoneyVND = (config: {
  amount: number | string;
  uppercaseUnit?: boolean;
  showSuffix?: boolean;
}): string => {
  const separateMoney = Intl.NumberFormat('vi-VN').format(Number(config.amount));
  const unit = config.uppercaseUnit ? 'Đ' : 'đ';
  return `${separateMoney} ${config.showSuffix ? unit : ''}`;
};

export const copyText = (text: string): void => {
  const el = document.createElement('textarea');
  el.value = text;
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
  showNotification(ETypeNotification.SUCCESS, 'Sao chép vào bộ nhớ tạm thành công');
};

export const handleErrorImageUrl = (e: SyntheticEvent<HTMLImageElement, Event>): void => {
  const { currentTarget } = e;
  currentTarget.onerror = null; // prevents looping
  currentTarget.src = ImageAvatarDefault;
};

export const getQueryParam = (param: string): string | null => {
  const params = new URLSearchParams(window.location.search);
  return params.get(param);
};

export const urlSafe = (text: string): string => {
  const url = text
    .replace(/[^a-zA-Z0-9- ]/g, '') // remove invalid characters
    .replace(/\s\s+/g, ' ') // trim whitespace
    .replace(/ /g, '-') // replace space with -
    .toLowerCase();
  return url;
};

export const truncateStringByCharaters = (content: string, maxLength: number): string => {
  const contentLength = content.length;
  return `${content.slice(0, contentLength > maxLength ? maxLength : contentLength)}${
    contentLength > maxLength ? '...' : ''
  }`;
};

export const truncateStringByWords = (content: string, maxWords: number): string => {
  const contentSplited = content.split(' ');
  if (maxWords >= contentSplited.length) {
    return content;
  }
  const contentSplitedOptimized = contentSplited.filter((_, index) => index < maxWords);
  const contentTruncated = contentSplitedOptimized.join(' ');
  return `${contentTruncated}...`;
};

export const createImageByFileBlob = (file: File | Blob): string => {
  const imageBlob = new Blob([file]);
  return URL.createObjectURL(imageBlob);
};

export const parseObjectToFormData = (data: { [key: string]: any }): FormData => {
  const formData = new FormData();
  Object.keys(data).forEach((key) => {
    if (typeof data[key] === 'undefined') return;
    formData.append(key, data[key]);
  });
  return formData;
};

export const downloadFile = async (file: File | Blob, name: string): Promise<void> => {
  const a = document.createElement('a');
  document.body.appendChild(a);
  const blobFile = file;

  const blob = new Blob([blobFile], { type: 'application/pdf' });
  const url = window.URL.createObjectURL(blob);

  a.href = url;
  a.download = name;
  a.click();
  window.URL.revokeObjectURL(url);
};

export const formatDuration = (milliseconds = 0): string => {
  return moment.utc(milliseconds * 1000).format('HH:mm:ss');
};
