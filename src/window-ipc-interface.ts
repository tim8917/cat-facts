import apiMethods from './api';

declare global {
  interface Window {
    api: typeof apiMethods;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    fs: any;
  }
}
