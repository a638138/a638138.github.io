// When user has click and want to renew restaurant
// we have to remove preview url eventHandler
let USER_HAS_CLICK = false;

// Get restaurant randomly
function getRestaurant(){
    
    const restaurantList = [
        {
            name:'蒸餃無雙',
            GmapUrl:'https://www.google.com.tw/maps/place/%E8%92%B8%E9%A4%83%E7%84%A1%E9%9B%99/@24.7774162,121.0191993,17z/data=!3m1!4b1!4m5!3m4!1s0x3468362583380e8b:0xd73015622dba1eeb!8m2!3d24.7774113!4d121.021388?hl=zh-TW'
        },
        {   
            name:'角屋便當',
            GmapUrl:'https://www.google.com.tw/maps/place/%E8%A7%92%E5%B1%8B%E4%BE%BF%E7%95%B6-%E5%85%89%E5%BE%A9%E5%BA%97/@24.7844796,121.0099739,15z/data=!4m5!3m4!1s0x0:0xeebb74203b79d92c!8m2!3d24.7844796!4d121.0151795?hl=zh-TW&authuser=0'
        },
        {   
            name:'沙茶牛肉炒飯麵',
            GmapUrl:'https://www.google.com.tw/maps/place/%E6%B2%99%E8%8C%B6%E7%89%9B%E8%82%89%E7%82%92%E9%A3%AF%E9%BA%B5/@24.7844796,121.0099739,15z/data=!4m5!3m4!1s0x0:0x6627436f342af4d3!8m2!3d24.7899902!4d121.0187361?hl=zh-TW&authuser=0'
        },
        {   
            name:'金山麵食館',
            GmapUrl:'https://www.google.com.tw/maps/place/%E9%87%91%E5%B1%B1%E9%BA%B5%E9%A3%9F%E9%A4%A8/@24.7806867,121.0226826,16.25z/data=!4m5!3m4!1s0x0:0xf0d4df9d81eb9224!8m2!3d24.7778607!4d121.0191813?hl=zh-TW&authuser=0'
        },
        {   
            name:'禾米雞腿大王',
            GmapUrl:'https://www.google.com.tw/maps/place/%E7%A6%BE%E7%B1%B3%E9%9B%9E%E8%85%BF%E5%A4%A7%E7%8E%8B-%E9%87%91%E5%B1%B1%E5%BA%97/@24.7798512,121.0223939,16.25z/data=!4m5!3m4!1s0x0:0x175f83d8f1f44c3f!8m2!3d24.7780519!4d121.0199471?hl=zh-TW&authuser=0'
        },
        {   
            name:'無名麵店(關新路到底)',
            GmapUrl:'https://www.google.com.tw/maps/place/300%E6%96%B0%E7%AB%B9%E5%B8%82%E6%9D%B1%E5%8D%80%E5%8D%97%E6%B8%85%E5%85%AC%E8%B7%AF349%E8%99%9F/@24.7831403,121.0171909,19z/data=!4m5!3m4!1s0x3468363b6d54b9b3:0xf2efffa6ce6896c3!8m2!3d24.7831391!4d121.0177381?hl=zh-TW&authuser=0'
        },
        {   
            name:'關新刀切麵食館',
            GmapUrl:'https://www.google.com.tw/maps/place/%E9%97%9C%E6%96%B0%E5%88%80%E5%88%87%E9%BA%B5%E9%A3%9F%E9%A4%A8/@24.7869085,121.0198194,16z/data=!4m5!3m4!1s0x0:0xaa8559bbe086fa99!8m2!3d24.7871729!4d121.0193302?hl=zh-TW&authuser=0'
        },
        {   
            name:'麥當勞',
            GmapUrl:'https://www.google.com.tw/maps/place/%E9%BA%A5%E7%95%B6%E5%8B%9E-%E6%96%B0%E7%AB%B9%E9%97%9C%E6%96%B0%E5%BA%97/@24.7848898,121.0175344,17.25z/data=!4m5!3m4!1s0x3468363bb76213bb:0xcb94e9af699998b8!8m2!3d24.7847931!4d121.0186878?hl=zh-TW&authuser=0'
        },
    ];

    let id = Math.floor(Math.random()*restaurantList.length);

    return restaurantList[id];
}

// Display restaurant when user click on button
function changeUI(){
    let restaurant = getRestaurant();
    let restaurantName = restaurant.name;
    let restaurantGmapUrl = restaurant.GmapUrl;
    document.getElementsByClassName("output_container")[0].style.display = 'block';
    document.getElementById("output").innerText = restaurant.name;
    setOutputUrl(restaurantGmapUrl);
}

// Set the redirect url
function setOutputUrl(url){

    let output = document.getElementsByClassName("output_container")[0];
    output.url = url;

    if(!USER_HAS_CLICK){
        output.addEventListener("click", _setOutputUrl);
        USER_HAS_CLICK = true;
    }
    else{
        output.removeEventListener("click", _setOutputUrl);
        output.addEventListener("click", _setOutputUrl);
    }
}

function _setOutputUrl(e){
    window.location = e.currentTarget.url;
}

document.getElementById("title").addEventListener("click", changeUI)
