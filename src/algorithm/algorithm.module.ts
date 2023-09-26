import { Module } from '@nestjs/common';
import { AlgorithmService } from './algorithm.service';
import { AlgorithmController } from './algorithm.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Algorithm, AlgorithmSchema } from './entities/algorithm.entity';

@Module({
  imports:[
    MongooseModule.forFeature([
      {name:Algorithm.name,schema:AlgorithmSchema}
    ])
  ],
  controllers: [AlgorithmController],
  providers: [AlgorithmService],
})
export class AlgorithmModule {}
