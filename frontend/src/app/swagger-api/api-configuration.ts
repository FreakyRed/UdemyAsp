/* tslint:disable */
/* eslint-disable */
import { APP_BASE_HREF } from '@angular/common';
import { Inject, Injectable, Optional } from '@angular/core';

/**
 * Global configuration
 */
@Injectable({
  providedIn: 'root',
})
export class ApiConfiguration {
  rootUrl: string = '';

  constructor(@Optional() @Inject(APP_BASE_HREF) params: ApiConfigurationParams){
    if(params.rootUrl){
      this.rootUrl = params.rootUrl;
    }
  }
}

/**
 * Parameters for `ApiModule.forRoot()`
 */
export interface ApiConfigurationParams {
  rootUrl?: string;
}
