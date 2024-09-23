import { Sex } from "../enums/sex.enum";
import { Size } from "../enums/size.enum";
import { Specie } from "../enums/specie.enum";

export interface FilterAnimalDto {
    size: Size,
    sex: Sex,
    specie: Specie,
    page: number,
    pageSize:number
}