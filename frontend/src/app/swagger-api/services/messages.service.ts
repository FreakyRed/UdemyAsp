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

import { CreateMessageDto } from '../models/create-message-dto';
import { MessageDto } from '../models/message-dto';

@Injectable({
  providedIn: 'root',
})
export class MessagesService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiMessagesGet
   */
  static readonly ApiMessagesGetPath = '/api/Messages';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiMessagesGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMessagesGet$Plain$Response(params?: {
    Username?: string;
    Container?: string;
    PageNumber?: number;
    PageSize?: number;
  }): Observable<StrictHttpResponse<Array<MessageDto>>> {

    const rb = new RequestBuilder(this.rootUrl, MessagesService.ApiMessagesGetPath, 'get');
    if (params) {
      rb.query('Username', params.Username, {});
      rb.query('Container', params.Container, {});
      rb.query('PageNumber', params.PageNumber, {});
      rb.query('PageSize', params.PageSize, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<MessageDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiMessagesGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMessagesGet$Plain(params?: {
    Username?: string;
    Container?: string;
    PageNumber?: number;
    PageSize?: number;
  }): Observable<Array<MessageDto>> {

    return this.apiMessagesGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<MessageDto>>) => r.body as Array<MessageDto>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiMessagesGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMessagesGet$Json$Response(params?: {
    Username?: string;
    Container?: string;
    PageNumber?: number;
    PageSize?: number;
  }): Observable<StrictHttpResponse<Array<MessageDto>>> {

    const rb = new RequestBuilder(this.rootUrl, MessagesService.ApiMessagesGetPath, 'get');
    if (params) {
      rb.query('Username', params.Username, {});
      rb.query('Container', params.Container, {});
      rb.query('PageNumber', params.PageNumber, {});
      rb.query('PageSize', params.PageSize, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<MessageDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiMessagesGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMessagesGet$Json(params?: {
    Username?: string;
    Container?: string;
    PageNumber?: number;
    PageSize?: number;
  }): Observable<Array<MessageDto>> {

    return this.apiMessagesGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<MessageDto>>) => r.body as Array<MessageDto>)
    );
  }

  /**
   * Path part for operation apiMessagesPost
   */
  static readonly ApiMessagesPostPath = '/api/Messages';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiMessagesPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiMessagesPost$Plain$Response(params?: {
    body?: CreateMessageDto
  }): Observable<StrictHttpResponse<MessageDto>> {

    const rb = new RequestBuilder(this.rootUrl, MessagesService.ApiMessagesPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<MessageDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiMessagesPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiMessagesPost$Plain(params?: {
    body?: CreateMessageDto
  }): Observable<MessageDto> {

    return this.apiMessagesPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<MessageDto>) => r.body as MessageDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiMessagesPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiMessagesPost$Json$Response(params?: {
    body?: CreateMessageDto
  }): Observable<StrictHttpResponse<MessageDto>> {

    const rb = new RequestBuilder(this.rootUrl, MessagesService.ApiMessagesPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<MessageDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiMessagesPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiMessagesPost$Json(params?: {
    body?: CreateMessageDto
  }): Observable<MessageDto> {

    return this.apiMessagesPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<MessageDto>) => r.body as MessageDto)
    );
  }

  /**
   * Path part for operation apiMessagesThreadUsernameGet
   */
  static readonly ApiMessagesThreadUsernameGetPath = '/api/Messages/thread/{username}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiMessagesThreadUsernameGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMessagesThreadUsernameGet$Plain$Response(params: {
    username: string;
  }): Observable<StrictHttpResponse<Array<MessageDto>>> {

    const rb = new RequestBuilder(this.rootUrl, MessagesService.ApiMessagesThreadUsernameGetPath, 'get');
    if (params) {
      rb.path('username', params.username, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<MessageDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiMessagesThreadUsernameGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMessagesThreadUsernameGet$Plain(params: {
    username: string;
  }): Observable<Array<MessageDto>> {

    return this.apiMessagesThreadUsernameGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<MessageDto>>) => r.body as Array<MessageDto>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiMessagesThreadUsernameGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMessagesThreadUsernameGet$Json$Response(params: {
    username: string;
  }): Observable<StrictHttpResponse<Array<MessageDto>>> {

    const rb = new RequestBuilder(this.rootUrl, MessagesService.ApiMessagesThreadUsernameGetPath, 'get');
    if (params) {
      rb.path('username', params.username, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<MessageDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiMessagesThreadUsernameGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMessagesThreadUsernameGet$Json(params: {
    username: string;
  }): Observable<Array<MessageDto>> {

    return this.apiMessagesThreadUsernameGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<MessageDto>>) => r.body as Array<MessageDto>)
    );
  }

  /**
   * Path part for operation apiMessagesIdDelete
   */
  static readonly ApiMessagesIdDeletePath = '/api/Messages/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiMessagesIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMessagesIdDelete$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MessagesService.ApiMessagesIdDeletePath, 'delete');
    if (params) {
      rb.path('id', params.id, {});
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
   * To access the full response (for headers, for example), `apiMessagesIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiMessagesIdDelete(params: {
    id: number;
  }): Observable<void> {

    return this.apiMessagesIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
