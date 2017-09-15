import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';

export class HttpClient {

  constructor(private http: Http) {}

  createAuthorizationHeader(headers: Headers) {
    headers.append('Authorization', 'Basic ' +
      btoa('username:password')); 
  }

  get(url) {
    let headers = new Headers();
    headers.set("Access-Control-Allow-Origin","*");
    headers.set("Access-Control-Allow-Headers","Content-Type");
    headers.set("Access-Control-Allow-Methods","GET,HEAD,POST,DEBUG,PUT,DELETE,PATCH,OPTIONS");
   // this.createAuthorizationHeader(headers);
    return this.http.get(url, {
      headers: headers
    }).subscribe((response) => { return response });
  }

  post(url, data) {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.post(url, data, {
      headers: headers
    });
  }
}