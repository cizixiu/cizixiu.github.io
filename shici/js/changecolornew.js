window.onload = function() {
    changeBgColor();
}
function changeBgColor() {
    var colorBgList = [
        [["#bf242a", "#8d6449", "#d9a62e", "#006e54", "#895b8a", "#d3a243", "#00a497", "#c89932", "#d0af4c", "#80aba9", "#b98c46", "#8b968d", "#478384", "#aa4c8f", "#43676b", "#767c6b", "#b77b57", "#b68d4c", "#888e7e", "#5a544b", "#2c4f54", "#ad7d4c", "#56564b", "#47585c", "#ad7e4e", "#6b6f59", "#a86f4c", "#946243", "#333631", "#5b7e91", "#917347", "#5b6356", "#426579", "#726250", "#956f29", "#8c7042", "#9d896c", "#455765", "#d8a373", "#897858", "#393f4c", "#9e8b8e", "#e09e87", "#cd8c5c", "#716246", "#393e4f", "#cd5e3c", "#cbb994", "#203744", "#cb8347", "#bfa46f", "#c38743", "#9e9478", "#a59564", "#715c1f", "#c7b370", "#a19361", "#8f8667", "#5a5359", "#887938", "#6a5d21", "#918754", "#ada250", "#938b4b", "#8c8861", "#008899", "#2a83a2", "#a1a46d", "#726d40", "#928c36", "#0094c8", "#007bbb", "#928178", "#887f7a", "#b28c6e", "#9f6f55", "#8c6450", "#765c47", "#99ab4e", "#7b8d42", "#69821b", "#1e50a2", "#19448e", "#164a84", "#165e83", "#839b5c", "#583822", "#664032", "#3f312b", "#82ae46", "#ec6d51", "#223a70", "#0f2350", "#17184b", "#a8bf93", "#93b881", "#97a791", "#4a488e", "#69b076", "#6b7b6e", "#5654a2", "#68699b", "#949495", "#7d7d7d", "#47885e", "#316745", "#3eb370", "#007b43", "#7058a3", "#674196", "#524e4d", "#595857", "#383c3c", "#f8b500", "#3b7960", "#475950", "#16160e", "#005243", "#e6b422", "#ab6953", "#475950", "#55295b", "#522f60", "#eec362", "#e0c38c", "#3d3b4f", "#75664d", "#a78e44", "#ae7000", "#b35c44", "#a88462", "#845a33", "#21a675", "#057748", "#789262", "#50616d", "#41555d", "#db5a6b", "#a98175", "#9d2933", "#1685a9", "#065279", "#003472", "#2e4e7e", "#4a4266", "#426666", "#815463", "#003371", "#56004f", "#c93756", "#cb3a56", "#161823", "#5d513c", "#549688", "#d9b611", "#0aa344"],'#ffffff'],
        [["#f6bfbc","#d0af4c","#deb068","#e6b422","#d9a62e","#c89932","#38b48b","#80aba9","#8b968d","#b79b5b","#f5b199","#80989b","#c4a3bf","#eebbcb","#e8d3c7","#e8d3d1","#e5abbe","#e4ab9b","#d8a373","#9d896c","#a89dac","#9e8b8e","#cd8c5c","#cbb994","#95949a","#d6c6af","#bfa46f","#9e9478","#a59564","#c7b370","#dcd3b2","#a2d7dd","#abced8","#918754","#ada250","#d3cbc6","#d4dcd6","#c8c2be","#83ccd2","#a1a46d","#59b9c6","#d7cf3a","#c5c56a","#c3d825","#e0ebaf","#d8e698","#c7dc68","#aacf53","#b9d08b","#f8f4e6","#ede4cd","#f8b862","#cee4ae","#ede1a9","#e4dc8a","#a8c97f","#9ba88d","#f8e58c","#c8d5bb","#c1d8ac","#a8bf93","#f2c9ac","#93ca76","#fddea5","#fce2c4","#badcad","#c0c6c9","#dddcd6","#afafb0","#f4dda5","#bed2c3","#efcd9a","#ffd900","#e0c38c","#f3bf88","#fcd575","#fbd26b","#eec362","#bed3ca","#92b5a9","#ebd842","#7ebeab","#fbca4d","#fcc800","#e6b422"],'#000000']
    ];
    var n = Math.floor(Math.random() * colorBgList.length);
    if(n==0){
        m = Math.floor(Math.random() * colorBgList[n][0].length);
        bgColor = colorBgList[n][0][m];
        color = colorBgList[n][1];
    }else if(n==1) {
        k = Math.floor(Math.random() * colorBgList[n][0].length);
        bgColor = colorBgList[n][0][k];
        color = colorBgList[n][1];
    }
    document.getElementById('cb').style.background = bgColor;
    document.getElementById('jinrishici-sentence-quanwen').style.color = color;
}
// JavaScript Document