import { Component, OnInit } from '@angular/core';
import { RequestCreate, ResponseCreate } from '../clientsupplier.model';
import { ClientsupplierService } from '../clientsupplier.service';

@Component({
  selector: 'app-create-clientsupplier',
  templateUrl: './create-clientsupplier.component.html',
  styleUrls: ['./create-clientsupplier.component.css']
})
export class CreateClientsupplierComponent implements OnInit {

  request: RequestCreate = {
    id: 0,
    clientId: 0,
    clientCpf: '',
    clientName: '',
    supplierId: 0,
    supplierName: '',
    supplierCnpj: ''
  }

  response: ResponseCreate
  
  constructor(private clientsupplierService: ClientsupplierService) { }

  ngOnInit(): void {
  }

  save(){
    this.clientsupplierService.createClientSupplier(this.request).subscribe(res => {this.response = res});
  }
}
