import { PartialType } from '@nestjs/mapped-types';
import { CreateCoffeeDto } from '../create-coffee.dto/create-coffee.dto';

export class UpdateCoffeeDto extends PartialType(CreateCoffeeDto) {}

// PartialType function is expecting a Type to be passed i.e. CreateCoffeeDto inside of it, because it returns the Type of the class we passed into it with all the properties of the class set to optional.
// They also help inherit all the validation rules applied via decorators
