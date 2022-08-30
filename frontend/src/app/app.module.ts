import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarModule } from './components/nav-bar/nav-bar.module';
import { ApiModule } from './swagger-api/api.module';
import { HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ApiConfiguration, ApiConfigurationParams } from './swagger-api/api-configuration';
import { RegisterModule } from './components/views/register/register.module';
import { StoreModule } from '@ngrx/store';
import {reducer as formReducer} from "./components/views/register/form-state/reducers/form.reducer"

export function apiConfigFactory(): ApiConfiguration {
  const params: ApiConfigurationParams = {
    rootUrl: environment.basePath,
  };
  return new ApiConfiguration(params);
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ApiModule.forRoot(apiConfigFactory()),
    HttpClientModule,
    NavBarModule,
    StoreModule.forRoot({}),
    RegisterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
