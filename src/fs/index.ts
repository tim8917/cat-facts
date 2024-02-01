import { app } from 'electron';
import path from 'node:path';
import {readFile, writeFile} from 'node:fs/promises';
import { APP_USER_DATA_FILENAME } from '../constants';

const userDataFilePath = path.join(app.getPath('userData'), APP_USER_DATA_FILENAME);

const fsMethods = {
  getUserData: async () => {
    let contents;
    let parsedContents = {};

    try {
      contents = await readFile(userDataFilePath, { encoding: 'utf8' });
    } catch (err) {
      console.error(err.message);
    }

    if (contents) {
      try {
        parsedContents = JSON.parse(contents);
      } catch (err) {
        console.error(err.message);
      }
    }

    return parsedContents;
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  saveUserData: async (e: any, data: any) => {
    try { 
      writeFile(userDataFilePath, JSON.stringify(data)); 
    } catch (err) {
      console.error(err.message);
    }
  },
};

export default fsMethods
