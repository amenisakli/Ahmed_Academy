import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateGroupeDto } from './dto/create-groupe.dto';
import { UpdateGroupeDto } from './dto/update-groupe.dto';
import { Groupe } from './entities/groupe.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class GroupeService {

  constructor(
    @InjectRepository(Groupe)
    private groupeRepository: Repository<Groupe>  ){}

 async create(createGroupeDto: CreateGroupeDto) {
    const groupe = await this.groupeRepository.create({...createGroupeDto})
    return this.groupeRepository.save(groupe)
  }

  findAll() {
    return this.groupeRepository.find({ where : {status : true}});
  }

  findOne(id: number) {
    return this.groupeRepository.findOne({where : {id}})
  }

  async update(id: number, updateGroupeDto: UpdateGroupeDto) {
    const groupe = await this.groupeRepository.preload({
      id ,
      ...updateGroupeDto
    })
    if(!groupe){
      new BadRequestException('Somthing Bad')
    }
    return this.groupeRepository.save(groupe)
  }

  async remove(id: number) {
    const groupe = await this.groupeRepository.findOne({where : {id}})
    if(!groupe){
      new BadRequestException('Somthing Bad')
    }
    groupe.status = false
    return this.groupeRepository.save(groupe)
  }
}


