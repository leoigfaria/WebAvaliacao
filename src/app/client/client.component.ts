import { Component, OnInit } from '@angular/core';
import { ClientService } from './client.service';
import { ResponseClients } from './client.model';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  responseClients: ResponseClients;

  constructor(private clientService: ClientService) { }

  displayedColumns: string[] = ['name', 'cpf', 'cep', 'date', 'actions'];

  ngOnInit(): void {
    this.clientService.getClients().subscribe(res => this.responseClients = res);
  }
}
