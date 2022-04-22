const body = document.querySelector('body'),
sidebar = body.querySelector('nav'),
toggle = body.querySelector(".toggle"),
searchBtn = body.querySelector(".search-box"),
modeSwitch = body.querySelector(".toggle-switch"),
modeText = body.querySelector(".mode-text");


if(!document.cookie.includes('theme'))
    document.cookie = "theme=light";

/*
NAVBAR MENAGER
*/

toggle.addEventListener("click" , () =>{
    sidebar.classList.toggle("close");
})

//searchBtn.addEventListener("click" , () =>{
//    sidebar.classList.remove("close");
//})

modeSwitch.addEventListener("click" , () =>{

    if(getCookie("theme") == 'dark'){
    setCookie('theme', 'light', 30);
    } else {
    setCookie('theme', 'dark', 30);
    }

    body.classList.toggle("dark");

ThemeName();


});

/*
COOKIES MENAGER
*/

function setCookie(cName, cValue, expDays) {
        let date = new Date();
        date.setTime(date.getTime() + (expDays * 24 * 60 * 60 * 1000));
        const expires = "expires=" + date.toUTCString();
        document.cookie = cName + "=" + cValue + "; " + expires + "; path=/";
}

function getCookie(cName) {
      const name = cName + "=";
      const cDecoded = decodeURIComponent(document.cookie); //to be careful
      const cArr = cDecoded .split('; ');
      let res;
      cArr.forEach(val => {
          if (val.indexOf(name) === 0) res = val.substring(name.length);
      })
      return res;
}

function deleteCookie(cname) {
    const d = new Date();
    d.setTime(d.getTime() + (24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=;" + expires + ";path=/";
}

/*
THEME MENAGER
*/

if(getCookie("theme") =='dark'){
    body.classList.toggle("dark");
    }

function ThemeName(){
if(body.classList.contains("dark")){
        modeText.innerText = "Jasny\nmotyw";
    }else{
        modeText.innerText = "Ciemny\nmotyw";

    }
}

ThemeName();
