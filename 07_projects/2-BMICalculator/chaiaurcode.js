const form = document.querySelector('form')

// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

//to prevent submit default action to the server
form.addEventListener('submit', function(e){
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');
    
    if( height  === '' || height < 0 || isNaN(height)){
        results.innerHTML = `Please give a valid height ${height}`;  

    } else if( weight  === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = `Please give a valid weight ${weight}`;  

    } else {
        const bmi = (weight / ((height*height)/10000)).toFixed(2)
        let range;

        // Just for checking Condition
        if( bmi < 18.6 ){
            range = `You are Under Weight because your BMI is ${bmi}`
        }
        
        else if ( bmi >= 18.6 && bmi <= 24.9 ){
            range = `You are in Normal Range because your BMI is ${bmi}`
        }
        
        else if ( bmi > 24.9 ) {
            range = `You are OverWeight because your BMI is ${bmi}`
        }

        //show the result
        // results.innerHTML = ` <span>${bmi}</span> `
        results.innerHTML = ` <span> ${range}</span> `
    
    }      
})