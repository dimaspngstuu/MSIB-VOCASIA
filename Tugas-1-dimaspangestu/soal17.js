function rekursifFaktorial(n){
    let result = 1;
    for(let i =1 ; i <= n ; i++){
        result*=i;
    }
    console.log(result);
}

rekursifFaktorial(4);