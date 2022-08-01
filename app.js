

function info() {
    ;
var Name = window.prompt("Enter your name");
var gender = window.prompt("Enter your gender","(male/female)");
var age = window.prompt("Enter your age","no age less or equal zero");

if (gender === "male")
{
    window.alert("Welcom To Our Website Mr "+ (Name));
}
else if (gender === "female") {
    window.alert("Welcom To Our Website Ms "+ (Name));
} else
    window.alert("Welcom To Our Website ");
}
info();

function questions() {
    
    
        let arr=[];
 var live=window.prompt("do you live in jordan ?","(yes/no)");
 arr.push(live);
 var age=window.prompt("do you less than 18 ?","(yes/no)");
 arr.push(age);
 var info=window.prompt("Have you heard about us on social media ?","(yes/no)");
arr.push(info);
console.log(arr);

}
questions();    
