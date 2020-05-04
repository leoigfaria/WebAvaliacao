import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientComponent } from './client/client.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateClientComponent } from './client/create-client/create-client.component';
import { FormsModule } from "@angular/forms";
import { UpdateClientComponent } from './client/update-client/update-client.component';
import { DeleteClientComponent } from './client/delete-client/delete-client.component';
import { SupplierComponent } from './supplier/supplier.component';
import { CreateSupplierComponent } from './supplier/create-supplier/create-supplier.component';
import { UpdateSupplierComponent } from './supplier/update-supplier/update-supplier.component';
import { DeleteSupplierComponent } from './supplier/delete-supplier/delete-supplier.component';
import { ClientsupplierComponent } from './clientsupplier/clientsupplier.component';
import { DeleteClientsupplierComponent } from './clientsupplier/delete-clientsupplier/delete-clientsupplier.component';
import { CreateClientsupplierComponent } from './clientsupplier/create-clientsupplier/create-clientsupplier.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    CreateClientComponent,
    UpdateClientComponent,
    DeleteClientComponent,
    SupplierComponent,
    CreateSupplierComponent,
    UpdateSupplierComponent,
    DeleteSupplierComponent,
    ClientsupplierComponent,
    DeleteClientsupplierComponent,
    CreateClientsupplierComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatTabsModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
