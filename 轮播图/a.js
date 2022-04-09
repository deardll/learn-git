window.addEventListener('load', function () {
    var arrowL = document.querySelector('.arrow-l')
    var arrowR = document.querySelector('.arrow-r')
    var box = document.querySelector('.box')


    //獲得圖片盒子中li的個數。
    var imgBox = document.querySelector('.imgBox');

    var imgLength = imgBox.getElementsByTagName('li').length;

    //鼠標移上去顯示翻頁箭頭
    box.addEventListener('mouseenter', function () {
        arrowL.style.display = 'block';
        arrowR.style.display = 'block'
        //清除轮播定时器并清空，（清空比较好？）
        clearInterval(timer);
        timer = null;
    })

    //鼠標移開隱藏翻頁箭頭
    box.addEventListener('mouseleave', function () {
        arrowL.style.display = 'none';
        arrowR.style.display = 'none';
        //开启定时器
        timer = setInterval(function () {
            //手动调用点击事件
            arrowR.click();
        },2000);
    })

    //根據輪播圖張數動態添加li
    var circle = box.querySelector('.circle');

    for (i = 0; i < imgLength; i++) {
        //circle.innerHTML += '<li>.</li>';
        var li = document.createElement('li');
        //记录索引号，添加自定义属性
        li.setAttribute('index', i);

        circle.appendChild(li);

        //點擊其中一個li顯示高亮
        var nowol = circle.getElementsByTagName('li');
        //每次循环时获取当前ul中得最后一个li
        //var li = circle.querySelector('li:last-child')
        // console.log(nowol);
        // console.log(li);


        li.addEventListener('click', function () {
            for (let i = 0; i < nowol.length; i++) {
                circle.children[i].className  = '';
                //console.log('11');
            }
            this.className = 'on-y';
            var index = this.getAttribute('index');
            num = index;
            circleoooo= index;
            //alert(num);


            //点击小圈圈移动图片
            //获取图片盒子的宽度
            var imgBoxLW = imgBox.querySelector('li').offsetWidth;
            //获取自定义属性，获取点击的第几个
            var olIndex = this.getAttribute('index')
            var imgBoxX = imgBoxLW * olIndex + 'px'
            //console.log(imgBoxLW);
            //console.log(olIndex);
            imgBox.style.right = imgBoxX;
        })
    }

    //給ol中第一個li添加樣式
    circle.children[0].className = 'on-y';


    //右侧按钮点击轮播
    var imgBoxLW = imgBox.querySelector('li').offsetWidth;
    //声明一个变量，点击一次，自增1，变量*图片宽度，就是滚动距离
    var num = 0;
    //circleoooo控制小圈圈的播放
    var circleoooo = 0;
    arrowR.addEventListener('click', function () {
        //声明一个变量，点击一次自增1，添加ol的选中状态
        circleoooo++;
        //当变量值和图片数量相等，则从头开始，赋值为0
        if (circleoooo == imgLength) {
            circleoooo = 0;
        }
        //清除所有圆圈的选中状态
        for (let i = 0; i < circle.children.length; i++) {
            circle.children[i].className = '';
        }
        circle.children[circleoooo].className = 'on-y';
        //当变量小于图片数量时给ul设置right浮动距离
        if (num < imgLength - 1) {
            num++;
            imgBox.style.right = num * imgBoxLW + 'px';
        } else { //在最后一张图片上点击时，回到第一张
            num = 0;
            imgBox.style.right = '0px';
        }
    })
    //左侧按钮点击轮播
    arrowL.addEventListener('click', function () {
        circleoooo--;
        if (circleoooo < 0) {
            circleoooo = imgLength-1;
        };
        //清除所有圆圈的选中状态
        for (let i = 0; i < circle.children.length; i++) {
            circle.children[i].className = '';
        }
        circle.children[circleoooo].className = 'on-y';

        if (num >= 1) {
            num--;
            imgBox.style.right = num * imgBoxLW + 'px';
        }else{//在第一张图片上点击时，显示最后一张
            num = imgLength-1;
            imgBox.style.right = num * imgBoxLW + 'px';
        }
    })


    //自动轮播
    var timer = setInterval(function () {
        //手动调用点击事件
        arrowR.click();
    },2000);






})
