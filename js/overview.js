//setTimeout(()=> {

//}, 200);


const projectArr = [
    ["cakehouse_thumb.png", "CAKEHOUSE", "HTML, CSS, JS", "practice", "https://de-clover.github.io/cakehouse/"],
    ["kuliner_thumb.png", "KULINER", "HTML, CSS, JS, plugin(Slick)", "uxui", "https://de-clover.github.io/kuliner/"],
    ["BnO_thumb.png", "BnOplay", "HTML, CSS", "uxui", "https://de-clover.github.io/BnOplay/"],
    ["cashmere_thumb.png", "CASHMERE", "HTML, CSS, JS", "uxui", "https://https://de-clover.github.io/cashmere/"],
    ["musicbox_thumb.png", "MUSIC BOX", "HTML, CSS, JS", "uxui", "https://de-clover.github.io/musicBox_MiyazakiH/"],
    ["nationalGeo_thumb.png", "National Geographic", "HTML, CSS, JS(VueJs)", "develop", "https://de-clover.github.io/ngeo2022/#/"],
    ["oclass_thumb.png", "OClass", "HTML, CSS, JS, php", "develop", "http://daeun.dothome.co.kr/oclass/"],
    ["bhs_thumb.png", "BHS HOSPITAL", "HTML, CSS, JS, php", "develop", "https://"],
    ["weddingpage_thumb.png", "WEDDING PAGE", "HTML, CSS", "practice", "https://de-clover.github.io/weddingpage/"],
    ["auditionSite_thumb.png", "AUDITION SITE", "HTML, CSS, JS(VueJs), plugin(Slick)", "develop", "https://"],
    ["weatherapp_thumb.png", "WEATHER APP", "HTML, CSS, API", "practice", "https://"],
    ["sejong_thumb.png", "SEJONG HOSPITAL", "HTML, CSS", "practice", "https://"],
    ["chattingapp_thumb.png", "CHATTING APP", "HTML, CSS, PHP", "practice", "https://"],
];

const sectionSpace = document.querySelector("#contents");
let sectionCont = "";

for(v of projectArr){
    sectionCont += `
            <div class="${v[3]} eachBox" onclick="window.open('${v[4]}','mywindow');">
                <div class="cont_wrap">
                    <div class="imgBx">
                        <img src="./img/overview/${v[0]}" alt="">
                    </div>
                    <div class="txtBx">
                        <h2>${v[1]}</h2>
                        <p>${v[2]}</p>
                    </div>
                </div>
            </div>                                      
    `
}

sectionSpace.innerHTML = sectionCont;


//그리디 시스템으로 적용
let grid;
const timeOut = setTimeout(() => {
    grid = new Isotope("#contents", {
        itemSelector : ".eachBox",
        transitionDuration : "0.5s"
    });
}, 500);

//클릭한 곳의 이미지를 보여주는 구현
const sortBtns = document.querySelectorAll(".sort_btn li");
console.log(sortBtns);

for(v of sortBtns){
    v.addEventListener("click", (e) => {
        e.preventDefault();
        const dataSort = e.currentTarget.querySelector("a").getAttribute("data-sort");
        grid.arrange({
            filter : dataSort
        });

        //전체 버튼에 클래스명 active 제거
        for(v of sortBtns){
            v.classList.remove("active");
        }

        //클릭한 곳의 버튼만 클래스명 active 부여
        e.currentTarget.classList.add("active");
    });    
}

