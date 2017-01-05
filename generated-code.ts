namespace API.Client {
  'use strict';

  export class DefaultApi {
    get(callback: (str: string) => void){
      callback('foo');
    }
  }
}
