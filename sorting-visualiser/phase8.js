

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
   const moves =  bubbleSort(copy);
    animate(moves);
}

function animate(moves) {
    if(moves.length == 0) 
        return;
    const move = moves.shift();
    const [i,j] = move.indices;

    if(move.type == 'swap') {
        [collection[i], collection[j]]  =  [collection[j], collection[i]] 

    }
    showBars(move);

    setTimeout(()=> {
        animate(moves);
    },1000);
 
}

function showBars(move = {}) {
    const {indices,type} = move;
    container.innerHTML = '';
    for(let i=0;i<collection.length;i++) {
        const bar = document.createElement("div");
    
        bar.style.height = `${collection[i]*100}%`;
        bar.style.width = '10px';
        bar.style.backgroundColor = 'red';

        if(indices?.includes(i)) {
            bar.style.backgroundColor = type === 'swap' ? 'aqua' : 'lime';
        }
    
        container.appendChild(bar);
    }
}

function bubbleSort(data) {
    const moves = [];
    do {
        var swapped = false;
        for(let i=1;i<data.length;i++) {
            moves.push({
                indices: [i-1, i],
                type:"comp"
            });
            if(data[i-1] > data[i]) {
                swapped = true;
                moves.push({
                    indices: [i-1, i],
                    type:"swap"
                });
                [data[i-1], data[i]] = [data[i], data[i-1]];
            }
        }
        
    } while(swapped);

    return moves;
}




