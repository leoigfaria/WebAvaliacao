import { Component, OnInit } from '@angular/core';
import { ResponseSuppliers } from './supplier.model';
import { SupplierService } from './supplier.service';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css']
})
export class SupplierComponent implements OnInit {

  responseSuppliers: ResponseSuppliers;

  displayedColumns: string[] = ['name', 'cnpj', 'cep', 'date', 'actions'];

  constructor(private supplierService: SupplierService) { }

  ngOnInit(): void {
    this.supplierService.getSuppliers().subscribe(res => this.responseSuppliers = res)
  }

}
