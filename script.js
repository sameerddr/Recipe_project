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
            const food = data["meals"]
            food.map((meal) => {
                const div = document.createElement('div')
                div.innerHTML = `${meal.strMeal}${meal.strInstructions}`
                cont.append(div);

            });
        }).catch(err => alert("error"))
})