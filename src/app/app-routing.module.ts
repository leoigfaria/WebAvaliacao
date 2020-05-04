import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientComponent } from './client/client.component';
import { CreateClientComponent } from './client/create-client/create-client.component';
import { UpdateClientComponent } from './client/update-client/update-client.component';
import { DeleteClientComponent } from './client/delete-client/delete-client.component';
import { DeleteSupplierComponent } from './supplier/delete-supplier/delete-supplier.component';
import { UpdateSupplierComponent } from './supplier/update-supplier/update-supplier.component';
import { CreateSupplierComponent } from './supplier/create-supplier/create-supplier.component';
import { SupplierComponent } from './supplier/supplier.component';
import { ClientsupplierComponent } from './clientsupplier/clientsupplier.component';
import { DeleteClientsupplierComponent } from './clientsupplier/delete-clientsupplier/delete-clientsupplier.component';
import { CreateClientsupplierComponent } from './clientsupplier/create-clientsupplier/create-clientsupplier.component';


const routes: Routes = [
  {path: 'client', component: ClientComponent},
  {path: 'client/create', component: CreateClientComponent},
  {path: 'client/update/:id', component: UpdateClientComponent},
  {path: 'client/delete/:id', component: DeleteClientComponent},
  {path: 'supplier', component: SupplierComponent},
  {path: 'supplier/create', component: CreateSupplierComponent},
  {path: 'supplier/update/:id', component: UpdateSupplierComponent},
  {path: 'supplier/delete/:id', component: DeleteSupplierComponent},
  {path: 'clientsupplier', component: ClientsupplierComponent},
  {path: 'clientsupplier/delete/:id', component: DeleteClientsupplierComponent},
  {path: 'clientsupplier/create', component: CreateClientsupplierComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
