//deklarasi variabel untuk sticky header
window.onscroll = function() {sticky_header()}; //saat scroll jalan fungsi sticky_header()
var header = document.getElementById("the_sticky_one");
var sticky = header.offsetTop;

//deklarasi variabel yang akan digunakan untuk hitung BMI
var age = document.getElementById("age");
var height_cm = document.getElementById("height");
var weight = document.getElementById("weight");
var male = document.getElementById("male");
var female = document.getElementById("female");

// var form = document.getElementById("")

// let explainArea = document.querySelector(".explanation");
        
//Fungsi Sticky Header
function sticky_header() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } 
  else {
    header.classList.remove("sticky");
  }
}

//fungsi log, validasi jika semua field sudah terisi, dan jalankan fungsi hitung BMI
function calculate_bmi(){
  console.log("Inside calculate_bmi");
  console.log("age:", age.value);
  console.log("height:", height_cm.value);
  console.log("weight:", weight.value);

  if(age.value.trim() === "" || height_cm.value.trim()=== "" || weight.value.trim() === "" || (male.checked==false && female.checked==false)){
    alert("Please Fill Out All Fields");
  }else{
    count_bmi();
  }
}

//fungsi hitung BMI
function count_bmi(){
  var bmi_result;
  var height_m;
  var explain = '';
  var scrollDown = '';

  height_m = height_cm.value/100; //ubah tinggi dari cm ke m
  bmi_result = (weight.value)/(height_m ** 2); //hasil perhitungan BMI

  document.getElementById("resultContainer").innerHTML = bmi_result.toFixed(3);//print hasil hitung
  
  //pengondisian keterangan berdasarkan hasil hitung
  if(bmi_result<18.5){
    explain = 'You are Underweight';
    scrollDown = 'Scroll Down to See the Risk of Being Underweight and Some Tips to Overcome Weight Loss';
  }else if (18.500<=bmi_result && bmi_result<=24.999){
    explain = 'You are Normal Weight';
    scrollDown = 'Great! Maintain your body weight!';
  }else if (25<=bmi_result && bmi_result<=29.999){
    explain = 'You are Overweight';
    scrollDown = 'Scroll Down to See the Risk of Being Overweight and Some Tips to Overcome Excess Weight';
  }else if (30<=bmi_result && bmi_result<=34.999){
    explain = 'You are Obese';
    scrollDown = 'Scroll Down to See the Risk of Being Overweight and Some Tips to Overcome Excess Weight';
  }else if (35<=bmi_result){
    explain = 'You are Extremely Obese';
    scrollDown = 'Scroll Down to See the Risk of Being Overweight and Some Tips to Overcome Excess Weight';
  }

  //print keterangan
  document.getElementById("explanation").innerHTML = explain;
  document.getElementById("scrollDown").innerHTML = scrollDown;
}