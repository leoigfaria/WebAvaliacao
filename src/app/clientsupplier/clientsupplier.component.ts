import { Component, OnInit } from '@angular/core';
import { ClientsupplierService } from './clientsupplier.service';
import { ResponseClientSuppliers } from './clientsupplier.model';

@Component({
  selector: 'app-clientsupplier',
  templateUrl: './clientsupplier.component.html',
  styleUrls: ['./clientsupplier.component.css']
})
export class ClientsupplierComponent implements OnInit {

  responseClientSuppliers: ResponseClientSuppliers;

  displayedColumns: string[] = ['clientName', 'clientCpf', 'supplierName', 'supplierCnpj', 'actions'];

  constructor(private clientsupplierService: ClientsupplierService) { }

  ngOnInit(): void {
    this.clientsupplierService.getClientSuppliers().subscribe(res => this.responseClientSuppliers = res)
  }

}
