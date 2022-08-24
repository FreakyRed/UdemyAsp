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


@Injectable({
  providedIn: 'root',
})
export class AdminService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiAdminUsersWithRolesGet
   */
  static readonly ApiAdminUsersWithRolesGetPath = '/api/Admin/users-with-roles';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAdminUsersWithRolesGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdminUsersWithRolesGet$Response(params?: {
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, AdminService.ApiAdminUsersWithRolesGetPath, 'get');
    if (params) {
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
   * To access the full response (for headers, for example), `apiAdminUsersWithRolesGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdminUsersWithRolesGet(params?: {
  }): Observable<void> {

    return this.apiAdminUsersWithRolesGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiAdminEditRolesUsernamePost
   */
  static readonly ApiAdminEditRolesUsernamePostPath = '/api/Admin/edit-roles/{username}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAdminEditRolesUsernamePost()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdminEditRolesUsernamePost$Response(params: {
    username: string;
    roles?: string;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, AdminService.ApiAdminEditRolesUsernamePostPath, 'post');
    if (params) {
      rb.path('username', params.username, {});
      rb.query('roles', params.roles, {});
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
   * To access the full response (for headers, for example), `apiAdminEditRolesUsernamePost$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdminEditRolesUsernamePost(params: {
    username: string;
    roles?: string;
  }): Observable<void> {

    return this.apiAdminEditRolesUsernamePost$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiAdminPhotosToModerateGet
   */
  static readonly ApiAdminPhotosToModerateGetPath = '/api/Admin/photos-to-moderate';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAdminPhotosToModerateGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdminPhotosToModerateGet$Response(params?: {
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, AdminService.ApiAdminPhotosToModerateGetPath, 'get');
    if (params) {
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
   * To access the full response (for headers, for example), `apiAdminPhotosToModerateGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdminPhotosToModerateGet(params?: {
  }): Observable<void> {

    return this.apiAdminPhotosToModerateGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
