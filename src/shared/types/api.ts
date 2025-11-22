export interface ApiResponse<T> {
  data: T;
  message?: string;
  status?: number;
  isSuccess?: boolean;
}