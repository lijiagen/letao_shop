$(function () {

  var currentPage = 1; // 当前页
  var pageSize = 5; //每条页数

  // 定义currentId
  var currentId;
  var isDelete; //标记用户状态

  //1.一进入页面,发送ajax请求, 获取用户列表数据, 通过模板引擎渲染
  render();
  //作用: 根据全局的currentPage和pageSize进行页面渲染
  function render(){
    $.ajax({
      type: "get",
      url: "/user/queryUser",
      data: {
        page: currentPage,
        pageSize: pageSize
      },
      dataType: "json",
      success: function (info) {
        console.log(info)
        // 参数1: 模板id
        // 参数2: 数据对象
        var htmlStr = template("tpl", info);
        $('.lt_content tbody').html(htmlStr);

        //分页初始化
        $("#paginator").bootstrapPaginator({
          //指定 bootstrap 的版本
          bootstrapMajorVersion: 3,
          //总页数
          totalPages: Math.ceil(info.total / info.size),
          //当前页
          currentPage: info.page,
          //给所有的按钮，页码添加点击事件
          onPageClicked: function(a,b,c,page) {
            //更新当前页
            currentPage = page;
            //重新渲染
            render();
          }
        });
      }
    });
  }
  
})