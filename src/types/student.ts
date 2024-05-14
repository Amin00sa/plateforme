export interface Student{
    id?: string;
    first_name: string;
    last_name: string;
    address?: string | null;
    email: string;
    telephone?: string | null;
    date_of_birth?: string | null;
    cin_image?: Buffer | null; 
    password?: string 
};