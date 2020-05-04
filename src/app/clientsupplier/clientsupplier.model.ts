export interface ResponseClientSuppliers {
    id: number;
    clientId: number;
    clientName: string;
    clientCpf: string;
    supplierId: number;
    supplierName: string;
    supplierCnpj: string;
}

export interface RequestCreate {
    id: number;
    clientId: number;
    supplierId: number;
    clientName: string;
    supplierName: string;
    clientCpf: string;
    supplierCnpj: string;
}

export interface ResponseCreate {
    id: number;
    clientId: number;
    client?: any;
    supplierId: number;
    supplier?: any;
}

//GetUser
export interface ResponseClientSupplier {
    id: number;
    clientId: number;
    supplierId: number;
    clientName: string;
    supplierName: string;
    clientCpf: string;
    supplierCnpj: string;
}