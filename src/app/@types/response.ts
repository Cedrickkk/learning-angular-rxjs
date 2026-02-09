export type ApiResponse<T> = {
  code: number;
  status: string;
  message: string;
  data?: Array<T>;
  meta?: {
    timestamp: string;
    requestId: string;
  };
};
