/**
 * Created by Administrator on 2016/5/21.
 */
$(function () {
    $("#fullpage").fullpage({
        verticalCentered: false,
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7', 'page8', 'page9', 'page10'],
        navigation: true,
        navigationTooltips: ['首页', '视觉', '交互', '皮肤', '功能', '待办邮件', '联系人邮件', '科技', '连接易信', '马上体验'],
        easingcss3: 'ease-in',
    afterLoad:function (anchors, index) {


        if (index == 1) {
            $(".bg12").transition({bottom: 90, opacity: 1}, 1700);
            $(".bg13").transition({bottom: 0, opacity: 1}, 1000);
            $(".mail").transition({top:25},1000);
            $(".hgroup").transition({opacity: 1,scale:'1,1'}, 1000);
            $(".p11").transition({opacity: 1, delay: 1300}, 1000);
        }
        if (index==2){
            $(".bg21").transition({marginLeft:-608, opacity: 1}, 1000);
            $(".bg22").transition({marginLeft:-280, opacity: 1}, 1000);
            $(".bg23").transition({bottom:100},1000);
            $(".p1").transition({opacity: 1, delay: 1300}, 1000);
            $("strong,h3").transition({opacity: 1,scale:'1,1'},700);
        }
        if (index==3){
            $(".bg31,.bg32").transition({opacity:1},1000);
            $(".bg33").transition({opacity:1,marginLeft:-120},1000);
            $("strong,h3").transition({opacity: 1,scale:'1,1'},700);
            $(".p3").transition({opacity:1,marginLeft:-480},1000);
        }
        if (index==4){
            $(".bg41").transition({bottom:'15%'},700);
            $(".bg42").transition({bottom:'15%'},1100);
            $(".bg43").transition({bottom:'15%'},900);
            $("strong,h3").transition({opacity: 1,scale:'1,1'},700);
            $(".p1").transition({opacity: 1, delay: 1300}, 1000);
        }
        if (index==5){
            $("strong,h3").transition({opacity: 1,scale:'1,1'},700);
            $(".bg51").transition({marginLeft:-551,opacity:1},700);
            $(".bg52").transition({marginLeft:-253,opacity:1},700);
            $(".bg53").transition({marginLeft:45,opacity:1},700);
            $(".bg54").transition({marginLeft:345,opacity:1},700);
        }
        if (index==6){
            $(".bg61").transition({top:0},1000);
            $(".bg62").transition({left:'50%'},1000);
            $("strong,h3").transition({opacity: 1,scale:'1,1'},700);
            $(".txt6").transition({opacity:1,left:'50%'},1000);
        }
        if (index==7){
            $(".bg71").transition({bottom:250,opacity:1},700);
            $(".bg72").transition({bottom:350,opacity:1},900);
            $("strong,h3").transition({opacity: 1,scale:'1,1'},700);
            $(".txt7").transition({opacity:1,bottom:420},1100);
        }
        if (index==8){
            $(".bg82").transition({bottom:260,marginLeft:-280,opacity:1},700);
            $(".bg83").transition({bottom:380,marginLeft:-430,opacity:1},1000);
            $(".bg84").transition({bottom:420,marginLeft:-510,opacity:1},1200);
            $("strong,h3").transition({opacity: 1,scale:'1,1'},700);
            $(".p8").transition({opacity:1,delay:1000},1000);
        }
        if (index==9){
            $("strong,h3").transition({opacity: 1,scale:'1,1'},700);
            $(".bg91").transition({opacity:1,marginLeft:-570},700);
            $(".bg92").transition({opacity:1},800);
            $(".bg93").transition({opacity:1,marginLeft:230},700);
        }
        if (index==10){
            $(".bg102,.bg103").transition({opacity:1,scale:'1,1'},700);
            $(".go").transition({opacity:1,top:'25%'},1200)
        }
 
    },
    onLeave:function (index) {
            if (index == 1) {
            $(".bg12").transition({bottom: -392, opacity: 0},1700);
            $(".bg13").transition({bottom:-377 , opacity:0},1000);
            $(".mail").transition({top:-26},1000);
            $(".hgroup").transition({opacity: 0,scale:'0.5,0.5'},1000);
            $(".p11").transition({opacity: 0},1000);
        }
        if (index==2){
            $(".bg21").transition({marginLeft:-1108, opacity: 0},1000);
            $(".bg22").transition({marginLeft:-320, opacity: 0},1000);
            $(".bg23").transition({bottom:-260},1000);
            $("strong,h3").transition({opacity: 0,scale:'0.5,0.5'},1000);
            $(".p1").transition({opacity: 0,delay:10},1000);
        }
        if (index==3){
            $(".bg31,.bg32").transition({opacity:0},1000);
            $(".bg33").transition({opacity:0,marginLeft:'50%'},1000);
            $("strong,h3").transition({opacity: 0,scale:'0.5,0.5'},1000);
            $(".p3").transition({opacity:0,marginLeft:'-100%'},1000);
        }
        if (index==4){
            $(".bg41").transition({bottom:-372},1000);
            $(".bg42").transition({bottom:-449},1000);
            $(".bg43").transition({bottom:-449},1000);
            $("strong,h3").transition({opacity: 0,scale:'0.5,0.5'},1000);
            $(".p1").transition({opacity: 0,delay:10},1000);
        }
        if (index==5){
            $("strong,h3").transition({opacity: 0,scale:'0.5,0.5'},1000);
            $(".bg51").transition({marginLeft:-851,opacity:1},700);
            $(".bg52").transition({marginLeft:-403,opacity:1},700);
            $(".bg53").transition({marginLeft:195,opacity:1},700);
            $(".bg54").transition({marginLeft:645,opacity:1},700);
        }
        if (index==6){
            $(".bg61").transition({top:-454},1000);
            $(".bg62").transition({left:'10%'},1000);
            $("strong,h3").transition({opacity: 0,scale:'0.5,0.5'},1000);
            $(".txt6").transition({opacity:0,left:'90%'},1000);
        }
        if (index==7){
            $(".bg71").transition({bottom:-201,opacity:0},1000);
            $(".bg72").transition({bottom:-206,opacity:0},1000);
            $("strong,h3").transition({opacity: 0,scale:'0.5,0.5'},1000);
            $(".txt7").transition({opacity:0,bottom:-150},1000);
        }
        if (index==8){
            $(".bg82").transition({bottom:160,marginLeft:-180,opacity:0},1000);
            $(".bg83").transition({bottom:280,marginLeft:-330,opacity:0},1000);
            $(".bg84").transition({bottom:320,marginLeft:-410,opacity:0},1000);
            $("strong,h3").transition({opacity: 0,scale:'0.5,0.5'},1000);
            $(".p8").transition({opacity:0},1000);
        }
        if (index==9){
            $("strong,h3").transition({opacity: 0,scale:'0.5,0.5'},1000);
            $(".bg91").transition({opacity:0,marginLeft:-970},1000);
            $(".bg92").transition({opacity:0},1000);
            $(".bg93").transition({opacity:0,marginLeft:630},1000);
        }
        if (index==10){
            $(".bg102,.bg103").transition({opacity:0,scale:'0.5,0.5'},1000);
            $(".go").transition({opacity:1,top:'55%'},1000)
        }

    }
   });
})
