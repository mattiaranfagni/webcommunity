    $(document).ready(function(){
        $.ajax({
            url:'session.php',
            success: function(data) {
                if(data != 'redirect') {
                    window.location.replace("index.html");
                }
                else {
                    alert('ciao');
                }
            }
        });
        $('#btnLogin').click(function() {
            var pw = $('#PwUser').val();
            var mail = $('#MailUser').val();
            if(pw == '' || mail=='') {
                alert('Alcuni campi sono vuoti, controllali');
                return;
            }
            $.post('login.php',{
                Password : pw,
                Mail : mail
            },function(data) {
                if(data != 0) {
                    alert('login effettuato');
                    window.location.replace("index.html");
                }
                else {
                    alert('login fallito');
                    return;
                }
            });
        });
    });