let sideBarInnnerWidth=$(".sideBarInner").innerWidth();
 
$(".sideBar").css('left',-sideBarInnnerWidth)

$(".sideBar .main-icon").click(function(){
   if( $(".sideBar").css('left')=="0px"){
    $(".sideBar").animate({left:-sideBarInnnerWidth},1000)
   }
   else{
    $(".sideBar").animate({left:"0px"},1000)

   }
   
})

var data=[]
  

getData()

async function getData(){
  let response= await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
  let finalResponse=await response.json()
  data=finalResponse.meals
  console.log(data)
displayData()

}


function displayData(){
    var cols=``
    for(var i=0;i<data.length; i++){
   
       cols+=`
       <div class="col-md-3 text-center h-100">
       <div onclick="getMealsDetials('${data[i].idMeal}')"class="position-relative parent my-1 rounded-2">
             <img src="${data[i].strMealThumb}"   width="100%" alt="">
            <div class="layer w-100 h-100 align-items-center  d-flex">
                 <h2 class="ps-1">${data[i].strMeal}</h2> 
            </div>  
       </div>
   </div>
        `

    }
    document.getElementById('rowData').innerHTML=cols;
}
async function getMealsDetials(meal){

    let response= await fetch(`Https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal}`)
    response= await response.json()
  displayMealsDetials(response.meals[0])

}

function displayMealsDetials(meal){
    let cartona=`
    <div class="text-white col-md-3">
                    <img class="w-100 rounded-3" src="${meal.strMealThumb}" alt="">
                    <h2>${meal.strMeal}</h2>
                </div>
              <div class="col-md-8 text-white">
                <h2> Instructions</h2>
                <p>${meal.strInstructions}</p>
                <h3>Area :</h3>
                <span>${meal.strArea}</span>
                <h3>Category :</h3>
                <span>${meal.strCategory}</span>
                <h3>Tags :</h3>
                <span>${meal.strTags}</span>
                <div>
                <a href="${meal.strSource}" class="btn btn-success">Source</a>
                <a href="${meal.strYoutube}" class="btn btn-danger">Youtube</a>
                </div>
              </div>`
              document.getElementById('rowData').innerHTML=cartona;

}
let test2=document.querySelector('.list2')
test2.addEventListener('click',function(){
    $(".sideBar").css('left',-sideBarInnnerWidth)
   getCategory()
})
async function getCategory(){

    let response= await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php?c=list`)
    response= await response.json()
  category = response.categories
    console.log(category)
    displayCategory()

}
let category=[]
async function displayCategory(){
    var categ=``
    for(var i=0;i<category.length; i++){
   
       categ+=`
       <div class="col-md-3 text-center h-100">
       <div onclick="getMealsDetials('${category[i].idMeal}')"class="position-relative parent my-1 rounded-2">
             <img src="${category[i].strCategoryThumb}"   width="100%" alt="">
            <div class="layer w-100 h-100">
                 <h2  class="ps-1 d-flex justify-content-center">${category[i].strCategory}</h2> 
                 <p class="text-center">${category[i].strCategoryDescription.split(" ").slice(0,20).join(" ")}</p>
            </div>  
       </div>
   </div>
        `

    }
    document.getElementById('rowData').innerHTML=categ;
}
let test3=document.querySelector('.list3')
test3.addEventListener('click',function(){
    $(".sideBar").css('left',-sideBarInnnerWidth)
    getArea()
})
async function getArea(){

    let response= await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)
    response= await response.json()
  Area = response.meals
    console.log(Area)
    displayArea()

}
let Area=[]
async function displayArea(){
    var area=``
    for(var i=0;i<Area.length; i++){
   
       area+=`
       <div class="col-md-3 text-center text-white h-100">
       <div onclick="getMealsDetials('${Area[i].idMeal}')"class="position-relative parent my-1 rounded-2">
       <i class="fa-solid fa-house-laptop fa-4x"></i>
        <h3>${Area[i].strArea}</h3>
            </div>  
       </div>
   </div>
        `

    }
    document.getElementById('rowData').innerHTML=area;
}

let test4=document.querySelector('.list4')
test4.addEventListener('click',function(){
    $(".sideBar").css('left',-sideBarInnnerWidth)
    getIngredients()
})
async function getIngredients(){

    let response= await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`)
    response= await response.json()
    Ingredients= response.meals
    console.log(Ingredients)
    displayIngredients()

}
let Ingredients=[]
async function displayIngredients(){
    var Ingredient=``
    for(var i=0;i<25; i++){
   
        Ingredient+=`
       <div class="col-md-3 text-center text-white h-100">
       <div onclick="getMealsDetials('${Ingredients[i].idMeal}')"class="position-relative parent my-1 rounded-2">
       <i class="fa-solid fa-drumstick-bite fa-4x"></i>
        <h3>${Ingredients[i].strIngredient}</h3>
        <p>${Ingredients[i].strDescription.split(" ").slice(0,20).join(" ")}</p>
            </div>  
       </div>
   </div>
        `

    }
    document.getElementById('rowData').innerHTML=Ingredient;
}

let test5=document.querySelector('.list5')
test5.addEventListener('click',function(){
    $(".sideBar").css('left',-sideBarInnnerWidth)
    displayInformation()
})

async function displayInformation(){
    var Information=``
    Information+=`
    <div class=" d-flex justify-content-center text-center align-items-center mt-5">
    <div>
     <div class="d-flex mb-3">
      <label for="name" class="fw-semibold py-2">
      </label>
      <input type="text" id="name" placeholder="Enter your Name" class="form-control py-2 px-5 mb-2 mx-3">
      <label for="email" class="fw-semibold py-2">
      </label>
      <input type="email" id="email" placeholder="Enter your Email" class="form-control py-2 px-5 mb-2">
     </div>
     <div class="d-flex mb-3">
      <label for="phone" class="fw-semibold py-2">
      </label>
      <input type="number" id="phone" placeholder="Enter your Phone" class="form-control py-2 px-5 mb-2 mx-3">
      <label for="age" class="fw-semibold py-2">
      </label>
      <input type="number" id="age" placeholder="Enter your Age" class="form-control py-2 px-5 mb-2">
     </div>
     <div class="d-flex">
      <label for="pass" class="fw-semibold py-2">
      </label>
      <input type="password" id="pass" placeholder="Enter your Password" class="form-control py-2 px-5 mb-2 mx-3">
      <label for="repass" class="fw-semibold py-2">
      </label>
      <input type="password" id="repass" placeholder="Repassword" class="form-control py-2 px-5 mb-2">
     </div>
     <button class="btn-light btn mx-auto">
     Sumbit
   </button>
    </div>
    </div>
        `

    
    document.getElementById('rowData').innerHTML=Information;
}


