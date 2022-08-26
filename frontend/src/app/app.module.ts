import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { NavBarModule } from './components/nav-bar/nav-bar.module';
import { ApiModule } from './swagger-api/api.module';
import { HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ApiConfiguration, ApiConfigurationParams } from './swagger-api/api-configuration';

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
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    NavBarModule,
    ApiModule.forRoot(apiConfigFactory()),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
