import { TCommonPaginate, TCommonResponse } from '@/common/types';
import ApiService from '@/services/api';

// TYPES

export type TGetNotificationsParams = {
  page: number;
  pageSize: number;
};

export type TGetNotificationsMaterials = {
  params?: TGetNotificationsParams;
};

export type TGetNotificationsResponse = TCommonResponse & {
  data: TCommonPaginate & {
    records: TNotification[];
  };
};

export type TNotification = {
  content: string;
  createdAt: string;
  description: string;
  featureImage: string;
  id: string;
  title: string;
  isRead: boolean;
};

// FUNCTION

export const getNotifications = async ({ params }: TGetNotificationsMaterials): Promise<TGetNotificationsResponse> => {
  const response = await ApiService.get(`/notification`, { params });
  return response.data;
};
