import { Status } from "../shared/enums/status.enum";

export interface AnimalInformation {
    about: string,
    status: Status,
    photo: string,
    location: string
}