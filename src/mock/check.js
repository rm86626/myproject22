const Mock=require("mockjs");

Mock.mock("check.php","post",function(options){
	//options 请求信息 url method  数据
	//options.body 请求体 前端传递的数据
	// '{"userName":"tom","password":"123"}' json
	console.log("options",options);
	var data=JSON.parse(options.body);
	var userName=data.userName;
	var password=data.password;
	if(userName=="tom" && password=="123"){
	  return	Mock.mock({"code":"10001","msg":"ok"});
	}else{
		return	Mock.mock({"code":"20001","msg":"用户名或密码错误！"});
	}
})