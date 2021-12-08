const Animals = {
    a : "dog",
    b : "cat",
    c : "gipopotam"
    }
    
for (let key in Animals) {
    if (Animals.hasOwnProperty(key)) {
        console.log(key);
    }   
}