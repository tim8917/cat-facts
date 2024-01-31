// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

import { contextBridge, ipcRenderer  } from "electron";
import apiMethods from './api';

const api = Object.keys(apiMethods).reduce(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (acc: any, methodName: string) => ({...acc, [methodName]: () => ipcRenderer.invoke(methodName)}), 
  {}
);

// bind api methods to IPC 
contextBridge.exposeInMainWorld('api', api);
