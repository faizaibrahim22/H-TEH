function percentage(num:number){
    if( num>= 90){
        console.log("A+");

    }else if(num>= 80){
        console.log("A");

    }else if(num>= 70){
        console.log("B");

    }else{
        console.log("fail");

    }return(num);
}percentage(99);