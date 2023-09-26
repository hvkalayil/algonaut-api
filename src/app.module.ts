import { Logger, Module } from '@nestjs/common';
import { AlgorithmModule } from './algorithm/algorithm.module';
import { MongooseModule } from '@nestjs/mongoose';

const secret = 'hvk:MfEN1kO0XFoJlpaE'

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://' + secret +'@cluster0.axdqt0v.mongodb.net/?retryWrites=true&w=majority'),
    AlgorithmModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
