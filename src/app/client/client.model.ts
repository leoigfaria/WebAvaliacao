export interface ResponseClients {
    id: number;
    name: string;
    cpf: string;
    cep: string;
    creationDate: Date;
    suppliers?: any;
}

export interface RequestCreate {
    name: string;
    cpf: string;
    cep: string;
}

export interface ResponseCreate {
    id: number;
    name: string;
    cpf: string;
    cep: string;
    creationDate: Date;
    suppliers?: any;
}

//GetUser
export interface ResponseClient {
    id: number;
    name: string;
    cpf: string;
    cep: string;
    creationDate: Date;
    suppliers?: any;
}

export interface RequestUpdate {
    id: string;
    name: string;
    cpf: string;
    cep: string;
}
