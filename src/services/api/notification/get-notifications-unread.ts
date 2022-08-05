import { TCommonResponse } from '@/common/types';
import ApiService from '@/services/api';

// TYPES

export type TGetNotificationsUnreadParams = unknown;

export type TGetNotificationsUnreadMaterials = {
  params?: TGetNotificationsUnreadParams;
};

export type TGetNotificationsUnreadResponse = TCommonResponse & {
  data: number;
};

// FUNCTION

export const getNotificationsUnread = async ({
  params,
}: TGetNotificationsUnreadMaterials): Promise<TGetNotificationsUnreadResponse> => {
  const response = await ApiService.get(`/notification/un-read`, { params });
  return response.data;
};
