import { Body, Controller, Get, Param, Patch, Post, Query, Delete } from '@nestjs/common';
import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto/update-coffee.dto';

@Controller('coffees')
export class CoffeesController {

    constructor( private readonly coffeeService: CoffeesService){}

    @Get()
    findAll() {
        return this.coffeeService.findAll();
    }

    // Get with Query parameter
    // @Get()
    // findAllCoffeeQuery(@Query() paginationQuery) {
    //     const {limit, offset} = paginationQuery;
    //     return `This returns all coffee with flavours with limit ${limit} and offset ${offset}`;
    // }

    // @Get('flavour') // Nested route
    // findAllCoffeeFlavours() {
    //     return 'This returns all coffee with flavours';
    // }

    @Get(':id')
    findOne(@Param() params) {
        console.log(typeof params);
        
        return this.coffeeService.findOne(params.id);
    }

    // Another way to write findOne below
    // @Get(':id')
    // findOne(@Param('id') id: string){
    //     return `This action returns ${id} coffee`;
    // }

    @Post()
    create(@Body() createCoffeeDto: CreateCoffeeDto) {
        console.log(createCoffeeDto instanceof CreateCoffeeDto);

        return this.coffeeService.create(createCoffeeDto);
    }

    @Patch(':id')
    updateUser(@Param('id') id: string, @Body() updateCoffeeDto: UpdateCoffeeDto) {
        return this.coffeeService.update(id, updateCoffeeDto);

    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.coffeeService.remove(id);

    }

    // We use path (/) parameter to access a specific resource, while we use query (?) parameter to filter db

}
