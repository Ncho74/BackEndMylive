/* eslint-disable prettier/prettier */
import { Controller, Get,Body,Post, Param, Put, Delete,Res, BadRequestException} from '@nestjs/common';
import { CustomService } from './custom.service';
import { UpdateCustomTdo } from './tdo/update.custom.tdo';
import { CreateCustomTdo } from './tdo/create.custom.tdo';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { response, Response } from 'express';

@Controller('custom')
export class CustomController {
  constructor(private readonly customService: CustomService,private jwtService:JwtService) {}
   @Get()
   async index(){
     return  await this.customService.findAll()
   }
   @Get(':id')
   async find(@Param('id') id:string){
     return  await this.customService.findId(id)
   }
   @Put(':id')
   async update(@Param('id') id:string,@Body() updateCustomTdo:UpdateCustomTdo){
  
    
      return await this.customService.update(id,updateCustomTdo)
      
   
   
   }
@Delete(':id')
 async delete(@Param('id') id:string){
   return await  this.customService.delete(id)
 }
 @Post()
 async create(@Body() createCustomTdo:CreateCustomTdo){
  const {email}=createCustomTdo
  const custom=await this.customService.findOne({email})
  if(custom){
    throw new BadRequestException('compte existant !')
        
  }
    await this.customService.create(createCustomTdo)
    .then(()=>{
       return JSON.stringify({succes:true,message:'Enregistrement effectué avec success'})
    })
    .catch((err)=>{
       console.log('Error-User-SignIn :',err)
    })
 }
@Post('login')
async login(@Body('email') email:string,
@Body('pwd') password:string,
@Res({passthrough:true}) response:Response){
  const user=await this.customService.findOne({email})
  if(!user){
    throw new BadRequestException('email ou mot de passe incorrecte !')
  }
  if( !await bcrypt.compare(password, user.pwd)){
      throw new BadRequestException('email ou mot de passe incorrecte !')
  } 
  const jwt=await this.jwtService.signAsync({id:user._id  })
  response.cookie(jwt,{httpOnly:true})
   return {success:true,message:"connection effectué avec success"};
  }
}

