

const numberOfBars = 10;
const collection = [];
const container = document.getElementById("app");

init();

function init() {
    for(let i=0; i<numberOfBars;i++) {
        collection[i] = Math.random();
    }

    showBars();
}

function play() {
    const copy  = [...collection];
   const swaps =  bubbleSort(copy);
    animate(swaps);
}

function animate(swaps) {
    if(swaps.length == 0) 
        return;
    const [i,j] = swaps.shift();
    [collection[i], collection[j]]  =  [collection[j], collection[i]] 
    showBars();

    setTimeout(()=> {
        animate(swaps);
    },1000);
 
}

function showBars() {
    container.innerHTML = '';
    for(let i=0;i<collection.length;i++) {
        const bar = document.createElement("div");
    
        bar.style.height = `${collection[i]*100}%`;
        bar.style.width = '10px';
        bar.style.backgroundColor = 'red';
    
        container.appendChild(bar);
    }
}

function bubbleSort(data) {
    const swaps = [];
    do {
        var swapped = false;
        for(let i=1;i<data.length;i++) {
            if(data[i-1] > data[i]) {
                swapped = true;
                swaps.push([i-1, i]);
                [data[i-1], data[i]] = [data[i], data[i-1]];
            }
        }
        
    } while(swapped);

    return swaps;
}




