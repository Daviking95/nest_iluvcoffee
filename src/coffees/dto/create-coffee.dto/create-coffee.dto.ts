import { IsString } from "class-validator";

export class CreateCoffeeDto {
    @IsString() // This decorator, says this field must be a string
    readonly name: string;   // readonly helps obtain immutability

    @IsString()
    readonly brand: string;

    @IsString({each: true}) // Validator, saying this item in the array must be a string type
    readonly flavors: string[]
}
