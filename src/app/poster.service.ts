import { Injectable } from '@angular/core';
import {Headers, Http} from "@angular/http";
import {Stamp} from "./stamp";

import 'rxjs/add/operator/toPromise';

@Injectable()
export class PosterService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private postUrl = 'http://localhost:3000/shift'; // TODO: Add backend ip in production

  constructor(private http: Http) { }

  postEnter(stamp: string): Promise<Stamp> {
    const url = `${this.postUrl}/enter`;
    return this.http
      .post(url, JSON.stringify({badge: stamp}), {headers: this.headers})
      .toPromise()
      .then( res => res.json as any)
      .catch(this.handleError);
  }
  postExit(stamp: string): Promise<Stamp> {
    const url = `${this.postUrl}/exit`;
    return this.http
      .post(url, JSON.stringify({badge: stamp}), {headers: this.headers})
      .toPromise()
      .then( res => res.json as any)
      .catch(this.handleError);
  }
  private handleError(error :any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
