import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateVisitorDto } from './dto/create-visitor.dto';
import { Visitor } from './entities/visitor.entity';

@Injectable()
export class VisitorsService {
  constructor(
    @InjectRepository(Visitor)
    private readonly visitorsRepository: Repository<Visitor>,
  ) {}

  create(createVisitorDto: CreateVisitorDto) {
    const visitor = this.visitorsRepository.create(createVisitorDto);
    return this.visitorsRepository.save(visitor);
  }

  findAll() {
    return this.visitorsRepository.find();
  }

  update(id: string, updateVisitorDto: CreateVisitorDto) {
    return this.visitorsRepository.preload({
      id: id,
      ...updateVisitorDto,
    }).then(visitor => {
      if (!visitor) {
        throw new NotFoundException(`Visitor with ID ${id} not found`);
      }
      return this.visitorsRepository.save(visitor);
    });
  }               

  remove(id: string) {
    return this.visitorsRepository.delete(id);
  }
}