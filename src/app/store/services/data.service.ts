
export const api = 'http://localhost:3000/items';

export const fakeDelays = { select: 1000, save: 200 };

export class DataServiceError<T> {
  constructor(public error: any, public requestData: T) { }
}
