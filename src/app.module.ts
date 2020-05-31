import { Module } from '@nestjs/common';
import { ClientsModule } from './clients/clients.module';
import { ClientsController } from './clients/clients.controller';
import { ClientsService } from './clients/clients.service';

@Module({
  imports: [ClientsModule],
  controllers: [ClientsController],
  providers: [ClientsService],
})
export class AppModule {}
