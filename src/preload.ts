// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

import { contextBridge, ipcRenderer  } from 'electron';
import apiMethods from './api';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const reducer = (acc: any, methodName: string) => ({...acc, [methodName]: () => ipcRenderer.invoke(methodName)})

// bind api methods to IPC 
const api = Object.keys(apiMethods).reduce(reducer, {});

contextBridge.exposeInMainWorld('api', api);

contextBridge.exposeInMainWorld('fs', {
  getUserData: () => ipcRenderer.invoke('getUserData'),
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  saveUserData: (data: any) => ipcRenderer.invoke('saveUserData', data),
});
