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
    c?:boolean;
    index:number;
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

type BookingDetails  =  {
    token:string;
    room_categories_id: number;
    check_in: string;
    check_out: string;
    adult_count: number;
    child_count: number;
    special_food_menu: string;
    activities: string;
    extra_bed: boolean;
    fire_camp: boolean;
    jeep_safari: boolean;
    total:number;
  }
  
  type BookingDetailsWithoutToken  =  {
    room_categories_id: number;
    check_in: string;
    check_out: string;
    adult_count: number;
    child_count: number;
    special_food_menu: string;
    activities: string;
    extra_bed: boolean;
    fire_camp: boolean;
    jeep_safari: boolean;
    total:number;
  customer_data:{
            name:string;
            email:string;
            phone:string;
            address:string;
          }
    
  }
  