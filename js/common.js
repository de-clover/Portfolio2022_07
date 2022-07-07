$(document).ready(function(){


    // $("지정한 대상의 선택자").load("가져올 외부파일", 콜백함수);
    // 지정한 대상의 선택자에 가져올 외부파일을 넣고 그 이후에 콜백함수 내부의 실행문을 진행시켜라

    // 외부 파일을 가져왔을 때는 이벤트를 걸기 위한 시점이 늦기 때문에 콜백함수를 활용
    $("header").load("./header.html", function(){
        // var $hash = location.hash;
        // console.log($hash);
        // var $num_hash = $hash.replace("#", "");
        // console.log($num_hash);

        const $hash = location.hash;
        const hash_num = $hash.split("_");
        console.log(hash_num[1]);

        if(!hash_num[1]){

        $("header .mainmenu li").removeClass("active");
        $("header .mainmenu li").eq(0).addClass("active");

        $(".box").removeClass("active");
        $(".box").eq(0).addClass("active");
        $("html, body").stop().animate({scrollTop : 0}, 1000);

        const menulist = document.querySelectorAll("header .mainmenu li");
        menulist.forEach((v, i)=> {
            v.querySelector("a").setAttribute("href", `./index.html#m_${i}`);
        });
        

        }else{
            $("header .mainmenu li").removeClass("active");
            $("header .mainmenu li").eq(hash_num[1]).addClass("active");
            $(".box").removeClass("active");
            $(".box").eq(hash_num[1]).addClass("active");
            $("html, body").stop().animate({scrollTop : $(".box").eq(hash_num[1]).offset().top}, 1000);
        }

        

        // $("header nav ul li").eq($num_hash).addClass("acitve")
        // $("header .mainmenu li").eq($num_hash).addClass("acitve")

        // var $href = location.href;
        // console.log($href)
    });
    // $("footer").load("./footer.html")











});
