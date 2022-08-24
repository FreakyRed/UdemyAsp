/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { MemberDto } from '../models/member-dto';
import { MemberUpdateDto } from '../models/member-update-dto';
import { PhotoDto } from '../models/photo-dto';

@Injectable({
  providedIn: 'root',
})
export class UsersService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiUsersGet
   */
  static readonly ApiUsersGetPath = '/api/Users';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUsersGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUsersGet$Plain$Response(params?: {
    CurrentUsername?: string;
    Gender?: string;
    MinAge?: number;
    MaxAge?: number;
    OrderBy?: string;
    PageNumber?: number;
    PageSize?: number;
  }): Observable<StrictHttpResponse<Array<MemberDto>>> {

    const rb = new RequestBuilder(this.rootUrl, UsersService.ApiUsersGetPath, 'get');
    if (params) {
      rb.query('CurrentUsername', params.CurrentUsername, {});
      rb.query('Gender', params.Gender, {});
      rb.query('MinAge', params.MinAge, {});
      rb.query('MaxAge', params.MaxAge, {});
      rb.query('OrderBy', params.OrderBy, {});
      rb.query('PageNumber', params.PageNumber, {});
      rb.query('PageSize', params.PageSize, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<MemberDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUsersGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUsersGet$Plain(params?: {
    CurrentUsername?: string;
    Gender?: string;
    MinAge?: number;
    MaxAge?: number;
    OrderBy?: string;
    PageNumber?: number;
    PageSize?: number;
  }): Observable<Array<MemberDto>> {

    return this.apiUsersGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<MemberDto>>) => r.body as Array<MemberDto>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUsersGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUsersGet$Json$Response(params?: {
    CurrentUsername?: string;
    Gender?: string;
    MinAge?: number;
    MaxAge?: number;
    OrderBy?: string;
    PageNumber?: number;
    PageSize?: number;
  }): Observable<StrictHttpResponse<Array<MemberDto>>> {

    const rb = new RequestBuilder(this.rootUrl, UsersService.ApiUsersGetPath, 'get');
    if (params) {
      rb.query('CurrentUsername', params.CurrentUsername, {});
      rb.query('Gender', params.Gender, {});
      rb.query('MinAge', params.MinAge, {});
      rb.query('MaxAge', params.MaxAge, {});
      rb.query('OrderBy', params.OrderBy, {});
      rb.query('PageNumber', params.PageNumber, {});
      rb.query('PageSize', params.PageSize, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<MemberDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUsersGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUsersGet$Json(params?: {
    CurrentUsername?: string;
    Gender?: string;
    MinAge?: number;
    MaxAge?: number;
    OrderBy?: string;
    PageNumber?: number;
    PageSize?: number;
  }): Observable<Array<MemberDto>> {

    return this.apiUsersGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<MemberDto>>) => r.body as Array<MemberDto>)
    );
  }

  /**
   * Path part for operation apiUsersPut
   */
  static readonly ApiUsersPutPath = '/api/Users';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUsersPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUsersPut$Response(params?: {
    body?: MemberUpdateDto
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, UsersService.ApiUsersPutPath, 'put');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUsersPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUsersPut(params?: {
    body?: MemberUpdateDto
  }): Observable<void> {

    return this.apiUsersPut$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation getUser
   */
  static readonly GetUserPath = '/api/Users/{username}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getUser$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUser$Plain$Response(params: {
    username: string;
  }): Observable<StrictHttpResponse<MemberDto>> {

    const rb = new RequestBuilder(this.rootUrl, UsersService.GetUserPath, 'get');
    if (params) {
      rb.path('username', params.username, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<MemberDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getUser$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUser$Plain(params: {
    username: string;
  }): Observable<MemberDto> {

    return this.getUser$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<MemberDto>) => r.body as MemberDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getUser$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUser$Json$Response(params: {
    username: string;
  }): Observable<StrictHttpResponse<MemberDto>> {

    const rb = new RequestBuilder(this.rootUrl, UsersService.GetUserPath, 'get');
    if (params) {
      rb.path('username', params.username, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<MemberDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getUser$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUser$Json(params: {
    username: string;
  }): Observable<MemberDto> {

    return this.getUser$Json$Response(params).pipe(
      map((r: StrictHttpResponse<MemberDto>) => r.body as MemberDto)
    );
  }

  /**
   * Path part for operation apiUsersAddPhotoPost
   */
  static readonly ApiUsersAddPhotoPostPath = '/api/Users/add-photo';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUsersAddPhotoPost$Plain()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiUsersAddPhotoPost$Plain$Response(params?: {
    body?: {
'file'?: Blob;
}
  }): Observable<StrictHttpResponse<PhotoDto>> {

    const rb = new RequestBuilder(this.rootUrl, UsersService.ApiUsersAddPhotoPostPath, 'post');
    if (params) {
      rb.body(params.body, 'multipart/form-data');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<PhotoDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUsersAddPhotoPost$Plain$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiUsersAddPhotoPost$Plain(params?: {
    body?: {
'file'?: Blob;
}
  }): Observable<PhotoDto> {

    return this.apiUsersAddPhotoPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<PhotoDto>) => r.body as PhotoDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUsersAddPhotoPost$Json()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiUsersAddPhotoPost$Json$Response(params?: {
    body?: {
'file'?: Blob;
}
  }): Observable<StrictHttpResponse<PhotoDto>> {

    const rb = new RequestBuilder(this.rootUrl, UsersService.ApiUsersAddPhotoPostPath, 'post');
    if (params) {
      rb.body(params.body, 'multipart/form-data');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<PhotoDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUsersAddPhotoPost$Json$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiUsersAddPhotoPost$Json(params?: {
    body?: {
'file'?: Blob;
}
  }): Observable<PhotoDto> {

    return this.apiUsersAddPhotoPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<PhotoDto>) => r.body as PhotoDto)
    );
  }

  /**
   * Path part for operation apiUsersSetMainPhotoPhotoIdPut
   */
  static readonly ApiUsersSetMainPhotoPhotoIdPutPath = '/api/Users/set-main-photo/{photoId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUsersSetMainPhotoPhotoIdPut()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUsersSetMainPhotoPhotoIdPut$Response(params: {
    photoId: number;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, UsersService.ApiUsersSetMainPhotoPhotoIdPutPath, 'put');
    if (params) {
      rb.path('photoId', params.photoId, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUsersSetMainPhotoPhotoIdPut$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUsersSetMainPhotoPhotoIdPut(params: {
    photoId: number;
  }): Observable<void> {

    return this.apiUsersSetMainPhotoPhotoIdPut$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiUsersDeletePhotoPhotoIdDelete
   */
  static readonly ApiUsersDeletePhotoPhotoIdDeletePath = '/api/Users/delete-photo/{photoId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUsersDeletePhotoPhotoIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUsersDeletePhotoPhotoIdDelete$Response(params: {
    photoId: number;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, UsersService.ApiUsersDeletePhotoPhotoIdDeletePath, 'delete');
    if (params) {
      rb.path('photoId', params.photoId, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUsersDeletePhotoPhotoIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUsersDeletePhotoPhotoIdDelete(params: {
    photoId: number;
  }): Observable<void> {

    return this.apiUsersDeletePhotoPhotoIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
