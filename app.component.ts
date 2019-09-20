input {Component} from '@angular/core';

@Component({
selector:'app-root',
templateUrl:'./app.component.html',
styleUrls:['./app.component.css']

})



export class AppCompnent{
title= 'Hello to lec 8 !'
myNo:number=0;
myData=[];//array

}


callMePlease():string{
return "Hello from Function!"
}


updateText():void{

this.myData+="Thank you!!";

}

addNewNumber():void{

this.myData.push(this.myNo); // push into this array of value of new number

}

deleteAll():void{
this.myData=[];
}


getSum():number{
let theSum=0;
for(let i = 0; i < this.myData.length; i++)
theSum+= this.myData[i];
return theSum

}
