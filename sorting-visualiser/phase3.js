

const numberOfBars = 10;
const collection = [];
const container = document.getElementById("app");

function init() {
    for(let i=0; i<numberOfBars;i++) {
        collection[i] = Math.random();
    }

    showBars();
}

function play() {
    bubbleSort(collection);
    showBars();
}

function showBars() {
    for(let i=0;i<collection.length;i++) {
        const bar = document.createElement("div");
    
        bar.style.height = `${collection[i]*100}%`;
        bar.style.width = '10px';
        bar.style.backgroundColor = 'red';
    
        container.appendChild(bar);
    }
}

function bubbleSort(data) {
    do {
        var swapped = false;
        for(let i=1;i<data.length;i++) {
            if(data[i-1] > data[i]) {
                swapped = true;
                [data[i-1], data[i]] = [data[i], data[i-1]];
            }
        }
        
    } while(swapped);
}




