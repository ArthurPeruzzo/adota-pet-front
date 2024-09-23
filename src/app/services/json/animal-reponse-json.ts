import { Age } from "src/app/domain/age";
import { AnimalInformation } from "src/app/domain/animal-information";
import { Organization } from "src/app/domain/organization";
import { Sex } from "src/app/shared/enums/sex.enum";
import { Size } from "src/app/shared/enums/size.enum";
import { Specie } from "src/app/shared/enums/specie.enum";

export interface AnimalResponseJson {
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