const Animals = {
    dogs : "fox",
    cats : "lion",
    Hippopotamus : "begemot"
    }

const str = "cats";

const fun = function(a, b){

    console.log(a in b);
}

fun(str, Animals);