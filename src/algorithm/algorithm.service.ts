import { Injectable, Logger } from '@nestjs/common';
import { CreateAlgorithmDto } from './dto/create-algorithm.dto';
import { UpdateAlgorithmDto } from './dto/update-algorithm.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Algorithm } from './entities/algorithm.entity';
import { Model } from 'mongoose';

@Injectable()
export class AlgorithmService {
  logger: Logger
  constructor(@InjectModel(Algorithm.name) private readonly algorithmModel:Model<Algorithm>){
    this.logger = new Logger()
  }

  create(createAlgorithmDto: CreateAlgorithmDto) {
    return this.algorithmModel.create(createAlgorithmDto)
  }

  findAll() {
    this.logger.debug('Show Me dammit')
    return this.algorithmModel.find().exec()
  }

  findOne(id: number) {
    return `This action returns a #${id} algorithm`;
  }

  update(id: number, updateAlgorithmDto: UpdateAlgorithmDto) {
    return `This action updates a #${id} algorithm`;
  }

  remove(id: string) {
    return this.algorithmModel.findByIdAndRemove(id).exec()
  }
}
