const letter = `Happy Birthday My Babyy ❤️

My Babyy,

Aaj ka din mere liye bahut special hai... kyunki aaj mere favourite person ka birthday hai. 🥹❤️  
  
Thank you for coming into my life.  
  
Aap sirf mere love hi nahi, mere sabkuch ho... aur hmesha rhoge. 💕  
  
Jab bhi life me problems aati hai, bas aapko imagine karna hi sab kuch better kar deta hai.  
  
Main hamesha pray karti hoon ki aapki har wish poori ho, aap hamesha haste raho, aur jo bhi dreams aap dekhte ho,  
May all your dreams come true mera babyy. 🌙✨  
  
I know mai itni perfect nahi hu...  
But I do my best to make my Babyy feel special with me. ☺️  
  
I Love You Forever buggu ❤️ i promise babyy I never betray u  
i can't explain babyy how much i love u , aap mere lie kitne special ho , ye syd mai kabhi explain na kar pau. but i really love u so much mera babyy.   
it can be ki hmari life pta nhi kitne aur kon kon se stage se se niklegi , bahot saare utar chdao aur v bahot se stages aaenge jaha sabkch khtm hone jaisa lgega , i promise baby is sitiation me mera best dungi.  
And babyy qqp bahot careless ho , apna khyal rkha karo buggu , bcs koi hai jo aapse bahot pyaar karta hai , aapko ittu se pain me v nhi delh sakta , mera babyy  
qqj aapke special day pe aapke pihu ke side se bahooooooooooooooooooooooóoooooooooooooooooooo............ttttttttttt sara pyyaaaarrr and big hug babyy.  
loooooveeeee uuuuuuhhhh soooooooo muuuuch

Forever Yours,
Pihu ❤️`;

const startBtn = document.getElementById("startBtn");
const container = document.querySelector(".container");
const page = document.getElementById("letterPage");
const box = document.getElementById("letter");
const music = document.getElementById("music");

startBtn.onclick = () => {

container.style.display = "none";
page.classList.remove("hidden");

try{
music.play();
}catch(e){}

let i = 0;
box.innerHTML = "";

function type(){

if(i < letter.length){
box.innerHTML += letter.charAt(i);
i++;
setTimeout(type,40);
}
}
type();

};
const photos=[
"images/1.jpg",
"images/2.jpg",
"images/3.jpg",
"images/4.jpg",
"images/5.jpg",
"images/6.jpg"
];

const captions=[
"My Favourite Smile ❤️",
"My Safe Place 🥹",
"Still My CF... Forever My Love ❤️",
"Every Moment With You ✨",
"My Happiness 💖",
"I Love You Forever 🌸"
];

setTimeout(()=>{

page.style.display="none";

const gallery=document.getElementById("gallery");

gallery.style.display="block";

const img=document.getElementById("slide");

const cap=document.getElementById("caption");

let i=0;

setInterval(()=>{

img.src=photos[i];

cap.innerHTML=captions[i];

i++;

if(i>=photos.length)i=0;

},3000);

},65000);