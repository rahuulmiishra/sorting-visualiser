

const numberOfBars = 10;
const collection = [];
const container = document.getElementById("app");

for(let i=0; i<numberOfBars;i++) {
    collection[i] = Math.random();
}

do {
    var swapped = false;
    for(let i=1;i<collection.length;i++) {
        if(collection[i-1] > collection[i]) {
            swapped = true;
            [collection[i-1], collection[i]] = [collection[i], collection[i-1]];
        }
    }
    
} while(swapped);

for(let i=0;i<collection.length;i++) {
    const bar = document.createElement("div");

    bar.style.height = `${collection[i]*100}%`;
    bar.style.width = '10px';
    bar.style.backgroundColor = 'red';

    container.appendChild(bar);
}