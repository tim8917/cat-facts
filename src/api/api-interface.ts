import methods from '.';

declare global {
  interface Window {
    api: typeof methods;
  }
}
