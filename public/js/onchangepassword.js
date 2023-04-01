
 

function onChange() {
    const password = document.querySelector('input[name=password]');
    const confirm = document.querySelector('input[name=confirm]');
if(/(?:0(?=1)|1(?=2)|2(?=3)|3(?=4)|4(?=5)|5(?=6)|6(?=7)|7(?=8)|8(?=9)){2,}\d/gm.test(password.value)){
  password.setCustomValidity('Password contains consecutive numbers')
}
  
if (password.value.match(/[0-9]/g) ===null) {
  password.setCustomValidity('At least one number')

}

if (password.value.match(/[A-Z]/g)===null) {
  password.setCustomValidity('At least one capital letter');

}
if (password.value.match(/[a-z]/g)===null) {
  password.setCustomValidity('At least one Small letter') 
}
if(password.value.match(/[^a-zA-Z0-9\-\/]/)===null){
password.setCustomValidity('use [~,!,@,#,$,%,&,*,/]');
}
if (password.value.length<8||password.value.length > 13) {
  password.setCustomValidity("The number of characters must not be more than 13 and not less than 8");
}

if ((/(?:0(?=1)|1(?=2)|2(?=3)|3(?=4)|4(?=5)|5(?=6)|6(?=7)|7(?=8)|8(?=9)){4,}\d/gm.test(password.value))==false&&(password.value.length<8||password.value.length > 13)===false&&(password.value.match(/[0-9]/g) ===null)===false
&&(password.value.match(/[A-Z]/g)===null)===false&&(password.value.match(/[a-z]/g)===null)==false
&&(password.value.match(/[^a-zA-Z0-9\-\/]/)===null)===false) {
  password.setCustomValidity('');
  
  if (confirm.value != password.value) {
    confirm.setCustomValidity('Passwords do not match');
  }else{
    confirm.setCustomValidity('');

  }
}

    
  };


  $(function () {


  var $password = $("#pass");
  var $confpass = $("#confpass");

    var $passwordAlert = $(".password-alert");
    var $confpasswordAlert = $(".confpassword-alert");
    var $requirements = $(".requirements");
    var $confrequirements = $(".confrequirements");
    
    var leng, bigLetter, num, specialChar,smallLetter,Consecutive;
    var $leng = $(".leng");
    var $Consecutive = $(".Consecutive");
    var $match = $(".match");
    var $bigLetter = $(".big-letter");
    var $smallLetter = $(".small-letter");
    var $num = $(".num");
    var $specialChar = $(".special-char");
    var specialChars = "!@#$%^&*()-_=+[{]}\\|;:'\",<.>/?`~";
    var numbers = "0123456789";

    $requirements.addClass("wrong");
    $confrequirements.addClass("wrong");
    $password.on("blur", function(){$passwordAlert.hide();});
    $confpass.on("blur", function(){$passwordAlert.hide();});
    $confpass.on("focus", function(){
      var conf = $(this);
    
      var confval = conf.val();
      var passval = $("#pass").val()
      // $confpasswordAlert.show();

       
      if (confval === passval) {
        $(this).addClass("valid").removeClass("invalid");
        $confrequirements.removeClass("wrong").addClass("good");
        $confpasswordAlert.removeClass("alert-warning").addClass("alert-success");
      } else {
        $(this).addClass("invalid").removeClass("valid");
        $confrequirements.addClass("wrong").removeClass("good")
        $confpasswordAlert.removeClass("alert-success").addClass("alert-warning");
      }
      $confpasswordAlert.show();});
    $confpass.on("input blur",function(p) {
      var conf = $(this);
    
      var confval = conf.val();
      var passval = $("#pass").val()
      // $confpasswordAlert.show();

       
      if (confval === passval) {
        $(this).addClass("valid").removeClass("invalid");
        $confrequirements.removeClass("wrong").addClass("good");
        $confpasswordAlert.removeClass("alert-warning").addClass("alert-success");
      } else {

        
        
        $(this).addClass("invalid").removeClass("valid");
        $confrequirements.addClass("wrong").removeClass("good")
        $confpasswordAlert.removeClass("alert-success").addClass("alert-warning");
      }
  
      if(p.type == "blur"){
        $confpasswordAlert.hide();
    }

    })


     $password.on("focus", function (e) {
        var el = $(this);
        var val = el.val();
        $passwordAlert.show();

        if (val.length >13 ||val.length<8) {
            leng = false;
        }
        else if (val.length>=8||val.length < 13) {
            leng=true;
        } 
         if (/(?:0(?=1)|1(?=2)|2(?=3)|3(?=4)|4(?=5)|5(?=6)|6(?=7)|7(?=8)|8(?=9)){2,}\d/gm.test(val)) {
            Consecutive =false
        }
        else{ Consecutive =true}      
        if(val.toLowerCase()==val){
            bigLetter = false;
        }
        else{bigLetter=true;}
        
        if(val.toUpperCase()==val){
            smallLetter = false;
        }
        else{smallLetter=true;}
        
        num = false;

        for(var i=0; i<val.length;i++){
            for(var j=0; j<numbers.length; j++){
                if(val[i]==numbers[j]){
                    num = true;
                }
            }
        }
        
        specialChar=false;
        for(var i=0; i<val.length;i++){
            for(var j=0; j<specialChars.length; j++){
                if(val[i]==specialChars[j]){
                    specialChar = true;
                }
            }
        }

        
        if(Consecutive==true&&leng==true&&bigLetter==true&&smallLetter==true&&num==true&&specialChar==true){
            $(this).addClass("valid").removeClass("invalid");
            $requirements.removeClass("wrong").addClass("good");
            $passwordAlert.removeClass("alert-warning").addClass("alert-success");
        }
        else
        {
            $(this).addClass("invalid").removeClass("valid");
            $passwordAlert.removeClass("alert-success").addClass("alert-warning");

            if(leng==false){$leng.addClass("wrong").removeClass("good");}
            else{$leng.addClass("good").removeClass("wrong");}

            if (Consecutive ==false) {$Consecutive.addClass("wrong").removeClass("good")} 
            else {$Consecutive.addClass("good").removeClass("wrong")}

            if(bigLetter==false){$bigLetter.addClass("wrong").removeClass("good");}
            else{$bigLetter.addClass("good").removeClass("wrong");}
            
            if(smallLetter==false){$smallLetter.addClass("wrong").removeClass("good");}
            else{$smallLetter.addClass("good").removeClass("wrong");}

            if(num==false){$num.addClass("wrong").removeClass("good");}
            else{$num.addClass("good").removeClass("wrong");}

            if(specialChar==false){$specialChar.addClass("wrong").removeClass("good");}
            else{$specialChar.addClass("good").removeClass("wrong");}
        }
        
        
        if(e.type == "blur"){
                $passwordAlert.hide();
            }
    });

    $password.on("input blur", function (e) {
        var el = $(this);
        var val = el.val();
        $passwordAlert.show();

        if (val.length >13 ||val.length<8) {
            leng = false;
        }
        else if (val.length>=8||val.length < 13) {
            leng=true;
        } 
         if (/(?:0(?=1)|1(?=2)|2(?=3)|3(?=4)|4(?=5)|5(?=6)|6(?=7)|7(?=8)|8(?=9)){2,}\d/gm.test(val)) {
            Consecutive =false
        }
        else{ Consecutive =true}      
        if(val.toLowerCase()==val){
            bigLetter = false;
        }
        else{bigLetter=true;}
        
        if(val.toUpperCase()==val){
            smallLetter = false;
        }
        else{smallLetter=true;}
        
        num = false;

        for(var i=0; i<val.length;i++){
            for(var j=0; j<numbers.length; j++){
                if(val[i]==numbers[j]){
                    num = true;
                }
            }
        }
        
        specialChar=false;
        for(var i=0; i<val.length;i++){
            for(var j=0; j<specialChars.length; j++){
                if(val[i]==specialChars[j]){
                    specialChar = true;
                }
            }
        }

        
        if(Consecutive==true&&leng==true&&bigLetter==true&&smallLetter==true&&num==true&&specialChar==true){
            $(this).addClass("valid").removeClass("invalid");
            $requirements.removeClass("wrong").addClass("good");
            $passwordAlert.removeClass("alert-warning").addClass("alert-success");
        }
        else
        {
            $(this).addClass("invalid").removeClass("valid");
            $passwordAlert.removeClass("alert-success").addClass("alert-warning");

            if(leng==false){$leng.addClass("wrong").removeClass("good");}
            else{$leng.addClass("good").removeClass("wrong");}

            if (Consecutive ==false) {$Consecutive.addClass("wrong").removeClass("good")} 
            else {$Consecutive.addClass("good").removeClass("wrong")}

            if(bigLetter==false){$bigLetter.addClass("wrong").removeClass("good");}
            else{$bigLetter.addClass("good").removeClass("wrong");}
            
            if(smallLetter==false){$smallLetter.addClass("wrong").removeClass("good");}
            else{$smallLetter.addClass("good").removeClass("wrong");}

            if(num==false){$num.addClass("wrong").removeClass("good");}
            else{$num.addClass("good").removeClass("wrong");}

            if(specialChar==false){$specialChar.addClass("wrong").removeClass("good");}
            else{$specialChar.addClass("good").removeClass("wrong");}
        }
        
        
        if(e.type == "blur"){
                $passwordAlert.hide();
            }
    });
});
  