
import { BadRequestException, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Custom,CustomDocument } from './schema/custom.schema';
import { CreateCustomTdo } from './tdo/create.custom.tdo';
import  {UpdateCustomTdo} from './tdo/update.custom.tdo';
import {BaseCustomTdo} from './tdo/base-tdo.custom'
import * as  bcrypt from 'bcrypt'
@Injectable()
export class CustomService {
 constructor(@InjectModel(Custom.name) private readonly model:Model<CustomDocument>,){}
  async findAll():Promise <Custom[]>{
    return this.model.find().exec()

  }
  async findId(id:string):Promise<Custom>{
      return this.model.findById(id).exec()
  }
  async create(createCustomTdo:CreateCustomTdo):Promise<Custom>{
  
    const {pwd}=createCustomTdo
   
    
      return await new this.model({... createCustomTdo,pwd:await   bcrypt.hash(pwd,10),createdAt:Date(),}).save()
  
   
  }
  async update(id:string,updateCustomTdo:UpdateCustomTdo):Promise<Custom>{
  

     
    return await this.model.findByIdAndUpdate(id,updateCustomTdo).exec();
  }
  async delete(id:string):Promise<Custom>{
    return  await this.model.findByIdAndDelete(id).exec()
  }
  async findOne(data:any):Promise<Custom>{
     return  await this.model.findOne(data)
  }

  
}
