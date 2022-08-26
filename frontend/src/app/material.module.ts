import { NgModule } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field'; 

@NgModule({
  imports: [MatToolbarModule, MatSidenavModule, MatIconModule, MatButtonModule, MatCardModule, MatFormFieldModule],
  exports: [MatToolbarModule, MatSidenavModule, MatIconModule, MatButtonModule, MatCardModule, MatFormFieldModule],
})
export class MaterialModule {}