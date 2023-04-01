$(document).ready(function(){
    $('.pass_show').append('<span class="ptxt" style="margin-right:7% ; margin-bootom">Show</span>'); 
 

    });
      
    
    $(document).on('click','.pass_show .ptxt', function(){ 
    
    $(this).text($(this).text() == "Show" ? "Hide" : "Show"); 
    $(this).prev().attr('type', function(index, attr){return attr == 'password' ? 'text' : 'password'; }); 

  });


  $('.passwords').ready(function(){
    $('.pass_show_profile').append('<span class="ptxt_profile" style="margin-top: 1%; margin-right: 12%;">Show</span>'); 
 
    });


   $('.passwords').on('click','.pass_show_profile .ptxt_profile', function(){ 
    
    $(this).text($(this).text() == "Show" ? "Hide" : "Show"); 
    $(this).prev().attr('type', function(index, attr){return attr == 'password' ? 'text' : 'password'; }); 

  }); 

  

  
      
    
  //   $(document).on('click','.pass_show_profile .ptxt', function(){ 
    
  //   $(this).text($(this).text() == "Show" ? "Hide" : "Show"); 
  //   $(this).prev().attr('type', function(index, attr){return attr == 'password' ? 'text' : 'password'; }); 

  // }); 
  