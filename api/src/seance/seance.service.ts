import { Injectable } from '@nestjs/common';
import { CreateSeanceDto } from './dto/create-seance.dto';
import { UpdateSeanceDto } from './dto/update-seance.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Seance } from './entities/seance.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SeanceService {
  constructor( 
    @InjectRepository(Seance)
    private seanceRepository: Repository<Seance>
  ){}
  async create(createSeanceDto: CreateSeanceDto) {
    const seance = await this.seanceRepository.create ({ ...createSeanceDto})
    return this.seanceRepository.save(seance);
  }

  findAll() {
    return `This action returns all seance`;
  }

  findOne(id: number) {
    return `This action returns a #${id} seance`;
  }

  update(id: number, updateSeanceDto: UpdateSeanceDto) {
    return `This action updates a #${id} seance`;
  }

  remove(id: number) {
    return `This action removes a #${id} seance`;
  }
}
