import { Sex } from "../shared/enums/sex.enum"
import { Size } from "../shared/enums/size.enum"
import { Specie } from "../shared/enums/specie.enum"
import { Age } from "./age"
import { AnimalInformation } from "./animal-information"
import { Organization } from "./organization"

export interface Animal {
    id: number,
    name: string,
    age: Age,
    weight: number,
    size: Size,
    specie: Specie,
    race: string,
    sex: Sex,
    information: AnimalInformation,
    organization: Organization
}