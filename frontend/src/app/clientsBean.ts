// FILE: frontend/src/app/clientsBean.ts
export interface IClient {
    id: number;
    firstName: string;
    lastName: string;
    emailId: string;
    creditLimit: number;
}

export class ClientsBean implements IClient {
    id: number = 0;
    firstName: string = '';
    lastName: string = '';
    emailId: string = '';
    creditLimit: number = 0;

    constructor(data?: Partial<IClient>) {
        if (data) {
            Object.assign(this, data);
        }
    }
}
