import { Module } from '@nestjs/common';
import { GroupeService } from './groupe.service';
import { GroupeController } from './groupe.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Groupe } from './entities/groupe.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Groupe])],
  controllers: [GroupeController],
  providers: [GroupeService]
})
export class GroupeModule {}
