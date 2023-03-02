quick_draw_data_set=["apple", "ball", "flower", "sun", "leaf", "clock"];


random_no =Math.floor((Math.random()*quick_draw_data_set.length)+1);

console.log(quick_draw_data_set[random_no]);

sketch=quick_draw_data_set[random_no];

document.getElementById("sketch_name").innerHTML="sketch to be drawn : "+sketch;

timer_counter=0;
timer_check="";
drawn_sketch="";
answer_holder="";
score=0;

function draw() {
    check_sketch();

    
}



function updateCanvas() {
    background("white");

    random_no =Math.floor((Math.random()*quick_draw_data_set.length)+1);

console.log(quick_draw_data_set[random_no]);

sketch=quick_draw_data_set[random_no];

document.getElementById("sketch_name").innerHTML="sketch to be drawn : "+sketch;
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    bakground("white");
}