//2016/1/13 UI中国
$(function() {
    //申请优秀设计团队展开效果
    $(".more_0").click(function() {
        $(this).hide(); //隐藏展开按钮
        $(".team_list_cont").hide();
        $(".team_list_cont_z").show();
        //轮播
        var teamW = 1100; //五个li为一个宽度
        var teamliNum = $(".team_list_cont_z ul.list").find('li').length; //获取幻灯片Li的数量
        var teamlistul = Math.ceil(teamliNum / 5) * teamW; //获取ul应有宽度向上取整
        $(".team_list_cont_z ul.list").css({
            "width": teamlistul
        }); //给ul赋值宽度
        //定位navul
        var nav = $(".team_list_cont_z ul.nav_list")
        var navulw = -(nav.width() - 25) / 2;
        nav.css({
                "margin-left": -(Math.ceil(teamliNum / 5) * 45) / 2 + 5
            })
            //添加ul li
        for (var i = 0; i < Math.ceil(teamliNum / 5); i++) {
            nav.append(" <li class='" + "index" + i + "'></li>");
            nav.find("li").eq(0).addClass('act'); //默认选中第一个
        }
        var bb = nav.find("li");
        bb.mouseover(function() {
            $(this).addClass("act").siblings().removeClass("act");
            var index = bb.index(this); /*获取点击的是ul中第几个li*/
            var leftw = -index * 1100 //位移参数
            $(".team_list_cont_z ul.list").animate({
                left: leftw
            }, "slow"); //进行位移动画
        });
    });
    //轮播END
    //申请优秀设计师展开效果
    $(".more_1").click(function() {
        $(this).hide(); //隐藏展开按钮
        $(".candidate .candidate_list_cont").hide();
        $(".candidate .candidate_list_contr").hide();
        $(".candidate_list_cont_z").show();
        //轮播
        var candidateW = 1100; //8个li为一个宽度
        var candidateliNum = $(".candidate_list_cont_z ul.list").find('li').length; //获取幻灯片Li的数量
        var candidatelistul = Math.ceil(candidateliNum / 8) * candidateW; //获取ul应有宽度向上取整
        $(".candidate_list_cont_z ul.list").css({
            "width": candidatelistul
        }); //给ul赋值宽度
        //定位navul
        var nav0 = $(".candidate_list_cont_z ul.nav_list0")
        var navulw = -(nav0.width() - 25) / 2;
        nav0.css({
                "margin-left": -(Math.ceil(candidateliNum / 8) * 45) / 2 + 5
            })
            //添加ul li
        for (var i = 0; i < Math.ceil(candidateliNum / 8); i++) {
            nav0.append(" <li class='" + "index" + i + "'></li>");
            nav0.find("li").eq(0).addClass('act'); //默认选中第一个
        }
        var cc = nav0.find("li");
        cc.mouseover(function() {
            $(this).addClass("act").siblings().removeClass("act");
            var index = cc.index(this); /*获取点击的是ul中第几个li*/
            var leftw = -index * 1100 //位移参数
            $(".candidate_list_cont_z ul.list").animate({
                left: leftw
            }, "slow"); //进行位移动画
        });
    });
    //轮播END
    //申请优秀培训机构展开效果
    $(".more_2").click(function() {
        $(this).hide(); //隐藏展开按钮
        $(".training_list_cont").hide();
        $(".training_list_cont_z").show();
        //轮播
        var trainingW = 1100; //8个li为一个宽度
        var trainingliNum = $(".training_list_cont_z ul.list").find('li').length; //获取幻灯片Li的数量
        var traininglistul = Math.ceil(trainingliNum / 2) * trainingW; //获取ul应有宽度向上取整
        $(".training_list_cont_z ul.list").css({
            "width": traininglistul
        }); //给ul赋值宽度
        //定位navul
        var nav1 = $(".training_list_cont_z ul.nav_list1")
        var navulw = -(nav1.width() - 25) / 2;
        nav1.css({
                "margin-left": -(Math.ceil(trainingliNum / 2) * 45) / 2 + 5
            })
            //添加ul li
        for (var i = 0; i < Math.ceil(trainingliNum / 2); i++) {
            nav1.append(" <li class='" + "index" + i + "'></li>");
            nav1.find("li").eq(0).addClass('act'); //默认选中第一个
        }
        var dd = nav1.find("li");
        dd.mouseover(function() {
            $(this).addClass("act").siblings().removeClass("act");
            var index = dd.index(this); /*获取点击的是ul中第几个li*/
            var leftw = -index * 1100 //位移参数
            $(".training_list_cont_z ul.list").animate({
                left: leftw
            }, "slow"); //进行位移动画
        });
    });
    //轮播END
});
