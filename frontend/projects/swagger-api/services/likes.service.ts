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

import { LikeDto } from '../models/like-dto';

@Injectable({
  providedIn: 'root',
})
export class LikesService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiLikesUsernamePost
   */
  static readonly ApiLikesUsernamePostPath = '/api/Likes/{username}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiLikesUsernamePost()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiLikesUsernamePost$Response(params: {
    username: string;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, LikesService.ApiLikesUsernamePostPath, 'post');
    if (params) {
      rb.path('username', params.username, {});
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
   * To access the full response (for headers, for example), `apiLikesUsernamePost$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiLikesUsernamePost(params: {
    username: string;
  }): Observable<void> {

    return this.apiLikesUsernamePost$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiLikesGet
   */
  static readonly ApiLikesGetPath = '/api/Likes';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiLikesGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiLikesGet$Plain$Response(params?: {
    UserId?: number;
    Predicate?: string;
    PageNumber?: number;
    PageSize?: number;
  }): Observable<StrictHttpResponse<Array<LikeDto>>> {

    const rb = new RequestBuilder(this.rootUrl, LikesService.ApiLikesGetPath, 'get');
    if (params) {
      rb.query('UserId', params.UserId, {});
      rb.query('Predicate', params.Predicate, {});
      rb.query('PageNumber', params.PageNumber, {});
      rb.query('PageSize', params.PageSize, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<LikeDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiLikesGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiLikesGet$Plain(params?: {
    UserId?: number;
    Predicate?: string;
    PageNumber?: number;
    PageSize?: number;
  }): Observable<Array<LikeDto>> {

    return this.apiLikesGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<LikeDto>>) => r.body as Array<LikeDto>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiLikesGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiLikesGet$Json$Response(params?: {
    UserId?: number;
    Predicate?: string;
    PageNumber?: number;
    PageSize?: number;
  }): Observable<StrictHttpResponse<Array<LikeDto>>> {

    const rb = new RequestBuilder(this.rootUrl, LikesService.ApiLikesGetPath, 'get');
    if (params) {
      rb.query('UserId', params.UserId, {});
      rb.query('Predicate', params.Predicate, {});
      rb.query('PageNumber', params.PageNumber, {});
      rb.query('PageSize', params.PageSize, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<LikeDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiLikesGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiLikesGet$Json(params?: {
    UserId?: number;
    Predicate?: string;
    PageNumber?: number;
    PageSize?: number;
  }): Observable<Array<LikeDto>> {

    return this.apiLikesGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<LikeDto>>) => r.body as Array<LikeDto>)
    );
  }

}
