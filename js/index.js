class Mix{
    constructor(array){
        this.array = array;
        this.show(this.array);
        document.getElementById('input').addEventListener('click',() => {
            this.run(this.array);
        })
    }
    run(array){
        this.mix(array);
        this.show(array);
    }
    show(array){
        console.log(array);
        let blocks = document.getElementById('blocks');
        blocks.innerHTML = '';
        array.forEach(value => {
            let span = document.createElement('span');
            span.innerHTML = value;
            blocks.appendChild(span);
        });
    }
    mix(array){
        for(let index in array){
            let number = this.random(array.length)
            let temp = array[index];
            array[index] = array[number];
            array[number] = temp;
        }
        return array;
    }
    random(number){
        return Math.trunc(Math.random() * number);
    }
}
let array = [1,2,3,4,5,6]
new Mix(array);