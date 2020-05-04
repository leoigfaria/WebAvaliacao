import { Component, OnInit } from '@angular/core';
import { RequestCreate, ResponseCreate } from '../supplier.model';
import { SupplierService } from '../supplier.service';

@Component({
  selector: 'app-create-supplier',
  templateUrl: './create-supplier.component.html',
  styleUrls: ['./create-supplier.component.css']
})
export class CreateSupplierComponent implements OnInit {
  request: RequestCreate = {
    name: '',
    cnpj: '',
    cep: ''
  }

  response: ResponseCreate
  
  constructor(private supplierService: SupplierService) { }

  ngOnInit(): void {
  }

  save(){
    this.supplierService.createSupplier(this.request).subscribe(res => {this.response = res});
  }
}
