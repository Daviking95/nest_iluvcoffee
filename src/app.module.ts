import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoffeesController } from './coffees/coffees.controller';
import { CoffeesService } from './coffees/coffees.service';

@Module({
  imports: [],
  controllers: [AppController, CoffeesController],
  providers: [AppService, CoffeesService],
})
export class AppModule {}


// Nest js Commands
// nest generate service || nest g s
// nest generate controller || nest g c
// nest generate class DIRECTORY-PATH --no-spec      Example: nest g class coffees/dto/update-coffee.dto --no-spec
// npm i class-validator class-transformer
// npm i @nestjs/mapped-types


// DTO - Data Transfer Object