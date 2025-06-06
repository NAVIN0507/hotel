type RegisterProps = {
    name:string;
    email:string;
    phone:string;
    address:string;
    password:string;
}

type User ={
    name:string;
    email:string;
    email:string;
    avatar_url:string | null;
    role:string;
    phone:string;
    address:string | null;
}

type ResetPassword = {
    email:string | null;
    token:string | null;
    password:string;
    confirmPassword:string;
}

type RoomCategories = {
    id:number;
    name:string;
    description:string;
    pictures:Array<string>;
    price:number;
    square_ft:number;
    capability:string;
    beds:string;
}