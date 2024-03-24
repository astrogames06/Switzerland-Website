let left = document.getElementById('left');
let right = document.getElementById('right');

let food_img = document.getElementById('food-img');
let img_num = 1;
let images_length = 3;

food_img.src = `images/${img_num}.png`;
left.addEventListener('click', () => {
    img_num = (img_num + 1) % images_length;
    food_img.src = `images/${img_num}.png`;

    if (img_num === 1)
    {
        food_info.innerText = "Swiss cheese is famous food of switzerland and it used in many foods.";
    }
    else if (img_num === 0)
    {
        food_info.innerText = "Swiss chocolate is a very well known swiss food with big companies like Toblerone expanding its popularity.";
    }
    else if (img_num === 2)
    {
        food_info.innerText = "Cheese fondue is also a famous food in Switzerland with people eating it all over the world.";
    }
});
right.addEventListener('click', () => {
    img_num = (img_num - 1 + images_length) % images_length;
    food_img.src = `images/${img_num}.png`;

    if (img_num === 1)
    {
        food_info.innerText = "Swiss cheese is famous food of switzerland and it used in many foods.";
    }
    else if (img_num === 0)
    {
        food_info.innerText = "Swiss chocolate is a very well known swiss food with big companies like Toblerone expanding its popularity.";
    }
    else if (img_num === 2)
    {
        food_info.innerText = "Cheese fondue is also a famous food in Switzerland with people eating it all over the world.";
    }
});
let food_info = document.getElementById('food-info');
if (img_num === 1)
{
    food_info.innerText = "Swiss cheese is famous food of switzerland and it used in many foods.";
}
else if (img_num === 0)
{
    food_info.innerText = "Swiss chocolate is a very well known swiss food with big companies like Toblerone expanding its popularity.";
}
else if (img_num === 2)
{
    food_info.innerText = "Cheese fondue is also a famous food in Switzerland with people eating it all over the world.";
}