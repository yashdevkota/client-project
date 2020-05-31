import { IsNotEmpty, IsMobilePhone, IsEmail, IsIn } from 'class-validator';
import { EducationBackground, ClientGender, PreferredContactMode } from '../client.models';

export class CreateClientDto {

    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    @IsIn([ClientGender.FEMALE, ClientGender.MALE])
    gender: string;

    @IsNotEmpty()
    @IsMobilePhone()
    phone: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    address: string;

    @IsNotEmpty()
    nationality: string;

    @IsNotEmpty()
    // @IsDate() Check later is possible.
    dob: string;

    @IsNotEmpty()
    @IsIn([EducationBackground.DOCTORATE, EducationBackground.HIGHSCHOOL, EducationBackground.NONE, EducationBackground.POSTGRAD, EducationBackground.TENTH, EducationBackground.UNDERGRAD])
    education_background: string

    @IsIn([PreferredContactMode.EMAIL, PreferredContactMode.PHONE, null])
    prefered_contact_mode
}