import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientService } from '../client.service';
import { ResponseClient } from '../client.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-client',
  templateUrl: './delete-client.component.html',
  styleUrls: ['./delete-client.component.css']
})
export class DeleteClientComponent implements OnInit {

  id: string;
  client: ResponseClient;

  constructor(private clientService: ClientService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.clientService.getClient(this.id).subscribe(res => {
      this.client = {
        id: Number(this.id),
        name: res.name,
        cpf: res.cpf,
        cep: res.cep,
        creationDate: res.creationDate
      }
    });
  }

  delete(){
    this.clientService.deleteClient(this.id).subscribe();
    this.router.navigate(['client']).then(() => {
      window.location.reload();
      alert('Cliente removido com sucesso!');
    });
  }

  cancel(){
    this.router.navigate(['client']);
  }
}
