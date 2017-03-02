/**
 * Created by Administrator on 2016/10/17.
 */
$(document).ready(function(){
   $('input[name="loginbtn"]').click(function (event) {
       var uname = $('input[name="username"]');
       var upwd = $('input[name="password"]');
       var ucode = $('input[name="yzcode"]');
       var _name = $.trim(uname.val());
       var _pwd = $.trim(upwd.val());
       var _code = $.trim(ucode.val());
       uname.focus();
       if(_name == ""){
           alert('请输入用户名！');
           uname.focus();
           return;
       }
       if(_pwd == ""){
           alert('请输入密码！');
           upwd.focus();
           return;
       }
       if(_code == ""){
           alert('请输入验证码！');
           ucode.focus();
           return;
       }
   });
});
