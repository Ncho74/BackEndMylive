/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import {  CustomController} from './custom.controller'
import { CustomService } from './custom.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Custom, CustomSchema } from './schema/custom.schema';

@Module({
    controllers:[CustomController],
    providers:[CustomService],
    exports:[CustomModule],
    imports:[MongooseModule.forFeature([{name:Custom.name,schema:CustomSchema}])]
})
export class CustomModule {}
