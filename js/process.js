setTimeout(()=> {
    const menulist = document.querySelectorAll("header .mainmenu li");
    menulist.forEach((v, i)=> {
        v.querySelector("a").setAttribute("href", `./main.html#m_${i}`);
    })
}, 100);