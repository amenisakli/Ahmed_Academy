import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateEleveDto } from './dto/create-eleve.dto';
import { UpdateEleveDto } from './dto/update-eleve.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Eleve } from './entities/eleve.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EleveService {
  constructor(
    @InjectRepository(Eleve)
    private eleveRepository: Repository<Eleve>
  ) { }

  async create(createEleveDto: CreateEleveDto) {
    const eleve = await this.eleveRepository.create({ ...createEleveDto })
    return this.eleveRepository.save(eleve)
  }

  async findAll() {
    return await this.eleveRepository.createQueryBuilder('Eleve')
      .leftJoinAndSelect('Eleve.ProfId', 'prof')
      .leftJoinAndSelect('Eleve.matiereId', 'matiere')
      .leftJoinAndSelect('Eleve.groupeId', 'groupe')
      .select(['Eleve.id', 'Eleve.name', 'Eleve.lastname', 'Eleve.status', 'Eleve.tel', 'Eleve.telParent', 'prof.id', 'prof.name', 'prof.lastname', 'prof.tel', 'matiere.id', 'matiere.name', 'groupe.id', 'groupe.name'])
      .where('Eleve.status = true')
      .getMany()
  }

  async findOne(id: number) {
    return this.eleveRepository.createQueryBuilder('Eleve')
      .leftJoinAndSelect('Eleve.ProfId', 'prof')
      .leftJoinAndSelect('Eleve.matiereId', 'matiere')
      .leftJoinAndSelect('Eleve.groupeId', 'groupe')
      .select(['Eleve.id', 'Eleve.name', 'Eleve.lastname', 'Eleve.status', 'Eleve.tel', 'Eleve.telParent', 'prof.id', 'prof.name', 'prof.lastname', 'prof.tel', 'matiere.id', 'matiere.name', 'groupe.id', 'groupe.name'])
      .where('Eleve.id = :id', { id: id })
      .getOne()
  }
  async findOneByProfMat(idProf: number,idMat: number, idGrp:number) {
    return this.eleveRepository.createQueryBuilder('Eleve')
      .leftJoinAndSelect('Eleve.ProfId', 'prof')
      .leftJoinAndSelect('Eleve.matiereId', 'matiere')
      .leftJoinAndSelect('Eleve.groupeId', 'groupe')
      .select(['Eleve.id', 'Eleve.name', 'Eleve.lastname', 'Eleve.status', 'Eleve.tel', 'Eleve.telParent', 'prof.id', 'prof.name', 'prof.lastname', 'prof.tel', 'matiere.id', 'matiere.name', 'groupe.id', 'groupe.name'])
      .where('prof.id = :id AND matiere.id = :idM AND groupe.id = :idG', { id: idProf, idM:idMat, idG:idGrp})
      .getMany()
  } 
  async update(id: number, updateEleveDto: UpdateEleveDto) {
    const eleve = await this.eleveRepository.preload({
      id,
      ...updateEleveDto
    })
    if (!eleve) {
      new BadRequestException('Somthing Bad')
    }
    return this.eleveRepository.save(eleve)
  }

  async remove(id: number) {
    const eleve = await this.eleveRepository.findOneBy({ id })
    if (!eleve) {
      new BadRequestException('Somthing Bad')
    }
    eleve.status = false
    return this.eleveRepository.save(eleve)
  }
}
