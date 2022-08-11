/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { CustomModule } from './custom/custom.module';
import { MongooseModule } from '@nestjs/mongoose';
import { PubModule } from './publiaction/pub/pub.module';
import {ConfigModule} from '@nestjs/config'

@Module({
  imports: [CatsModule,
     CustomModule,
     MongooseModule.forRoot('mongodb://127.0.0.1:27017/Mylive'),
      PubModule,
    ConfigModule.forRoot(),
  ],
  controllers: [AppController],
  providers: [AppService,],
})
export class AppModule {
}
