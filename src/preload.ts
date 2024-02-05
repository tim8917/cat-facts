// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

import { contextBridge, ipcRenderer  } from 'electron';
import apiMethods from './api';
import { UserData } from './types/cat-facts';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const reducer = (acc: any, methodName: string) => ({...acc, [methodName]: () => ipcRenderer.invoke(methodName)})

// bind api methods to IPC 
const api = Object.keys(apiMethods).reduce(reducer, {});

contextBridge.exposeInMainWorld('api', api);

contextBridge.exposeInMainWorld('fs', {
  getUserData: () => ipcRenderer.invoke('getUserData'),
  saveUserData: (data: UserData) => ipcRenderer.invoke('saveUserData', data),
});
