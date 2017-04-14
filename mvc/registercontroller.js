    $(document).ready(function(){
        /*$.ajax({
            url:'session.php',
            success: function(data) {
                if(data != 'redirect') {
                    window.location.replace("signin.html");
                }
                else {
                    alert('ciao');
                }
            }
        });*/
        $('#btnRegisterUser').click(function() {
            var user = $('#UsernameUser').val();
            var name = $('#NameUser').val();
            var surname = $('#SurnameUser').val();
            var pw = $('#PwUser').val();
            var pw2 = $('#PwUser2').val();
            var mail = $('#MailUser').val();
            if(user == '' || name =='' || surname=='' || pw=='' || mail=='' || pw2=='') {
                 alert('Controllare campi!');
                return;
            }
            if(pw!=pw2) {
                alert('Le due password non coincidono!');
                return;
            }  
            $.post('register.php',{
                Username : user,
                Name: name ,
                Surname : surname,
                Password : pw,
                Mail : mail 
                },function(data) {
                    if(data == 'successful') {
                        alert('dati inseriti');
                        window.location.replace("signin.html");
                        
                    }
                    else {
                        alert('dati non  inseriti');
                        return;
                    }
                });
                
         });
    });
    
    /**$.ajax({
              type: "POST",
              url: 'register.php',
              data: {
                "Username" : user,
                "Name": name ,
                "Surname" : surname,
                "Password" : pw,
                "Mail" : mail 
                },
              success: function(data) {
                    if(data != 'successful') {
                        //window.location.replace("signin.html");
                        alert('dati non inseriti');
                    }
                    else {
                        alert('dati inseriti');
                    }
                }
    });*/