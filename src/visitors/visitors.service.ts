import { Injectable } from '@nestjs/common';
import { CreateVisitorDto } from './dto/create-visitor.dto';
import { UpdateVisitorDto } from './dto/update-visitor.dto';
import { Visitor } from './visitors.model';
import { randomUUID } from 'crypto';

@Injectable()
export class VisitorsService {
  private visitors: Visitor[] = [];
  
  create(createVisitorDto: CreateVisitorDto) {
    const visitor: Visitor = {
      id: randomUUID(),
      ...createVisitorDto
    }

    this.visitors.push(visitor);
    
    return visitor;
  }

  findAll() {
    return this.visitors;
  }

  findOne(id: string) {
    return this.visitors.find(visitor => visitor.id === id);
  }

  remove(id: string) {
    this.visitors = this.visitors.filter((visitor) => visitor.id !== id);
  }
}
