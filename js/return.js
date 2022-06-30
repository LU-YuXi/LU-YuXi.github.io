// 返回顶部
$(document).ready(function() {
    //首先将#btn隐藏
    // $("#btn").hide();
    //当滚动条的位置处于距顶部50像素以下时，跳转链接出现，否则消失
    $(function() {
      $(window).scroll(function() {
        if ($(window).scrollTop() > 50) { //scrollTop表示记录进度条的长度
          $(".back").fadeIn(); //显示
        } else {
          $(".back").fadeOut();//隐藏
        }
      });
      //当点击跳转链接后，回到页面顶部位置
      $(".back").click(function() {
        $('body,html').animate({
          scrollTop: 0
        },
       500);
        return false;
      });
    });
  });
//轮播图
//切换图片函数
        function bannerImg(count,Img,dot) {
          //让索引为count的li元素显示出来,siblings其他li元素隐藏
          $(Img).eq(count).stop("slow").fadeIn().siblings("li").stop().fadeOut("slow");
          //切换当前索引的小圆点样式
          $(dot).eq(count).addClass("dot").siblings("li").removeClass("dot");
      }
      $(function () {
          var count = 0;
          var banImg = $(".banner ul li");
          var bandot = $(".banner ol li");
          //下一张
          $(".arrow-r").click(function () {
              count++;
              if (count == banImg.length) {
                  count = 0;
              }
              bannerImg(count, banImg, bandot);
          });
          //上一张
          $(".arrow-l").click(function () {
              count--;
              if (count < 0) {
                  count = banImg.length - 2;
              }
              bannerImg(count, banImg, bandot);
          });

          //小圆点控制轮播
          $(bandot).click(function () {
              count = $(this).index();
              bannerImg(count, banImg, bandot);
          })

          //定时器轮播
          var adTimer;
          adTimer = setInterval(function () {
              count++;
              if (count == banImg.length) {
                  count = 0;
              }
              bannerImg(count, banImg, bandot);
          }, 2000);

          //鼠标移入停止轮播
          $(".banner").mouseover(function () {
              clearInterval(adTimer);
          });
          //鼠标移出开始轮播
          $(".banner").mouseout(function () {
              adTimer = setInterval(function () {
                  count++;
                  if (count == banImg.length) {
                      count = 0;
                  }
                  bannerImg(count, banImg, bandot);
              }, 2000);
          });
      })
// 楼梯效果
  $(function() {
    var flag = true;
    // var a = $('.tuijian').offset().top
    // $('.btn').fadeOut()
    $(window).scroll(function() {
            //1、导航栏的显示与隐藏
            // if ($('document, html').scrollTop() >= a) {
            //     $('.btn').fadeIn()
            // } else {
            //     $('.btn').fadeOut()
            // }
            //4、当页面滚动到内容区域的某个模块，左侧电梯导航，相对应的小li模块，也会添加current类，兄弟移除current类
            if (flag == true) {
                $('body .floor').each(function(index, ele) {
                    if ($('document, html').scrollTop() >= $(ele).offset().top) {
                        $('.btn a').eq(index).addClass('active')
                        $('.btn a').eq(index).siblings().removeClass('active')
                    }
                })

            }

        })
        //2、电梯对应效果
    $('.btn a').click(function() {
        console.log($(this).index()); //获取点击的索引号
        //每次点击li，就需要计算页面要去往的位置
        //选出对应索引号内容区的盒子
        console.log($('body .floor').eq($(this).index())); //获取与索引号相对应的内容
        flag = false;
            // $('document,html').scrollTop($('.folr div').eq($(this).index()).offset().top)//要添加动画效果（动画滚动效果）
        $('document,html').animate({
                scrollTop: $('body .floor').eq($(this).index()).offset().top
                    //只要一滚动就会触发上面的滚动事件
            }, function() {
                flag = true;
            })
            //3、点击之后让当前的li添加current类名，兄弟则移除类名
        $(this).addClass('active')
        $(this).siblings().removeClass('active')

    })
})

//定位 中国大陆
//获取元素
var cdl_li01 = document.getElementById('cdl_li01');
var areasBox = document.getElementById('areasBox');
var areas = document.getElementById('areas');
var area_change = document.getElementById('area_change');
//注册鼠标经过事件
//这里需要用冒泡 所以用mouseover mouseout
cdl_li01.addEventListener('mouseover', function() {
    this.style.backgroundColor = '#fff';
    areasBox.style.display = 'block';
    //点击了全球 li的内容变成全球 
    for(var i = 0; i < areas.children.length; i++) {
        areas.children[i].addEventListener('click', function() {
            area_change.innerHTML = this.innerHTML;
            areasBox.style.display = 'none';
        });
    }
});
cdl_li01.addEventListener('mouseout', function() {
    this.style.backgroundColor = '#f5f5f5';
    areasBox.style.display = 'none';
});

// mttb
//我的淘宝
	//获取元素
	var rig_chdalu_li01 = document.getElementById('rig_chdalu_li01');
	var mytbBox = document.getElementById('mytbBox');
	//给li注册事件 
	//需要冒泡 鼠标经过 mouseover 鼠标离开 mouseout
	rig_chdalu_li01.addEventListener('mouseover', function() {
		this.style.backgroundColor = '#fff';
		mytbBox.style.display = 'block';
	});
	rig_chdalu_li01.addEventListener('mouseout', function() {
		this.style.backgroundColor = '#f5f5f5';
		mytbBox.style.display = 'none';
	});

    	//宝贝 天猫 店铺 搜索栏点击变化
	//获取元素
	var words_bb = document.getElementById('words_bb');
	var words_tm = document.getElementById('words_tm');
	var words_dp = document.getElementById('words_dp');
	var a = document.getElementById('a');
	var rleft_searchbar = document.getElementById('rleft_searchbar');
	var words_ul01 = document.getElementById('words_ul01');
	words_tm.addEventListener('click', function() {
		for(var i = 0; i < words_ul01.children.length; i++) {
			words_ul01.children[i].style.backgroundColor = '#fff';
			words_ul01.children[i].style.color = 'red';
			words_ul01.children[i].style.fontWeight = 'normal';
			words_ul01.children[i].style.borderRadius = 0;
           
		}
		a.style.display = 'none';
		rleft_searchbar.style.display = 'none';
		/*words_bb.style.backgroundColor = '#fff';
		words_bb.style.color = 'red';
		words_bb.style.fontWeight = 'normal';*/
		this.style.backgroundColor = '#FF6F00';
		this.style.color = '#fff';
		this.style.fontWeight = '700';
		this.style.borderRadius = '4px 4px 0 0';
		/*words_dp.style.backgroundColor = '#FFF';
		words_dp.style.color = 'red';
		words_dp.style.fontWeight = 'normal';
		words_dp.style.borderRadius = 0;*/
	});
	words_dp.addEventListener('click', function() {
		a.style.display = 'block';
		rleft_searchbar.style.display = 'none';
		words_bb.style.backgroundColor = '#fff';
		words_bb.style.color = 'red';
		words_bb.style.fontWeight = 'normal';
		words_tm.style.backgroundColor = '#FFF';
		words_tm.style.color = 'red';
		words_tm.style.fontWeight = 'normal';
		words_tm.style.borderRadius = 0;
		this.style.backgroundColor = '#FF6F00';
		this.style.color = '#fff';
		this.style.fontWeight = '700';
		this.style.borderRadius = '4px 4px 0 0';
		
	});
	words_bb.addEventListener('click', function() {
		a.style.display = 'block';
		rleft_searchbar.style.display = 'block';
		this.style.backgroundColor = '#FF6F00';
		this.style.color = '#fff';
		this.style.fontWeight = '700';
		this.style.borderRadius = '4px 4px 0 0';
		words_tm.style.backgroundColor = '#FFF';
		words_tm.style.color = 'red';
		words_tm.style.fontWeight = 'normal';
		words_tm.style.borderRadius = 0;
		words_dp.style.backgroundColor = '#FFF';
		words_dp.style.color = 'red';
		words_dp.style.fontWeight = 'normal';
		words_dp.style.borderRadius = 0;
		
	});

    //隐藏导航栏的宝贝搜索
var serchnav_ul = document.getElementById('serchnav_ul');
var left_bb = document.getElementById('left_bb');
left_bb.addEventListener('mouseenter', function() {
	serchnav_ul.children[0].style.borderRadius = '20px 0 0 0';
	serchnav_ul.children[1].style.display = 'block';
	serchnav_ul.children[2].style.display = 'block';
});
serchnav_ul.addEventListener('mouseleave', function() {
	serchnav_ul.children[0].style.borderRadius = '20px 0 0 20px';
	serchnav_ul.children[1].style.display = 'none';
	serchnav_ul.children[2].style.display = 'none';
});
left_bb.addEventListener('mouseleave', function() {
	serchnav_ul.children[0].style.borderRadius = '20px 0 0 20px';
	serchnav_ul.children[1].style.display = 'none';
	serchnav_ul.children[2].style.display = 'none';
});

//显示和隐藏导航栏
//当页面滚动到一定位置时 显示导航栏 当页面距离顶部小于一定距离时 导航栏消失
document.addEventListener('scroll', function() {
	// console.log(window.scrollY);
	if(window.scrollY >= 188) {
		nac.style.display = 'block';
	} else {
		nac.style.display = 'none';
	}
	if(window.scrollY >= 470) {
		sidebar.style.position = 'fixed';
		sidebar.style.top = '88px';
	} else {
		sidebar.style.position = 'absolute';
		sidebar.style.top = '550px';
	}
	/* console.log(window.scrollY);
	console.log(sidebar.offsetTop);
	console.log(sidebar.clientTop + '-------'); */
});


//头部head 公告 规则 论坛
	//公告 默认字体加粗 14px 底边有色
	//鼠标经过规则  规则字体加粗 14px 底边有色 公告 论坛 安全 公益 字体正常 12px 底边无色
	//鼠标经过论坛 论坛字体加粗 14px 底边有色  公告 规则 安全 公益 字体正常 12px 底边无色
	//以此类推
	//获取元素 

	var rb3h_ul = document.getElementById('rig_brm3_head_ul01');
	var rb3b = document.getElementById('rig_brm3_body');

//bug的第二种解决办法
for(var m = 0; m < rb3h_ul.children.length; m++) {
	(function(j) {
		rb3h_ul.children[j].addEventListener('mouseover', function() {
			for(var i = 0; i < rb3h_ul.children.length; i++) {
				//干掉所有人
				rb3h_ul.children[i].style.borderBottom = '2px solid transparent';
				rb3h_ul.children[i].children[0].style.fontWeight = 'normal';
				rb3h_ul.children[i].children[0].style.fontSize = '12px';
				//干掉所有人
				// rb3b.children[i].style.display = 'none';
			}
			//留下我自己
			this.style.borderBottom = '2px solid #FF4400';
			this.children[0].style.fontWeight = '700';
			this.children[0].style.fontSize = '14px';
			
			// console.log(j);
			//留下我自己 
			// rb3b.children[j].style.display = 'block';
		});	
	})(m)
}
