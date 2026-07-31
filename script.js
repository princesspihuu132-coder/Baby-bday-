const letter = `Happy Birthday My Babyy ❤️

Buggu

this day is really really special for me... bcs aaj mere favourite person ka birthday hai. 🥹❤️

Thank you for coming into my life.

Aap sirf mere love hi nahi, mere sabkuch ho... aur hmesha rhoge. 💕

Jab bhi life me problems aati hai, bas aapko imagine karna hi sab kuch better kar deta hai.

i always pray ki aapki har wish poori ho, aur aapke face pe aapki pyari si smile hmesha hi the , aur jo bhi dreams aap dekhte ho,
May all your dreams come true mera babyy. 🌙✨

And baby ,I know mai itni perfect nahi hu...
But I do my best to make my Babyy feel special with me. ☺️
And babyy sorry for all my mistakes jo v maine kiye hai , u know na mai bahot se mistakes karti hu jisse aapko .....  

 par janbujh kar maine kabhi aapko hurt nhi kiya , u know na.
 so kabhi apna pyaar kam mat karna. 

I Love You Forever buggu ❤️ i promise babyy I never betray u
i can't explain babyy how much i love u , aap mere lie kitne special ho , ye syd mai kabhi explain na kar pau. but i really love u so much mera babyy.
Hmari life pta nhi kitne aur kon kon se stage se se niklegi , bahot saare utar chdao aur v bahot se stages aaenge jaha sabkch khtm hone jaisa lgega , i promise baby is situation me mai mera best dungi.
And babyy aap bahot careless ho , apna khyal rkha karo buggu , bcs koi hai jo aapse bahot pyaar karta hai , aapko ittu se pain me v nhi dekh sakta , mera babyy
aaj aapke special day pe aapke pihu ke side se bahooooooooooooooooooooooóoooooooooooooooooooo............ttttttttttt sara pyyaaaarrr and big hug babyy.
loooooveeeee uuuuuuhhhh soooooooo muuuuch

Forever Yours,
Pihu ❤️`;


const photos = [
    "images/1.png",
    "images/2.png",
    "images/3.jpg"
];


const captions = [
    "You + Me = love ❤️",
    "My Favourite Day 🎂",
    "Forever Together 💕"
];


const startBtn = document.getElementById("startBtn");
const container = document.querySelector(".container");
const letterPage = document.getElementById("letterPage");
const box = document.getElementById("letter");
const letterNextBtn = document.getElementById("letterNextBtn");
const music = document.getElementById("music");

const gallery = document.getElementById("gallery");
const slide = document.getElementById("slide");
const caption = document.getElementById("caption");
const loveQuestion = document.getElementById("loveQuestion");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

const noPage = document.getElementById("noPage");
const goBackBtn = document.getElementById("goBackBtn");

const funnyPage = document.getElementById("funnyPage");
const punishmentBtn = document.getElementById("punishmentBtn");

const punishmentPage = document.getElementById("punishmentPage");
const kissInput = document.getElementById("kissInput");
const kissCount = document.getElementById("kissCount");
const kissDone = document.getElementById("kissDone");
const finalPage = document.getElementById("finalPage");
const restartBtn = document.getElementById("restartBtn");
const restartPage = document.getElementById("restartPage");

const giftPage = document.getElementById("giftPage");
const giftBtn = document.getElementById("giftBtn");
const promiseBox = document.getElementById("promiseBox");
const promiseBtn = document.getElementById("promiseBtn");
const galaxyPage = document.getElementById("galaxyPage");
const wishPage = document.getElementById("wishPage");

const moonPage = document.getElementById("moonPage");
const wishInput = document.getElementById("wishInput");
const wishBtn = document.getElementById("wishBtn");

wishInput.addEventListener("input", () => {
    wishBtn.disabled = wishInput.value.trim() === "";
});
// Start Button

startBtn.onclick = () => {

    container.style.display = "none";
    letterPage.style.display = "block";

    music.play().catch(()=>{});


    let i = 0;
    box.innerHTML = "";


    function typing(){

        if(i < letter.length){

            box.innerHTML += letter.charAt(i);
            i++;

            setTimeout(typing,40);

        }
      else {

    loveQuestion.classList.remove("hidden");
    loveQuestion.style.display = "block";

}

    }


    typing();

};



// Slideshow

function startSlideshow(){

    letterPage.style.display = "none";
    gallery.style.display = "block";

    let index = 0;

    function showPhoto(){

        slide.src = photos[index];
        caption.innerHTML = captions[index];

        const flash = document.getElementById("flash");

        flash.style.opacity = "0.9";

        setTimeout(()=>{
            flash.style.opacity = "0";
        },200);

        slide.style.animation = "none";
        slide.offsetHeight;
        slide.style.animation = "photoAnimation 5s ease-in-out";


        index++;

        if(index < photos.length){

            setTimeout(showPhoto,5000);

        }else{

            setTimeout(()=>{

                gallery.style.display = "none";
                finalPage.style.display = "block";


            },5000);

        }
        

        

    }

    showPhoto();

}
letterNextBtn.onclick = () => {

    finalPage.style.display = "none";
    giftPage.style.display = "block";
    giftPage.classList.remove("hidden");

};
// YES
yesBtn.onclick = () => {

    loveQuestion.style.display = "none";
    startSlideshow();

};

// NO
noBtn.onclick = () => {

    letterPage.style.display = "none";
    noPage.style.display = "flex";

};

// Go Back
// Go Back
goBackBtn.onclick = () => {

    noPage.style.display = "none";
    funnyPage.style.display = "flex";

};

// Funny Page
punishmentBtn.onclick = () => {

    funnyPage.style.display = "none";
    punishmentPage.style.display = "flex";

};

// Count 😘
kissInput.addEventListener("input", () => {

    const count = (kissInput.value.match(/😘/g) || []).length;

    kissCount.innerHTML = count + " / 50 😘";

    kissDone.disabled = count < 50;

});

// Done
kissDone.onclick = () => {

    punishmentPage.style.display = "none";

    kissInput.value = "";
    kissCount.innerHTML = "0 / 50 😘";
    kissDone.disabled = true;

    letterPage.style.display = "block";
    loveQuestion.style.display = "block";

};


// Floating Hearts

function createHeart(){

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "🩷";

    heart.style.left = Math.random()*100 + "vw";

    heart.style.fontSize = (20 + Math.random()*20) + "px";

    heart.style.animationDuration = (5 + Math.random()*4) + "s";


    document.getElementById("hearts").appendChild(heart);


    setTimeout(()=>{

        heart.remove();

    },9000);

}


setInterval(createHeart,300);



// Gift Button

giftBtn.onclick = () => {

    giftBtn.style.display = "none";

    promiseBox.style.display = "block";
    promiseBox.classList.remove("hidden");

};



// Promise Button

promiseBtn.onclick = () => {

    giftPage.style.display = "none";

    const ending = document.getElementById("endingScreen");
    const text = document.getElementById("endingText");

    ending.style.display = "flex";

    const messages = [
    "❤️ I LOVE YOU ❤️",
    "❤️ MY BUGGU ❤️",
    "❤️ MY SONA ❤️",
    "❤️ MY BABYY ❤️",
    "😚 MY EVERYTHING 😚",
    "🌎 MY WORLD 🌎"
];

    let i = 0;

    function nextMessage(){

        if(i < messages.length){

            text.innerHTML = messages[i];
            i++;

            setTimeout(nextMessage,2000);

}else{

    text.innerHTML = "🥹 Thank You Bugguu ❤️<br><br>I Also Promise 🤞🏼🫰🏼";

    setTimeout(()=>{

ending.style.display="none";

galaxyPage.style.display = "flex";

setTimeout(()=>{

    galaxyPage.style.display="none";

    wishPage.style.display="flex";

},18000);

    },3000);

}

    }

    nextMessage();

};
wishBtn.onclick = ()=>{

wishPage.style.display="none";

moonPage.style.display="flex";

setTimeout(()=>{

moonPage.style.display="none";

restartPage.style.display="block";

},16500);

};
// Restart

restartBtn.onclick = () => {

    location.reload();

};