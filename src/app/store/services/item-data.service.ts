import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { delay } from 'rxjs/operators';
import { api, fakeDelays } from '@app/store/services/data.service';
import { Item } from '@app/core';

@Injectable()
export class ItemDataService {
  constructor(private http: HttpClient) { }

  getItems(count: number): Observable<Item[]> {
    return this.http
      .get<Array<Item>>(
        // `${api}?_start=${count < 48 ? 0 : count - 48}&_end=${count}`
        `${api}?_start=${count - 48}&_end=${count}`
      )
      .pipe(
        delay(fakeDelays.select)
        // catchError(this.handleError(items))
      );
  }

  /*  private handleError<T>(requestData?: T) {
    return (res: HttpErrorResponse) => {
      const error = new DataServiceError(res.error, requestData);
      console.error(error);
      return new ErrorObservable(error);
    };
  } */
}
