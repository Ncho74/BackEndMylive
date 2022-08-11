import{Prop,Schema,SchemaFactory} from '@nestjs/mongoose'
import { Document,Types } from 'mongoose';

export type CustomDocument=Custom & Document

@Schema()

export class Custom{

    _id:Types.ObjectId;
    @Prop({required:true})
    frist_name:string;
    @Prop({required:true})
    last_name:string;
    @Prop({unique:true})
    email:string;
    @Prop()
    tel:string;
    @Prop({required:true})
    pwd:string;
    @Prop()
    photo:string;
    @Prop()
    completedAt?: Date;

    @Prop({ required: true })
    createdAt: Date;
    @Prop()
     deletedAt?: Date;
}
   
export const  CustomSchema=SchemaFactory.createForClass(Custom)