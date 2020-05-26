const bands = [
    {name: 'Iron Maiden'},
    {name: 'Megadeth'}
]

const li = document.querySelector('.bandList');

const getBand = () => {

    setTimeout(() => {
        let output = '';

        bands.forEach((item) => {
            output += `<li>${item.name}</li>`;
        })

    li.innerHTML = output;   
    },1000)

}


const addBand = (band, funcaocallback) => {
    
    setTimeout(() =>{
        bands.push({name: band});

        funcaocallback();
    },3000)
}

addBand('Queen', getBand);

