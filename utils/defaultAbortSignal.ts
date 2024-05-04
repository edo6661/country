const DEFAULT_TIMEOUT_MS = 10000;
export const defaultAbortSignal = (timeoutMs = DEFAULT_TIMEOUT_MS) => {
  const controller = new AbortController();
  const timeoutAbort = setTimeout(
    () => controller.abort(),
    timeoutMs || DEFAULT_TIMEOUT_MS
  );
  return {
    signal: controller.signal,
    cleanup: () => clearTimeout(timeoutAbort),
  };
};
