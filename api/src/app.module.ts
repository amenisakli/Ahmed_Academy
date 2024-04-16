import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SalleModule } from './salle/salle.module';
import { MatiereModule } from './matiere/matiere.module';
import { GroupeModule } from './groupe/groupe.module';
import { SeanceModule } from './seance/seance.module';
import { ProfesseurModule } from './professeur/professeur.module';
import { EleveModule } from './eleve/eleve.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1234',
      database: 'Ahmed_Academy',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
      autoLoadEntities: true,
  
    }),
    SalleModule, MatiereModule, GroupeModule, SeanceModule, ProfesseurModule, EleveModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
