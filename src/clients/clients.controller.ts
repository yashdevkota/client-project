import { Controller, Get, Post, Body, UsePipes, ValidationPipe, Logger, Query } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { Client } from './client.models';
import { CreateClientDto } from './dto/create-client.dto';
import { GetClientQuery } from './dto/get-client-query.dto';

@Controller('clients')
export class ClientsController {
    private logger = new Logger('ClientsController');

    constructor(private clientService: ClientsService) { }

    @Get()
    getAllClients(@Query(ValidationPipe) queryParams : GetClientQuery): Client[] {
        this.logger.verbose('Getting tasks.');
        return this.clientService.getAllClients(queryParams);
    }

    @Post()
    @UsePipes(ValidationPipe)
    createClient(@Body() clientData : CreateClientDto): Client{
        this.logger.verbose('Creating task from data ' + JSON.stringify(clientData));
        return this.clientService.createClient(clientData);
    }
}
