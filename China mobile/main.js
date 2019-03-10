window.onload = function () {
    var oImg = document.getElementById('img');
    var oLick = document.getElementById('click');
    var oDoc = document.body;
    var onOff = true;
    oImg.onclick = function () {
        if (onOff) {
            oLick.style.display = "block";
            onOff = false;
        }
    }

    oDoc.onclick = function () {
        if (onOff == false) {

        }
        else {
            oLick.style.display = "none";
        }
        onOff = true;
    }

    /* 轮播 */
    var oBmcleft = document.getElementsByClassName('bmcleft')[0];
    var oBmcright = document.getElementsByClassName('bmcright')[0];
    var oBmclist = document.getElementById('bmclist');
    var oBmcli = oBmclist.getElementsByTagName('li');
    var oBmcimg = document.getElementById('bmcimg');
    var oBanner = document.getElementsByClassName('banner')[0];
    var oArr = ['imges/4.jpg', 'imges/11.png', 'imges/6.jpg', 'imges/12.png', 'imges/2.jpg', 'imges/1.jpg', 'imges/8.jpg', 'imges/3.jpg'];
    var oBg = ['#feb546', '#007aff', '#181976', '#2a91ff', '#a20903', '#efdbc0', '#e65dfd', '#210552']
    var num = 0;
    var timer = 0;
    // 初始化
    function change() {
        oBmcimg.src = oArr[num];
        oBanner.style.background = "" + oBg[num] + "";
        for (var j = 0; j < oArr.length; j++) {
            oBmcli[j].style.background = "#3f170b";
        }
        oBmcli[num].style.background = "#e30077";
    }
    change();

    oBmcright.onclick = function () {
        num++;
        if (num == oArr.length) { num = 0 }
        change();
    }
    oBmcleft.onclick = function () {
        num--;
        if (num == -1) { num = oArr.length - 1 }
        change();
    }

    timer = setInterval(fn, 3000);
    function fn() {
        num++;
        if (num == oArr.length) { num = 0 }
        change();
    }
    oBanner.onmouseover = function () {
        clearInterval(timer);
    }
    oBanner.onmouseout = function () {
        clearInterval(timer);
        timer = setInterval(fn, 3000);
    }

    for (var i = 0; i < oArr.length; i++) {
        oBmcli[i].index = i;//给每个li添加一个 index
        oBmcli[i].onclick = function () {    //点击li事件
            for (var j = 0; j < oArr.length; j++) {
                oBmcli[j].style.background = "#3f170b";  //所有li的背景色回到原始状态
            }
            this.style.background = "#e30077";   //给当前点击的 li  添加 颜色
            oBmcimg.src = oArr[this.index];      //改变背景图片 ，和点击的li 同步
            oBanner.style.background = "" + oBg[this.index] + "";
            num = this.index; //把点击的li 的下标赋值给定时器的下标。
        }
    }

    // 初始化
    var Bmarr = ['imges/1.gif', 'imges/2.gif', 'imges/13.png', 'imges/4.gif', 'imges/5.gif', 'imges/6l.gif'];
    var Bmtext = ['话费查询', '流量查询', '国际/港澳台', '积分兑换', '优惠专区', '业务办理'];
    var Bmarr2 = ['imges/7.gif', 'imges/8.gif', 'imges/9.gif', 'imges/10.gif', 'imges/11.gif', 'imges/12.gif'];
    var Bmtext2 = ['余额查询', '套餐余量', '账单查询', '详单查询', '已订购业务', '返回'];
    var oBmselect = document.getElementsByClassName('bmselect')[0];
    var oBmimg = oBmselect.getElementsByTagName('img');
    var oBmp = oBmselect.getElementsByTagName('p');
    var oTz = document.getElementById('tz');
    var oFh = document.getElementById('fh');
    for (var i = 0; i < Bmarr.length; i++) {
        oBmimg[i].src = Bmarr[i];
        oBmp[i].innerText = Bmtext[i];
    }
    oTz.onclick = function () {
        for (var i = 0; i < Bmarr.length; i++) {
            oBmimg[i].src = Bmarr2[i];
            oBmp[i].innerText = Bmtext2[i];
        }
    }
    oFh.onclick = function () {
        for (var i = 0; i < Bmarr.length; i++) {
            oBmimg[i].src = Bmarr[i];
            oBmp[i].innerText = Bmtext[i];
        }
    }

    //  banner bmaright部分
    var oBmr = document.getElementsByClassName('bmrbottom')[0];
    var oA1 = oBmr.getElementsByTagName('a')[0];
    var oA2 = oBmr.getElementsByTagName('a')[1];
    var oP = oBmr.getElementsByTagName('p');
    var oPtext = ['1G', '2G', '3G', '5G', '10G'];
    var oPtext2 = ['30元', '50元', '60元', '100元', '150元'];
    var oPtext3 = ['30元', '50元', '100元', '300元', '其它']
    for (var i = 0; i < oP.length; i++) {
        oP.index = i;
        oP[i].onclick = function () {
            for (var j = 0; j < oP.length; j++) {
                oP[j].style.background = "rgba(255,255,255,0)";
                oP[j].style.color = "#000";
            }
            this.style.background = "#e30077";
            this.style.color = "#fff";
        }
    }
    oA2.onclick = function () {
        oA1.style.color = "#000";
        oA1.style.borderBottom = "none";
        this.style.color = "#3eb4fa";
        this.style.borderBottom = "solid 2px #3eb4fa";
        for (var i = 0; i < oP.length; i++) {
            oP[i].style.height = "44px";
            oP[i].style.lineHeight = "22px";
            oP[i].innerHTML = oPtext[i] + "<br>" + oPtext2[i];
        }
        for (var j = 0; j < oP.length; j++) {
            oP[j].style.background = "rgba(255,255,255,0)";
            oP[j].style.color = "#000";
        }
        oP[0].style.background = "#e30077";
        oP[0].style.color = "#fff";
    }
    oA1.onclick = function () {
        oA2.style.color = "#000";
        oA2.style.borderBottom = "none";
        this.style.color = "#3eb4fa";
        this.style.borderBottom = "solid 2px #3eb4fa";
        for (var i = 0; i < oP.length; i++) {
            oP[i].style.height = "37px";
            oP[i].style.lineHeight = "32px";
            oP[i].innerHTML = oPtext3[i];
        }
        for (var j = 0; j < oP.length; j++) {
            oP[j].style.background = "rgba(255,255,255,0)";
            oP[j].style.color = "#000";
        }
        oP[0].style.background = "#e30077";
        oP[0].style.color = "#fff";
    }



    /* 特色专区 */
    var oTesleft = document.getElementById('Tesleft');
    var oTesright = document.getElementById('Tesright');
    var Tes2 = document.getElementsByClassName('Tes2')[0];
    var Tesa = Tes2.getElementsByTagName('a')[0];
    var Tesa2 = Tes2.getElementsByTagName('a')[1];
    var Arrtext =
        [
            "中国移动位列“中国企业十年社会责任发展指数”榜首并获“责任十年•国企十佳”奖",
            "关于11月30日网站系统升级的公告",
            "关于11月22日系统升级的公告关于11月22日系统升级的公告关于11月22日系统升级的公告",
            "【紧急公告】关于11月27日系统升级的公告",
        ]
    var num = 0;
    oTesleft.onclock = function () {
        num++;
        Tesa1.innerText = Arrtext[num];
        alert(a)
    }

    /* F5  小轮播 */

    var oBtn = document.getElementsByClassName('btn')[0];
    var oBa1 = document.getElementsByClassName('ba1')[0];
    var oBi = oBtn.getElementsByTagName('i');
    var oF5img = document.getElementById('F5img');
    var Arrimg = ['imges/40.jpg', 'imges/39.jpg', 'imges/38.jpg'];
    var oTitle = ['神偷奶爸:小黄人快跑', '送你一匹马(网剧《北京女子图鉴》主题曲)', '载音'];
    var f = 0;
    //初始化
    function F5() {
        oF5img.src = Arrimg[f];
        oBi[f].style.background = "#e30077";
        oF5img.title = oTitle[f];
    }
    F5();
    for (var i = 0; i < oBi.length; i++) {
        oBi[i].index = i;
        oBi[i].onmouseover = function () {
            for (var j = 0; j < Arrimg.length; j++) {
                oBi[j].style.background = "#fff";
            }
            this.style.background = "#e30077";
            oF5img.src = Arrimg[this.index];
            oF5img.title = oTitle[this.index];
        }
    }
    var t1 = setInterval(f3, 3000);
    function f3() {
        f++;
        if (f == Arrimg.length) { f = 0 }
        for (var j = 0; j < Arrimg.length; j++) {
            oBi[j].style.background = "#fff";
        }
        oBi[f].style.background = "#e30077";
        oF5img.src = Arrimg[f];
        oF5img.title = oTitle[f];
    }

    oBa1.onmouseover = function () {
        clearInterval(t1);
    }
    oBa1.onmouseout = function () {
        clearInterval(t1);
        t1 = setInterval(f3, 2000);
    }

    /* 切换 */

    var oF5l = document.getElementById('F5l');
    var oF5r = document.getElementById('F5r');
    var oF5sp = document.getElementById('F5sp');
    var oF5div = document.getElementsByClassName('F5div');
    var oArrimg1 = ['imges/41.jpg', 'imges/42.jpg', 'imges/43.jpg', 'imges/44.jpg', 'imges/46.jpg'];
    var oArrtext1 = ['再也没有(歌手201', '离人愁', 'Beggar', '后来的我们', '超级喜欢你'];
    var oArrimg2 = ['imges/52.jpg', 'imges/53.jpg', 'imges/54.jpg', 'imges/55.jpg', 'imges/56.jpg'];
    var oArrtext2 = ['初见初恋', '听雪', 'Goodnight', '菩提偈', '给女儿的一封信'];
    oF5l.onclick = function () {
        for (var i = 0; i < oArrimg1.length; i++) {
            oF5dimg[i].img.src = oArrimg1[i];
        }
    }

    /* 滚动菜单栏 */  /* 右边固定菜单栏 */
    var oFixed = document.getElementById('Fright');
    var oFp = oFixed.getElementsByTagName('p');
    var oFtop = document.getElementsByClassName('Ftop')[0];
    var oFright=document.getElementById('Fright');
    var on=true;
    var oCdan = document.getElementsByClassName('Cdan')[0];
    window.onscroll =function() {
        var scrtop = document.documentElement.scrollTop;
        if (scrtop > 666) {
            oCdan.style.display = "block";
            on=false;

        } else {
            oCdan.style.display = "none";
            on=true;
        }
        if(scrtop>930 && on==false)
        {
            oFright.style.display = "block";
        }else{
            oFright.style.display = "none";
        }
        oFtop.onclick = function () {
            document.documentElement.scrollTop = 0;
        }
       /*  if(scrtop>730 && scrtop<1230)
        {
            for(var i=0;i<oFp.length;i++)
            {
                oFp[i].style.background="#fff";
            }
            oFp[0].style.background="#25b2fe";
            oFp[0].innerHTML="享优惠";
            oFp[0].style.lineHeight="20px";
        }else if(scrtop>1230 && scrtop<1730)
        {
            for(var i=0;i<oFp.length;i++)
            {
                oFp[i].style.background="#fff";
            }
            oFp[1].style.background="#25b2fe";
            oFp[1].innerHTML="业务推荐";
            oFp[1].style.lineHeight="20px";
            
        }else if(scrtop>1730 && scrtop<2230)
        {
            for(var i=0;i<oFp.length;i++)
            {
                oFp[i].style.background="#fff";
            }
            oFp[2].style.background="#25b2fe";
            oFp[2].innerHTML="手机专区";
            oFp[2].style.lineHeight="20px";
        }else if(scrtop>2230 && scrtop<2730)
        {
            for(var i=0;i<oFp.length;i++)
            {
                oFp[i].style.background="#fff";
            }
            oFp[3].style.background="#25b2fe";
            oFp[3].innerHTML="智能硬件";
            oFp[3].style.lineHeight="20px";
        }else if(scrtop>2730 && scrtop<3330)
        {
            for(var i=0;i<oFp.length;i++)
            {
                oFp[i].style.background="#fff";
            }
            oFp[4].style.background="#25b2fe";
            oFp[4].innerHTML="咪咕娱乐";
            oFp[4].style.lineHeight="20px";
        }else if(scrtop>3330)
        {
            for(var i=0;i<oFp.length;i++)
            {
                oFp[i].style.background="#fff";
            }
        }
        else{
            oFp[0].style.background="#fff";
            oFp[1].style.background="#fff"; 
            oFp[0].innerHTML="1F";
            oFp[0].style.lineHeight="39px";
            oFp[0].style.color="#000";
            oFp[1].innerHTML="2F";
            oFp[1].style.lineHeight="39px";
            oFp[1].style.color="#000";
            oFp[2].innerHTML="3F";
            oFp[2].style.lineHeight="39px";
            oFp[2].style.color="#000";
            oFp[3].innerHTML="4F";
            oFp[3].style.lineHeight="39px";
            oFp[3].style.color="#000";
            oFp[4].innerHTML="5F";
            oFp[4].style.lineHeight="39px";
            oFp[4].style.color="#000";
        } */
    }

    /* 小广告 */
    var oGgao = document.getElementsByClassName('Ggao')[0];
    var oGgaobtn = document.getElementById('Ggaobtn');
    oGgaobtn.onclick = function () {
        oGgao.style.display = "none";
    }

    var oYsdanm = document.getElementsByClassName('Ysdanm')[0];
    var oYsdan = document.getElementsByClassName('Ysdan')[0];
    var oYsimg = document.getElementById('Ysimg');
    oYsimg.onclick = function () {
        oYsdan.style.display = "none";
        oYsdanm.style.display = "none";
    }
    if (oYsdan.style.display == "block") {
        oGgao.style.display = "none";
    } else {

    }
    var Gaotimer = setInterval(function Gao() {
        oYsdan.style.display = "none";
        oYsdanm.style.display = "none";
        oGgao.style.display = "block";

    }, 4000);

    
    
    /* if(oFright>700)
    {
        ;
        
    }
        else  if(oFright>900)
        {oFixed.style.display="block"
            oFp[1].style.background="#25b2fe";
        }
    else
    {
        oFixed.style.display="none";
    }*/

}


