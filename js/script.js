buttonStart = document.querySelector('.start');
boxNumber = document.querySelector('.number');
boxTimer = document.querySelector('.timer');
boxResult = document.querySelector('.result');

function getRandomInteger(min, max) {
	return Math.floor(Math.random() * (max - min + 1) ) + min;
}

buttonStart.addEventListener('click', function() {
    boxNumber.classList.remove('hidden');
    buttonStart.classList.add('hidden');
    boxTimer.classList.remove('hidden');

    const arrRandoms = [];
        for (let i = 1; i <= 5; i++) {
            let randomNumber;
            randomNumber = getRandomInteger(1, 99);
            arrRandoms.push(randomNumber);

            let lastElement = arrRandoms[arrRandoms.length - 1];

            const eleNumber = document.createElement('div')           
            boxNumber.append(eleNumber)
            eleNumber.innerHTML =lastElement
        };
    console.log(arrRandoms)    
    
    let counter = 6;
    const idInterval = setInterval(count, 1000);
    function count() {
        if (counter === 1 ) {
            boxNumber.classList.add('hidden');
            boxTimer.classList.add('hidden')
            clearInterval(idInterval);

            setTimeout(function () {
                const arrResult = [];
                for (let i = 1; i <= 5; i++){
                    memory = Number(prompt('Inserisci i numeri che hai memorizzato'))
                    arrResult.push(memory);

                    let conteggio = 0
                    if(arrRandoms.includes(memory)){                     
                        conteggio++
                        console.log(conteggio)
                    }                           
                }  
                
                boxResult.classList.remove('hidden');
                const eleResult = document.createElement('div')           
                boxResult.append(eleResult)
                eleResult.innerHTML = `Hai memorizzato ${conteggio} numeri su 5`            
                console.log(arrResult)
                
            }, 200)
            
        } else {          
            counter--;
            const eleTimer = document.createElement('div')           
            boxTimer.append(eleTimer)
            eleTimer.innerHTML = counter
        }
    }   

     
});