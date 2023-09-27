function calculatrice(term1 , operation, term2){
        if (operation=="+"){
        return add(term1, term2);
    } else if(operation == "-"){
         return subs(term1, term2);
    } else if (operation == "/"){
          return div(term1, term2);
    }
    else if (operation == "*"){
          return mult(term1, term2);
    } else{
        return "something went wrong with your input"
    }
}
 // function to create add, subs, div, mult
 function subs(a, b){
       return a - b;
   }

let response = calculatrice(4, "*", 2)
console.log(response);




