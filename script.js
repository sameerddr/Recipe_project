var inputClass = document.querySelector('.inputClass');
var buttonClass = document.querySelector('.buttonClass');
var container = document.querySelector('.container');

buttonClass.addEventListener('click', function(event) {
        // container.innerHTML = "";
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputClass.value}
    `)
            .then(result => result.json())
            .then(data => {
                // console.log(data);
                let { strMeal, strMealThumb, strInstructions, strYoutube } = element;

                let html = `<div class="main">
            <h1>${strMeal}</h1> 
            <p>${strInstructions}</p></div>`

            });
        container.innerHTML += html
    }).catch(err => alert("error"))
    // })