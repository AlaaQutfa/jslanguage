var logo = document.getElementById("logo");
var contact = document.getElementById("contact");
var lang = document.getElementById("lang");
var articletitle1 = document.getElementById("article-title1");
var FrontEnd = document.getElementById("Front-End");
var pfront1 = document.getElementById("pfront1");
var pfront2 = document.getElementById("pfront2");
var BackEnd = document.getElementById("Back-End");
var pback1 = document.getElementById("pback1");
var pback2 = document.getElementById("pback2");
var FullStack = document.getElementById("Full-Stack");
var pfull1 = document.getElementById("pfull1");
var pfull2 = document.getElementById("pfull2");
var articletitle2 = document.getElementById("article-title2");
var channel = document.getElementById("channel");
var plearn = document.getElementById("plearn");
var english = document.getElementById("enbtn");
var arabic = document.getElementById("arbtn");
function arlang(){
    if(document.body.hasAttribute("dir","ltr")){
        document.body.setAttribute("dir","rtl");
    }
    logo.innerHTML = `أكواريوس`;
    contact.innerHTML = `اتصل:`;
    lang.innerHTML = `اختر اللغة:`;
    articletitle1.innerHTML = `مجال تصميم الويب`;
    FrontEnd.innerHTML = `مطور الواجهة الأمامية:`;
    pfront1.innerHTML = `إنه الشخص الذي يصمم القسم الذي يراه المستخدمون`;
    pfront2.innerHTML = `لغات البرمجة المطلوبة للعمل في هذا المجال هي: html، css، javascript`;
    BackEnd.innerHTML = `المطور الخلفي:`;
    pback1.innerHTML = `هو الذي يصمم القسم العملي في المواقع`;
    pback2.innerHTML = `لغات البرمجة اللازمة للعمل في هذا المجال هي: php، sql، mysql، python`;
    FullStack.innerHTML = `مطور كامل الموقع:`;
    pfull1.innerHTML = `إنه الشخص الذي يصمم الموقع بالكامل`;
    pfull2.innerHTML = `لغات البرمجة اللازمة للعمل في هذا المجال هي: html ، css ، javascript ، php ، sql ، mysql ، python`;
    articletitle2.innerHTML = `أفضل مصدر لتعلم اللغات:`;
    channel.innerHTML = `المبرمج شيار:`;
    plearn.innerHTML = `أفضل مصدر يمكنك متابعة الدروس من خلال قوائم التشغيل المنظمة وستصبح محترفًا`;
}
function enlang(){
if(document.body.hasAttribute("dir","rtl")){
    document.body.setAttribute("dir","ltr");
}
    logo.innerHTML = `AQUARIUS`;
    contact.innerHTML = `Contact:`;
    lang.innerHTML = `Choose Language:`;
    articletitle1.innerHTML = `Web Design Field`;
    FrontEnd.innerHTML = `Front-End Developer:`;
    pfront1.innerHTML = `He is the one who designs the section that users see`;
    pfront2.innerHTML = `The programming languages ​​needed to work in this field are: html, css, javascript`;
    BackEnd.innerHTML = `Back-End Developer:`;
    pback1.innerHTML = `He is the one who designs the practical section of the websites`;
    pback2.innerHTML = `The programming languages ​​needed to work in this field are: php, sql, mysql, python`;
    FullStack.innerHTML = `Full-Stack Developer:`;
    pfull1.innerHTML = `He is the one who designs the entire website`;
    pfull2.innerHTML = `The programming languages ​​needed to work in this field are: html, css, javascript,php, sql, mysql, python`;
    articletitle2.innerHTML = `The best resource for learning languages:`;
    channel.innerHTML = `Coder Shiyar:`;
    plearn.innerHTML = `The best resource you can follow lessons with curated playlists and become a professional`;
}
english.onclick = ()=>{
    enlang();
}
arabic.onclick = ()=>{
    arlang();
}