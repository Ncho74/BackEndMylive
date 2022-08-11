import { Controller } from '@nestjs/common';
import { Get,Post,Param,Body,Put,Delete} from '@nestjs/common';
import { CreatePub } from '../tdo/create.pub';
import { UpdatePub } from '../tdo/update.pub';
import { PubService } from './pub.service';
@Controller('pub')
export class PubController {
    constructor(private readonly pubService:PubService){}
    @Get()
    async index(){
        return await this.pubService.findAll();
    }

    @Post()
    async create(@Body() createPub:CreatePub){
        return await this.pubService.create(createPub);
    }
    @Get(":id")
    async findId(@Param(':id') id:string){
        return await this.pubService.findId(id);;
    }
    @Put(':id')
    async update(@Param('id') id:string,@Body() updatePub: UpdatePub){
        return await this.pubService.update(id,updatePub);
    }
    @Delete(':id')
      async delete(@Param('id') id:string){
        return await this.pubService.delete(id)
      }
}
