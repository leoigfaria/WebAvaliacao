import { Component, OnInit } from '@angular/core';
import { RequestCreate, ResponseCreate } from '../client.model';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.css']
})
export class CreateClientComponent implements OnInit {

  request: RequestCreate = {
    name: '',
    cpf: '',
    cep: ''
  }

  response: ResponseCreate
  
  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
  }

  save(){
    this.clientService.createClient(this.request).subscribe(res => {this.response = res});
  }
}
