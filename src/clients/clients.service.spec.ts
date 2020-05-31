import { Test } from '@nestjs/testing'
import { ClientsService } from './clients.service';
import { ClientDataManagement } from './clients.data-management';
import { GetClientQuery } from './dto/get-client-query.dto';

describe('ClientsService', () => {
    let clientsService;
    let clientDataManegement;

    beforeEach(async () => {
        const module = await Test.createTestingModule({
            providers: [
                ClientsService,
                ClientDataManagement,
            ]
        }).compile();

        clientsService = await module.get<ClientsService>(ClientsService)
        clientDataManegement = await module.get<ClientDataManagement>(ClientDataManagement)
    });

    describe('getClients', () => {
        it('gets all clients from the file', async () => {

            const queryParams: GetClientQuery = { page: 1 };
            const result = await clientsService.getAllClients(queryParams);
            const dataset = [{"address": "123r4t5", "dob": "1995-03-23", "education_background": "NONE", "email": "devkotayash4098@gmail.com", "gender": "MALE", "id": "9745cad0-a30c-11ea-a566-0f476a5d50a8", "name": "Yash", "nationality": "nepal", "phone": "9843584313", "prefered_contact_mode": null}, {"address": "123r4t5", "dob": "1995-03-23", "education_background": "NONE", "email": "devkotayash4098@gmail.com", "gender": "MALE", "id": "bcb85c90-a30e-11ea-a2c0-33ea622684c3", "name": "Yash", "nationality": "nepal", "phone": "9843584313", "prefered_contact_mode": null}, {"address": "123r4t5", "dob": "1995-03-23", "education_background": "NONE", "email": "devkotayash4098@gmail.com", "gender": "MALE", "id": "ca4831a0-a30e-11ea-88d2-c9015d0b2e3a", "name": "Yash", "nationality": "nepal", "phone": "9843584313", "prefered_contact_mode": null}, {"address": "123r4t5", "dob": "1995-03-23", "education_background": "NONE", "email": "devkotayash4098@gmail.com", "gender": "MALE", "id": "37965060-a315-11ea-9520-654dbf454f3b", "name": "Yash", "nationality": "nepal", "phone": "9843584313", "prefered_contact_mode": null}, {"address": "123r4t5", "dob": "1995-03-23", "education_background": "NONE", "email": "devkotayash4098@gmail.com", "gender": "MALE", "id": "f9b70d40-a317-11ea-9520-654dbf454f3b", "name": "Yash", "nationality": "nepal", "phone": "9843584313", "prefered_contact_mode": null}]
            expect(result).toEqual(dataset);

        });

        it('creates a client', async () => {
            const clientData = {
                "name" : "TestCLi",
                "gender" : "MALE",
                "phone" : "1234",
                "email" : "abc@hotmail.com",
                "address" : "123r4t5",
                "nationality" : "nepal",
                "dob" :"1997-03-23",
                "education_background" : "NONE",
                "prefered_contact_mode" : null
            }

            const result = await clientsService.createClient(clientData)
            expect(result).toEqual(clientData);
        });
    });
});