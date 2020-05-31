import { Injectable } from '@nestjs/common';
import { Client } from './client.models';
import { v1 as uuidv1 } from 'uuid';
import { ClientDataManagement } from './clients.data-management';
@Injectable()
export class ClientsService {
    private clientDataManagement = new ClientDataManagement();
    
    getAllClients(queryParams): Client[] {
        const { page } = queryParams;
        const clientData = this.clientDataManagement.getClients();

        if (!page)
            return clientData;

        const sliceFirstParameter = ((page - 1) * 5);
        const sliceSecondParameter = (page * 5);

        return clientData.slice(sliceFirstParameter, sliceSecondParameter);
    }

    createClient(clientData): Client {
        const client = clientData;
        client.id = uuidv1();


        this.clientDataManagement.addClient(client);

        return client;
    }
}
