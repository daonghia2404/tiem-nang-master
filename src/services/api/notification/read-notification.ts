import ApiService from '@/services/api';

// TYPES

export type TReadNotificationParams = unknown;
export type TReadNotificationBody = {
  id: string;
};

export type TReadNotificationMaterials = {
  params?: TReadNotificationParams;
  body?: TReadNotificationBody;
};

export type TReadNotificationResponse = unknown;

// FUNCTION

export const readNotification = async ({
  params,
  body,
}: TReadNotificationMaterials): Promise<TReadNotificationResponse> => {
  const response = await ApiService.post(`/notification/read`, body, { params });
  return response.data;
};
