declare let NODE_ENV: string;
declare let _HASH_: string;
declare let _COMMIT_DATE_: string;
declare let _BUILD_TIME_: string;

declare namespace NodeJS {
  interface Global {
    defaultLogin: string;
    defaultLoginPass: string;
  }
}

declare module '*.jpg';
declare module '*.png';
declare module '*.svg';
