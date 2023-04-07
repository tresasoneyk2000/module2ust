class Employee1{
    private fname:string;
    private mname!:string;
    private  lname:string;

    constructor(fname:string,mname:string,lname:string){
        this.fname=fname;
        this.mname=mname;
        this.lname=lname;
    }
   public getMname():string{
        return this.mname;
    }
}

let e1=new Employee1('A','B','C');
console.log(e1.getMname());



class Employee{
  private readonly empno:number;// like final in  java
  private   ename:string;
  private  sal:number;// optional
  private  attendence:any;


  public getEmpno():number{
    return this.empno;
  }
  public getEname():string{
    return this.ename;
  }
  public getSal():number{
    return this.sal;
  }
  public getAttendence():number{
    return this.attendence;
  }

    // constructor(){
    //     this.empno=101;
    //     this.ename="abc";
    //     this.sal=200000;
    //     this.attendence=18;


    // }
    constructor(empno:number,ename:string,sal:number, attendence:any){
        this.empno=empno;
        this.attendence=attendence;
        this.ename=ename;
        this.sal=sal;

    }

    print():void{
        console.log(this.empno,this.ename,this.sal,this.attendence);
    }
}
var emp=new Employee(1,'abc',3000,20);
var emp1=new Employee(2,'bbc',2000,30);

//emp1.empno=102;
var emp2=new Employee(3,'cde',3500,25);
//emp2.empno=103;
emp.print();
emp1.print();
emp2.print();







    // var emp=new Employee();
    // var emp1=new Employee();

    // emp1.empno=102;
    // var emp2=new Employee();
    // emp2.empno=103;
    // emp.print();
    // emp1.print();
    // emp2.print();

var emparray:Employee[]=[emp,emp1,emp2];
emparray.forEach(element => {
    console.log(element);
    
});
