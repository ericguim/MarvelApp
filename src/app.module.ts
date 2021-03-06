import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { database } from './config/database';
import { MarvelModule } from './MarvelModule';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      useFactory: database,
      inject: [ConfigService],
    }),
    MarvelModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}