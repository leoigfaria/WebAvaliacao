export interface ResponseSuppliers {
    id: number;
    name: string;
    cnpj: string;
    cep: string;
    creationDate: Date;
    suppliers?: any;
}

export interface RequestCreate {
    name: string;
    cnpj: string;
    cep: string;
}

export interface ResponseCreate {
    id: number;
    name: string;
    cnpj: string;
    cep: string;
    creationDate: Date;
    suppliers?: any;
}

//GetUser
export interface ResponseSupplier {
    id: number;
    name: string;
    cnpj: string;
    cep: string;
    creationDate: Date;
    suppliers?: any;
}

export interface RequestUpdate {
    id: string;
    name: string;
    cnpj: string;
    cep: string;
}
