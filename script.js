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
            for (let i = 0; i < data["meals"].length; i++) {
                let data1 = data["meals"][i]
                let data2 = `<div class"main">
                    <span>&#8220;</span>
                        <div class="left">
                          <h1>${data1.strMeal}</h1>
                          <div class="left1">
                            <img src="${data1.strMealThumb}" width="200px" height="100px"/>
                            </div>
                          <p>${data1.strInstructions}</p>
                        </div>
                      </div>`
                container.innerHTML += data2
            }
        }).catch(err => alert("error"))
})