import { Component, OnInit } from '@angular/core';
import { RequestUpdate } from '../supplier.model';
import { SupplierService } from '../supplier.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-supplier',
  templateUrl: './update-supplier.component.html',
  styleUrls: ['./update-supplier.component.css']
})
export class UpdateSupplierComponent implements OnInit {
  
  id: string;
  request: RequestUpdate;

  constructor(private supplierService: SupplierService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.supplierService.getSupplier(this.id).subscribe(res => {
      this.request = {
        id: this.id,
        name: res.name,
        cnpj: res.cnpj,
        cep: res.cep
      }
    });
  }

  update(){
    this.supplierService.updateSupplier(this.id, this.request).subscribe();
    this.router.navigate(['supplier']).then(() => {
      window.location.reload();
      alert('Fornecedor atualizado com sucesso!');
    });
  }

  cancel(){
    this.router.navigate(['supplier']);
  }
}
