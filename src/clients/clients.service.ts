import { Injectable, Logger } from '@nestjs/common';
import { Client } from './client.models';
import { v1 as uuidv1 } from 'uuid';
import * as fs from 'fs';
import * as path from 'path';
@Injectable()
export class ClientsService {
    private logger = new Logger('ClientsService');

    getAllClients(queryParams): Client[] {
        const { page } = queryParams;
        const clientData = this.loadClientData();

        if (!page)
            return clientData;

        const sliceFirstParameter = ((page - 1) * 5);
        const sliceSecondParameter = (page * 5);

        return clientData.slice(sliceFirstParameter, sliceSecondParameter);
    }

    createClient(clientData): Client {
        const client = clientData;
        client.id = uuidv1();


        this.addClientData(client);

        return client;
    }

    addClientData = (client) => {
        const clientData = this.loadClientData();
        clientData.push(client);

        this.saveClientData(clientData);

    }

    saveClientData = (client) => {
        const jsonString = JSON.stringify(client);
        fs.writeFileSync(path.join(__dirname + '../../../src/clients/data/clients.json'), jsonString);
    }

    loadClientData = () => {
        try {
            const existingClients = fs.readFileSync(path.join(__dirname + '../../../src/clients/data/clients.json'));
            const dataJson = existingClients.toString();

            return JSON.parse(dataJson);
        } catch (e) {
            this.logger.error('No clients yet. Returning empty array.');
            return [];
        }

    }
}
