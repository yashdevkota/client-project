import { Logger } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

export class ClientDataManagement {
    private logger = new Logger('ClientsService');

    addClient = (client) => {
        const clientData = this.getClients();
        clientData.push(client);

        this.saveClient(clientData);

    }

    saveClient = (client) => {
        const jsonString = JSON.stringify(client);
        fs.writeFileSync(path.join(__dirname + '../../../src/clients/data/clients.json'), jsonString);
    }

    getClients = () => {
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