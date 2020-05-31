import { IsOptional, IsInt } from "class-validator";

export class GetClientQuery {
    
    @IsOptional()
    // @IsInt()
    page : number
}