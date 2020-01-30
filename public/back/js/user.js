$(function () {
  //1.一进入页面,发送ajax请求, 获取用户列表数据, 通过模板引擎渲染
  $.ajax({
    type: "get",
    url: "/user/queryUser",
    data: {
      page: 1,
      pageSize: 5
    },
    dataType: "json",
    success: function(info){
      console.log(info)
      // 参数1: 模板id
      // 参数2: 数据对象
      var htmlStr = template("tpl", info);
      $('.lt_content tbody').html(htmlStr);
    }
  })
})