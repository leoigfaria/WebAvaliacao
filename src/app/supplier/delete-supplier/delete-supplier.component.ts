import { Component, OnInit } from '@angular/core';
import { ResponseSupplier } from '../supplier.model';
import { SupplierService } from '../supplier.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete-supplier',
  templateUrl: './delete-supplier.component.html',
  styleUrls: ['./delete-supplier.component.css']
})
export class DeleteSupplierComponent implements OnInit {

  id: string;
  supplier: ResponseSupplier;

  constructor(private supplierService: SupplierService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.supplierService.getSupplier(this.id).subscribe(res => {
      this.supplier = {
        id: Number(this.id),
        name: res.name,
        cnpj: res.cnpj,
        cep: res.cep,
        creationDate: res.creationDate
      }
    });
  }

  delete(){
    this.supplierService.deleteSupplier(this.id).subscribe();
    this.router.navigate(['supplier']).then(() => {
      window.location.reload();
      alert('Fornecedor removido com sucesso!');
    });
  }

  cancel(){
    this.router.navigate(['supplier']);
  }
}
