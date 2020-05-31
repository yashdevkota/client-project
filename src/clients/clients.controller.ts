import { Controller, Get, Post, Body, UsePipes, ValidationPipe, Logger } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { Client } from './client.models';
import { CreateClientDto } from './dto/create-client.dto';

@Controller('clients')
export class ClientsController {
    private logger = new Logger('ClientsController');

    constructor(private clientService: ClientsService) { }

    @Get()
    getAllClients(): Client[] {
        this.logger.verbose('Getting tasks.');
        return this.clientService.getAllClients();
    }

    @Post()
    @UsePipes(ValidationPipe)
    createClient(@Body() clientData : CreateClientDto): Client{
        this.logger.verbose('Creating task from data ' + JSON.stringify(clientData));
        return this.clientService.createClient(clientData);
    }
}
