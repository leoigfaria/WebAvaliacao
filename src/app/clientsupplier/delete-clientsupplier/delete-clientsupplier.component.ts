import { Component, OnInit } from '@angular/core';
import { ClientsupplierService } from '../clientsupplier.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ResponseClientSupplier } from '../clientsupplier.model';

@Component({
  selector: 'app-delete-clientsupplier',
  templateUrl: './delete-clientsupplier.component.html',
  styleUrls: ['./delete-clientsupplier.component.css']
})
export class DeleteClientsupplierComponent implements OnInit {

  id: string;
  clientsupplier: ResponseClientSupplier;

  constructor(private clientsupplierService: ClientsupplierService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.clientsupplierService.getClientSupplier(this.id).subscribe();
  }

  delete(){
    this.clientsupplierService.deleteClientSupplier(this.id).subscribe();
    this.router.navigate(['clientsupplier']).then(() => {
      window.location.reload();
      alert('Relacionamento removido com sucesso!');
    });
  }

  cancel(){
    this.router.navigate(['clientsupplier']);
  }
}
