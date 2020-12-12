export class Appointment{
    public fname: string;
    public lname: string;
    public city: string;
    public package: string;
    public trainer: string;
    public phone:string;
    public email:  string;
    public pt: string;
    public age:number;
    public pincode:number;
    
    constructor(lname:string, fname:string, city: string, p:string, 
        trainer:string, phone:string,email:string,
        pt:string, age:number, pincode:number){
            this.fname=name;
            this.lname=name;
            this.age=age;
            this.city=city;
            this.pincode=pincode;
            this.package=p;
            this.trainer=trainer;
            this.phone=phone;
            this.email=email;
            this.pt=pt;
        
    }

}