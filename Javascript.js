function computerPlay(a) {
    a = Math.floor(Math.random() * 3) + 1;
    
    return (
        a == 1 ? "Rock"
        : a == 2 ? "Paper"
        : "Scissors"
    )
}

console.log(computerPlay());
console.log(computerPlay());
console.log(computerPlay());