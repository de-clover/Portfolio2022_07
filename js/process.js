setTimeout(()=> {
    const menulist = document.querySelectorAll("header .mainmenu li");
    menulist.forEach((v, i)=> {
        v.querySelector("a").setAttribute("href", `./index.html#m_${i}`);
    })
}, 100);