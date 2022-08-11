import { Module } from '@nestjs/common';
import { PubController } from './pub.controller';
import { PubService } from './pub.service';
import { pubSchema } from '../Schemas/pub.schema';
import { Pub } from '../Schemas/pub.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  controllers: [PubController],
  providers: [PubService],
  exports:[PubModule],
  imports:[MongooseModule.forFeature([{name:Pub.name,schema:pubSchema}])]
})
export class PubModule {}
