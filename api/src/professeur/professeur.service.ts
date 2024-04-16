import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateProfesseurDto } from './dto/create-professeur.dto';
import { UpdateProfesseurDto } from './dto/update-professeur.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Professeur } from './entities/professeur.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProfesseurService {

  constructor(
    @InjectRepository(Professeur)
    private professeurRepository: Repository<Professeur>
  ) { }

  async create(createProfesseurDto: CreateProfesseurDto) {
    const prof = await this.professeurRepository.create({ ...createProfesseurDto })
    return this.professeurRepository.save(prof)
  }

  async findAll() {
    return this.professeurRepository.createQueryBuilder('Professeur')
      .leftJoinAndSelect('Professeur.matiereId', 'matiere')
      .select(['Professeur.id', 'Professeur.name', 'Professeur.lastname', 'Professeur.email', 'Professeur.tel', 'Professeur.status', 'matiere.id', 'matiere.name', 'matiere.status'])
      .where('Professeur.status = true')
      .andWhere('matiere.status = true')
      .getMany()
  }

  async findOne(id: number) {
    return this.professeurRepository.createQueryBuilder('Professeur')
    .leftJoinAndSelect('Professeur.matiereId', 'matiere')
    .select(['Professeur.id', 'Professeur.name', 'Professeur.lastname', 'Professeur.email', 'Professeur.tel', 'Professeur.status', 'matiere.id', 'matiere.name', 'matiere.status'])
    .where('Professeur.status = true')
    .andWhere('matiere.status = true')
    .where('Professeur.id = :id', { id: id })
    .getOne()  
  }

  async update(id: number, updateProfesseurDto: UpdateProfesseurDto) {
    const prof = await this.professeurRepository.preload({
      id,
      ...updateProfesseurDto
    })
    if (!prof) {
      new BadRequestException('Somthing Bad')
    }
    return this.professeurRepository.save(prof)
  }

  async remove(id: number) {
    const prof = await this.professeurRepository.findOne({ where: { id } })
    if (!prof) {
      new BadRequestException('Somthing Bad')
    }
    prof.status = false
    return this.professeurRepository.save(prof)
  }
}
