import {Prop,Schema,SchemaFactory} from '@nestjs/mongoose'
import { Document,Types } from 'mongoose'
import { Custom } from 'src/custom/schema/custom.schema'
import * as mongoose from 'mongoose';
import * as bcrypt from 'bcrypt';
export type  PubDocument= Pub & Document
@Schema({_id:true})

export class Pub{
    _id:Types.ObjectId;
    @Prop()
    lenged_Pub:string;
    @Prop()
    attachment_pub:string;
    @Prop({required:true})
    contenu_pub:string;
    @Prop()
    completedAt?: Date;

    @Prop({ required: true })
    createdAt: Date;
    @Prop()
     deletedAt?: Date;

    @Prop({type:[Types.ObjectId],ref:Custom.name})
    id_Custom:Custom[]
    
}
export const pubSchema= SchemaFactory.createForClass(Pub)