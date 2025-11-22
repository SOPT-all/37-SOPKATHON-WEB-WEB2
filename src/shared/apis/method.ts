import axiosInstance from './instance';

interface ApiWrapper<T> {
  success: boolean;
  code: string;
  message: string;
  data: T;
}

export const apiGet = async <T, P = unknown>(
  url: string,
  params?: P,
): Promise<T> => {
  const response = await axiosInstance.get<ApiWrapper<T>>(url, { params });
  return response.data.data;
};

export const apiPost = async <T, B = unknown>(
  url: string,
  body?: B,
): Promise<T> => {
  const response = await axiosInstance.post<ApiWrapper<T>>(url, body);
  return response.data.data;
};

export const apiPatch = async <T, B = unknown>(
  url: string,
  body?: B,
): Promise<T> => {
  const response = await axiosInstance.patch<ApiWrapper<T>>(url, body);
  return response.data.data;
};

export const apiPut = async <T, B = unknown>(
  url: string,
  body?: B,
): Promise<T> => {
  const response = await axiosInstance.put<ApiWrapper<T>>(url, body);
  return response.data.data;
};

export const apiDelete = async <T, P = unknown>(
  url: string,
  params?: P,
): Promise<T> => {
  const response = await axiosInstance.delete<ApiWrapper<T>>(url, { params });
  return response.data.data;
};
