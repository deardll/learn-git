function yx(uname,type,blood,attack) {
    this.uname = uname;
    this.type = type;
    this.blood = blood;
    this.attack = attack;
}
var lp = new yx('廉颇','力量型','500血量','近战');
var hy = new yx('后羿','射手型','100血量','远程'); 
console.log(lp);
console.log(hy);