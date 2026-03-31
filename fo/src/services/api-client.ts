/**
 * Simulates a delay for API calls.
 * @param ms Delay in milliseconds.
 * @returns A promise that resolves after the delay.
 */
export const delay = (ms: number = 1000) =>
  new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Standardized API response format.
 */
export interface ApiResponse<T> {
  data: T;
  status: number;
  message?: string;
}
