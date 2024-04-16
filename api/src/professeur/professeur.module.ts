import { Module } from '@nestjs/common';
import { ProfesseurService } from './professeur.service';
import { ProfesseurController } from './professeur.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Professeur } from './entities/professeur.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Professeur])],
  controllers: [ProfesseurController],
  providers: [ProfesseurService]
})
export class ProfesseurModule {}
