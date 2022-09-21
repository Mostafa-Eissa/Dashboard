let allBtn = document.querySelectorAll(".menu .lists div");
let btndash = document.querySelector(".btndash");
let btnsetting = document.querySelector(".btnsetting");
let btnprofile = document.querySelector(".btnprofile");
let btnprojects = document.querySelector(".btnprojects");
let btnacademy = document.querySelector(".btnacademy");
let btnfriends = document.querySelector(".btnfriends");
let btnfile = document.querySelector(".btnfile");
let btnsubscribe = document.querySelector(".btnsubscribe");


let dashboard = document.querySelectorAll(".allM .mainjs");
let dashboardD = document.querySelector(".maincontent");
let setting = document.querySelector(".setting");
let profile = document.querySelector(".profile");
let projects = document.querySelector(".projects");
let courses = document.querySelector(".courses");
let friends = document.querySelector(".friends");
let files = document.querySelector(".files");
let plans =document.querySelector(".plans")
console.log(dashboard);

btndash.onclick = function () {
    allBtn.forEach(function (li) {
        li.classList.remove("active");
    })
    btndash.classList.add("active");
    dashboard.forEach(function (li) {
        li.style.display = "none";
        btndash.style.backgroundColor = "";
    })
    dashboardD.style.cssText="padding: 20px;display: flex;flex-wrap: wrap;gap: 20px;";
};

setting.style.display = "none";

btnsetting.onclick = function () {
    allBtn.forEach(function (li) {
        li.classList.remove("active");
        btndash.style.backgroundColor = "white";
    });
    btnsetting.classList.add("active");
    btndash.classList.add("active");
    dashboard.forEach(function (li) {
        li.style.display = "none";
    })
    setting.style.cssText="padding: 20px;display: flex;flex-wrap: wrap;gap: 20px;";
};

profile.style.display = "none";

btnprofile.onclick = function () {
    allBtn.forEach(function (li) {
        li.classList.remove("active");
    })
    btnprofile.classList.add("active");
    dashboard.forEach(function (li) {
        li.style.display = "none";
    })
    profile.style.cssText="padding: 20px;display: flex;flex-wrap: wrap;gap: 20px;";
};

projects.style.display = "none";

btnprojects.onclick = function () {
    allBtn.forEach(function (li) {
        li.classList.remove("active");
    })
    btnprojects.classList.add("active");
    dashboard.forEach(function (li) {
        li.style.display = "none";
    })
    projects.style.cssText="padding: 20px;display: flex;flex-wrap: wrap;gap: 20px;";
};

courses.style.display = "none";

btnacademy.onclick = function () {
    allBtn.forEach(function (li) {
        li.classList.remove("active");
    })
    btnacademy.classList.add("active");
    dashboard.forEach(function (li) {
        li.style.display = "none";
    })
    courses.style.cssText="padding: 20px;display: flex;flex-wrap: wrap;gap: 20px;";
};

friends.style.display = "none";

btnfriends.onclick = function () {
    allBtn.forEach(function (li) {
        li.classList.remove("active");
    })
    btnfriends.classList.add("active");
    dashboard.forEach(function (li) {
        li.style.display = "none";
    })
    friends.style.cssText="padding: 20px;display: flex;flex-wrap: wrap;gap: 20px;";
};

files.style.display = "none";

btnfile.onclick = function () {
    allBtn.forEach(function (li) {
        li.classList.remove("active");
    })
    btnfile.classList.add("active");
    dashboard.forEach(function (li) {
        li.style.display = "none";
    })
    files.style.cssText="padding: 20px;display: flex;flex-wrap: wrap;gap: 20px;";
};

plans.style.display = "none";

btnsubscribe.onclick = function () {
    allBtn.forEach(function (li) {
        li.classList.remove("active");
    })
    btnsubscribe.classList.add("active");
    dashboard.forEach(function (li) {
        li.style.display = "none";
    })
    plans.style.cssText="padding: 20px;display: flex;flex-wrap: wrap;gap: 20px;";
    
};




let signP = document.querySelector(".signP");
function showNotificationP() {
    let notify = document.createElement("div");
    notify.style.cssText = "height: 10px;width: 10px;background-color: red;border-radius: 50%;position: absolute;top: -5px;right: -5px;";
    signP.appendChild(notify);
}
setTimeout(showNotificationP, 5000);





let btnUser = document.querySelector(".main .user img");


btnUser.onclick = function () {
    let div = document.createElement("div");
    div.classList.add("uersSign")

    let img = document.createElement("img");
    img.src = "img/user.png";
    img.classList.add("newImg")

    let line = document.createElement("div");

    let user = document.createElement("h2");
    let userText = document.createTextNode("Osama Elzero");
    user.appendChild(userText);

    let line2 = document.createElement("div");

    let email = document.createElement("p");
    let emailText = document.createTextNode("Osama@Elzero.org");
    email.appendChild(emailText);

    let sign = document.createElement("div");

    let signOut = document.createElement("p");
    let signOutText = document.createTextNode("sign out")
    signOut.appendChild(signOutText);
    sign.appendChild(signOut);

    let cancel = document.createElement("p");
    let cancelText = document.createTextNode("Cancel")
    cancel.appendChild(cancelText);
    sign.appendChild(cancel);

    div.style.cssText = "position: absolute;top: 80px;right: 10px;width: 250px;height: 230px;background-color: white;padding: 10px;display: flex;flex-direction: column;justify-content: center;align-items: center;z-index: 15;";

    img.style.cssText = " width: 50px;height: 50px;position: relative; margin-top: -5px;margin-bottom: 10px;";

    line.style.cssText = "height: 1px;width: 100%;background-color: #999;margin-bottom: 10px;";

    line2.style.cssText = "height: 1px;width: 100%;background-color: #999;margin-bottom: 10px;margin-top: 10px";

    email.style.cssText = "margin-bottom: 10px;";

    sign.style.cssText = "display: flex;gap: 20px;margin-top: 10px;";

    signOut.style.cssText = "background-color: red;color: white;padding: 10px;border-radius: 5px;cursor: pointer;";

    cancel.style.cssText = "background-color: cornflowerblue;padding: 10px;color: white;border-radius: 5px;cursor: pointer;";

    div.appendChild(img);
    div.appendChild(line);
    div.appendChild(user);
    div.appendChild(line2);
    div.appendChild(email);
    div.appendChild(sign);
    btnUser.after(div);

    cancel.onclick = function () {
        div.remove();
    }
}



let counterLoading = document.querySelector(".maitainboxs .maintian .loadings");
let incesL = setInterval(increaseCounterL, 100);

function increaseCounterL() {
    ++counterLoading.innerHTML ;
    if (counterLoading.innerHTML == 500) {
        clearInterval(incesL)
    }
};


let countercheck = document.querySelector(".maitainboxs .maintian .checks");
let incesC = setInterval(increaseCounterC, 100);

function increaseCounterC() {
    ++countercheck.innerHTML ;
    if (countercheck.innerHTML == 1900) {
        clearInterval(incesC)
    }
};

let counterCloses = document.querySelector(".maitainboxs .maintian .closes");
let incesCl = setInterval(increaseCounterCl, 100);

function increaseCounterCl() {
    ++counterCloses.innerHTML ;
    if (counterCloses.innerHTML == 100) {
        clearInterval(incesCl)
    }
};

let trash = document.querySelectorAll(".mainboxs .spiceal .trash");
let trashI = document.querySelectorAll(".mainboxs .spiceal .trash i");

trash.forEach(function (li) {
    trashI.forEach(function (e) {
        e.onclick = function () {
            li.remove();
        }
    })
})


let movea = document.querySelector(".darkicon");
let btn = document.querySelector(".btn");
let icon = document.querySelector(".btn i");
let header = document.querySelector(".main .header");
let headersign = document.querySelector(".main .header .user i");
let mainhead = document.querySelectorAll(".headjs");
let mainheadAfter = document.querySelectorAll(".headjs div");



if (window.localStorage.getItem("ain")) {
    movea.style.animationName = window.localStorage.getItem("ain");
    document.body.style.backgroundColor = window.localStorage.getItem("color");
    icon.style.color = window.localStorage.getItem("color");
    header.style.backgroundColor = window.localStorage.getItem("headercolor");
    header.style.borderBottom = window.localStorage.getItem("headerborder");
    headersign.style.color = window.localStorage.getItem("signcolor");
    mainhead.forEach(function (e) {
        e.style.color = window.localStorage.getItem("signcolor")
    });
    mainheadAfter.forEach(function (e) {
        e.style.backgroundColor = window.localStorage.getItem("signcolor")
    });
    
}

btn.onclick = function () {
    if ( document.body.style.backgroundColor == "rgb(238, 238, 238)" || document.body.style.backgroundColor == "#eee" ||  document.body.style.backgroundColor == "") {
        window.localStorage.setItem("ain", "moveone")
        movea.style.animationName = window.localStorage.getItem("ain");
        window.localStorage.setItem("color", "black");
        document.body.style.backgroundColor = window.localStorage.getItem("color");
        icon.style.color = window.localStorage.getItem("color");
        window.localStorage.setItem("headercolor", "black");
        window.localStorage.setItem("headerborder", "1px solid white");
        header.style.backgroundColor = window.localStorage.getItem("headercolor");
        header.style.borderBottom = window.localStorage.getItem("headerborder");
        window.localStorage.setItem("signcolor", "white");
        headersign.style.color = window.localStorage.getItem("signcolor");
        mainhead.forEach(function (e) {
            e.style.color = window.localStorage.getItem("signcolor")
        });
        mainheadAfter.forEach(function (e) {
            e.style.backgroundColor = window.localStorage.getItem("signcolor")
        });
    } else if (document.body.style.backgroundColor == "black") {
        window.localStorage.setItem("ain", "movetwo")
        movea.style.animationName = window.localStorage.getItem("ain");
        window.localStorage.setItem("color" ,"#eee")
         document.body.style.backgroundColor = window.localStorage.getItem("color");
        icon.style.color = window.localStorage.getItem("color");
        window.localStorage.setItem("headercolor", "white");
        window.localStorage.setItem("headerborder", "none");
        header.style.backgroundColor = window.localStorage.getItem("headercolor");
        header.style.borderBottom = window.localStorage.getItem("headerborder");
        window.localStorage.setItem("signcolor", "black");
        headersign.style.color = window.localStorage.getItem("signcolor");
        mainhead.forEach(function (e) {
            e.style.color = window.localStorage.getItem("signcolor")
        });
        mainheadAfter.forEach(function (e) {
            e.style.backgroundColor = window.localStorage.getItem("signcolor")
        });
    }
}

let control = document.querySelector(".mainbox .website .websiteIcon");
let CancelIcon = document.querySelector(".mainbox .website .websiteIcon .cancel");
let doneIcon = document.querySelector(".mainbox .website .websiteIcon .done");

CancelIcon.onclick = function () {
    CancelIcon.style.display = "none";
    doneIcon.style.display = "block";
    control.style.justifyContent = "flex-end";
    control.style.backgroundColor = "cornflowerblue";
}

doneIcon.onclick = function () {
    doneIcon.style.display = "none";
    CancelIcon.style.display = "block";
    control.style.justifyContent = "flex-start";
    control.style.backgroundColor = "#555";
}


let control2 = document.querySelector(".mainbox .twofactor .websiteIcon");
let CancelIcon2 = document.querySelector(".mainbox .twofactor .websiteIcon .cancel");
let doneIcon2 = document.querySelector(".mainbox .twofactor .websiteIcon .done");

CancelIcon2.onclick = function () {
    CancelIcon2.style.display = "none";
    doneIcon2.style.display = "block";
    control2.style.justifyContent = "flex-end";
    control2.style.backgroundColor = "cornflowerblue";
}

doneIcon2.onclick = function () {
    doneIcon2.style.display = "none";
    CancelIcon2.style.display = "block";
    control2.style.justifyContent = "flex-start";
    control2.style.backgroundColor = "#555";
}

let control3 = document.querySelector(".profile .mainboxP .mainprofile .contentprofile .general .generalText .websiteIcon");
let CancelIcon3 = document.querySelector(".profile .mainboxP .mainprofile .contentprofile .general .generalText .websiteIcon .cancel");
let doneIcon3 = document.querySelector(".profile .mainboxP .mainprofile .contentprofile .general .generalText .websiteIcon .done ");

CancelIcon3.onclick = function () {
    CancelIcon3.style.display = "none";
    doneIcon3.style.display = "block";
    control3.style.justifyContent = "flex-end";
    control3.style.backgroundColor = "cornflowerblue";
}

doneIcon3.onclick = function () {
    doneIcon3.style.display = "none";
    CancelIcon3.style.display = "block";
    control3.style.justifyContent = "flex-start";
    control3.style.backgroundColor = "#555";
}

let control4 = document.querySelector(".profile .mainboxP .mainprofile .contentprofile .general2 .generalText .websiteIcon");
let CancelIcon4 = document.querySelector(".profile .mainboxP .mainprofile .contentprofile .general2 .generalText .websiteIcon .cancel");
let doneIcon4 = document.querySelector(".profile .mainboxP .mainprofile .contentprofile .general2 .generalText .websiteIcon .done ");

CancelIcon4.onclick = function () {
    CancelIcon4.style.display = "none";
    doneIcon4.style.display = "block";
    control4.style.justifyContent = "flex-end";
    control4.style.backgroundColor = "cornflowerblue";
}

doneIcon4.onclick = function () {
    doneIcon4.style.display = "none";
    CancelIcon4.style.display = "block";
    control4.style.justifyContent = "flex-start";
    control4.style.backgroundColor = "#555";
}


let control5 = document.querySelector(".profile .mainboxP .mainprofile .contentprofile .general3 .generalText .websiteIcon");
let CancelIcon5 = document.querySelector(".profile .mainboxP .mainprofile .contentprofile .general3 .generalText .websiteIcon .cancel");
let doneIcon5 = document.querySelector(".profile .mainboxP .mainprofile .contentprofile .general3 .generalText .websiteIcon .done ");

CancelIcon5.onclick = function () {
    CancelIcon5.style.display = "none";
    doneIcon5.style.display = "block";
    control5.style.justifyContent = "flex-end";
    control5.style.backgroundColor = "cornflowerblue";
}

doneIcon5.onclick = function () {
    doneIcon5.style.display = "none";
    CancelIcon5.style.display = "block";
    control5.style.justifyContent = "flex-start";
    control5.style.backgroundColor = "#555";
}


let control6 = document.querySelector(".profile .mainboxP .mainprofile .contentprofile .general4 .generalText .websiteIcon");
let CancelIcon6 = document.querySelector(".profile .mainboxP .mainprofile .contentprofile .general4 .generalText .websiteIcon .cancel");
let doneIcon6 = document.querySelector(".profile .mainboxP .mainprofile .contentprofile .general4 .generalText .websiteIcon .done ");

CancelIcon6.onclick = function () {
    CancelIcon6.style.display = "none";
    doneIcon6.style.display = "block";
    control6.style.justifyContent = "flex-end";
    control6.style.backgroundColor = "cornflowerblue";
}

doneIcon6.onclick = function () {
    doneIcon6.style.display = "none";
    CancelIcon6.style.display = "block";
    control6.style.justifyContent = "flex-start";
    control6.style.backgroundColor = "#555";
}




let changeBtn = document.querySelector(".main .setting .mainbox .box .inputemail .inputchange p");
let inputEmail = document.querySelector(".main .setting .mainbox .box .inputemail .inputchange input");

changeBtn.onclick = function () {
    inputEmail.removeAttribute("disabled");
}