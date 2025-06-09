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
type RoomCategoriesProps = {
    id:number;
    name:string;
    description:string;
    pictures:Array<string>;
    price:number;
    square_ft:number;
    capability:string;
    beds:string;
    c:boolean;
}
type Service = {
    service_name: string;
    icon_pic: string;
  };
  

type RoomProps = {
    id:number;
    name:string;
    description:string;
    pictures:Array<string>;
    video:string;
    price:number;
    square_ft:number;
    capability:string;
    beds:string;
    about_stay:string;
    check_in_rules:string;
    check_out_rules:string;
    room_rules:string;
    services:Service[]
    
}