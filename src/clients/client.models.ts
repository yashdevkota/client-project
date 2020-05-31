export interface Client {
    id: string,
    name: string,
    gender: ClientGender,
    phone: string,
    email: string,
    address: string,
    nationality: string,
    dob: string,
    education_background: EducationBackground
    prefered_contact_mode : PreferredContactMode
}

export enum ClientGender {
    MALE = 'MALE',
    FEMALE = 'FEMALE'
}

export enum EducationBackground {
    NONE = 'NONE',
    TENTH = 'TENTH',
    HIGHSCHOOL = 'HIGHSCHOOL',
    UNDERGRAD = 'UNDERGRAD',
    POSTGRAD = 'POSTGRAD',
    DOCTORATE = 'DOCTORATE'
}

export enum PreferredContactMode {
    PHONE = 'PHONE',
    EMAIL = 'EMAIL'
}