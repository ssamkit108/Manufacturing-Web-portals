import { MatDialogModule } from '@angular/material/dialog';
import { PartsService } from './shared/parts.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CoreModule } from '@core';
import { SharedModule } from '@shared';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PartsComponent } from './parts/parts.component';
import { AddPartsComponent } from './parts/add-parts/add-parts.component';
import { PartsListComponent } from './parts/parts-list/parts-list.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UpdatePartComponent } from './parts/update-part/update-part.component';
import { ViewOrdersComponent } from './parts/view-orders/view-orders.component';
@NgModule({
  imports: [
    MatDialogModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot(),
    NgbModule,
    CoreModule,
    SharedModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    MatDialogModule,
    // must be imported as the last module as it contains the fallback route
  ],
  entryComponents: [AddPartsComponent],
  declarations: [
    AppComponent,
    PartsComponent,
    AddPartsComponent,
    PartsListComponent,
    UpdatePartComponent,
    ViewOrdersComponent,
  ],
  providers: [PartsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
