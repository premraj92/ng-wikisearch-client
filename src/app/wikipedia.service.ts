import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';

interface WikpediaApiResponse {
    query: {
      search: {
        title: string;
        snippet: string;
        pageid: number;
        wordcount: number;
      }[]
    };
}


@Injectable({
  providedIn: 'root'
})
export class WikipediaService {

  constructor(private http: HttpClient) { }

  onWikiApiFetch(term: string) {
    console.log('we are making a api call to wikipedia');

    return this.http.get<WikpediaApiResponse>('https://en.wikipedia.org/w/api.php' , {
      params: {
        action: 'query',
        format: 'json',
        list: 'search',
        utf8: '1',
        srsearch: term,
        origin: '*'

      }
    })
    .pipe(
       pluck('query' , 'search')
    );
  }
}


// The below code is just a basic example to show the type of uses RxJs can have when used with Type script especially how useful generic
// types(classes & functions) can have when used to teach typescript about the type of data coming out of Observables used in services
// & wherever those subscribers exist for that particular Observable that consume that data, so that typescript helps us find data & type
// errors that can be created due to any small change in how a subscriber uses data from Observable in development phase

// interface Car {
//   model: string;
//   color: string;
//   Powertrain: string;

//   maker: {
//     brand: string;
//     founded: number
//   };
// }


// const dummyObservable = new Observable<Car>((subscriber) => {
//   subscriber.next({
//     model: 'Nexon',
//     color: 'Blue',
//     Powertrain: 'Electric',

//     maker: {
//       brand: 'Tata',
//       founded: 1960
//     }
//   });
// }).pipe(
//   pluck('maker' , 'brand')
// );


// dummyObservable.subscribe((value) => {
//   console.log('The value from dummy observable is ' , value);
// });
