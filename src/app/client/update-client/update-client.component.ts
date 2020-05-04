import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';
import { ActivatedRoute } from '@angular/router';
import { RequestUpdate } from '../client.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-client',
  templateUrl: './update-client.component.html',
  styleUrls: ['./update-client.component.css']
})
export class UpdateClientComponent implements OnInit {

  id: string;
  request: RequestUpdate;

  constructor(private clientService: ClientService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.clientService.getClient(this.id).subscribe(res => {
      this.request = {
        id: this.id,
        name: res.name,
        cpf: res.cpf,
        cep: res.cep
      }
    });
  }

  update(){
    this.clientService.updateClient(this.id, this.request).subscribe();
    this.router.navigate(['client']).then(() => {
      window.location.reload();
      alert('Cliente atualizado com sucesso!');
    });
  }

  cancel(){
    this.router.navigate(['client']);
  }
}
