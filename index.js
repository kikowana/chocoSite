var dueList = ["ジェット - Jett","レイズ - Raze","フェニックス - Phoenix","レイナ - Reyna","ヨル - Yoru","ネオン - Neon"];
var iniList = ["ブリーチ - Breach","ソーヴァ - Sova","スカイ - Skye","KAY/O - ケイ・オー","フェイド - Fade"];
var conList = ["オーメン - Omen","ブリムストーン - Brimstone","ヴァイパー - Viper","アストラ - Astra"];
var senList = ["セージ - Sage","サイファー - Cypher","キルジョイ - Killjoy","チェンバー - Chamber"];
var setList = []


function randomCheck(){
    var dueNum = document.getElementById("duelists").value;
    var iniNum = document.getElementById("initiator").value;
    var conNum = document.getElementById("controller").value;
    var senNum = document.getElementById("sentinels").value;
    totalNum = +dueNum + +iniNum + +conNum + +senNum;
    if (totalNum > 5){
        alert("Valorantは5vs5のゲームです。\n意：足し算出来ないカスはValorant引退しろ");
        return;
    }


    rollChar(+dueNum, dueList);
    rollChar(+iniNum, iniList);
    rollChar(+conNum, conList);
    rollChar(+senNum, senList);
    setList = createRandomList(setList);
    for(var i = 1; i <= 5; i++){
        changeText("PL" + String(i),setList[i - 1]);
    }
    console.log(setList);
    setList = []
}


function rollChar(rollNum,rollList){ //キャラを決定させる関数

    while(rollNum > 0){
        var charName = rollList[Math.floor(Math.random() * rollList.length)];
        var result = setList.includes(charName);

        if (result === false) {
            setList[setList.length] = charName;
            rollNum--;
        }
    }
}

function changeText(changeId,text){
    let change = document.getElementById(changeId).textContent
    document.getElementById(changeId).textContent = String(text);
}

function createRandomList(beforList){
    var afterList = [];
    var randomChar = "";
    var i = 0;
    while(i < beforList.length){
        randomChar = beforList[Math.floor(Math.random() * beforList.length)];
        var result = afterList.includes(randomChar);
        if (result === false){
            afterList[i] = randomChar;
            i++;
        }
    }
    return afterList;

}