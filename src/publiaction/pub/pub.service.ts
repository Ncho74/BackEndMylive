import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Pub,PubDocument } from '../Schemas/pub.schema';
import { CreatePub } from '../tdo/create.pub';
import { UpdatePub } from '../tdo/update.pub';

@Injectable()
export class PubService {
 constructor(@InjectModel(Pub.name) private readonly model:Model<PubDocument>){}

   async findAll():Promise<Pub[]>{
     
       return await this.model.find().exec();
   }
   async findId(id:string):Promise<Pub>{
       return await this.model.findById(id).exec();
   }
   async update(id:string, updatePub:UpdatePub):Promise<Pub>{
       return await this.model.findByIdAndUpdate(id,updatePub).exec();
   }
   async create(createPub:CreatePub):Promise<Pub>{
       
       return await new  this.model({... createPub, createdAt:Date(),}).save();
   }

   async delete(id:string):Promise<Pub>{
       return  await  this.model.findByIdAndDelete(id);
   }
}
