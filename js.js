function fizzbizz(){
    const start = 1;
    const range = 100;
    const target = document.getElementById('a');

    for(let i = start; i <= range; i++){
        let output = '';
        let warGuard = true;
        output += i.toString() + ": ";
        if(i%3 == 0){
            output += "Fizz";
            warGuard = false;
        }
        if(i%5 == 0){
            output += "Bizz";
            warGuard = false;
        }
        if(warGuard){
            output += "-";
        }
        output += "<br>";
        target.innerHTML += output;
    }
}

fizzbizz();