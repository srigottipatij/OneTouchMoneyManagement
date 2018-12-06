export class AppUser{
    name:  string;
    email: string;
    password: string;
    jdate: Date;
    isActive: boolean;    
    userImage: string;    

    constructor(userResponse: any){ //constructor that takes an response (which we get after subscription) and making it as app-user type
     this.name=userResponse.name;
     this.email=userResponse.email;
     this.password=userResponse.password
     this.jdate=userResponse.jdate;
     this.isActive=userResponse.isActive;
     this.userImage=userResponse.userImage;     
    }
    set Password(password: any){ //setter method
        this.password=password;
    }
}