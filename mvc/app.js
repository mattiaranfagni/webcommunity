$(document).ready(function() {
    $.ajax({
        url:'session.php',
        success: function(data) {
            if(data == 'redirect') {
                window.location.replace("signup.html");
            }
            else {
                alert('ciao');
            }
        }
    });
    $('#loader').hide();
    $('#btnEvent').click(function() {
        $('#loader').show();
        $('#btnEvent').hide();
        $.getJSON('event.php',function(response) {
            if(response) {
                var table=$('<table class="table"> <tbody> </tbody> </table>');
                table.append('<thead> <tr> <th> Id Evento </th>  <th> Data Evento </th>  <th> Titolo </th> <th> Nickname </th> </tr> </thead>');
                $.each(response,function(k,v) {
                    table.append('<tr> <td>'+v['IdEvento']+'</td> <td>'+v['DataEvento']+'</td> <td>'+v['Titolo']+'</td> <td>'+v['Nickname']+'</td> </tr>');
                });
                $('#loader').hide();
                $('#contentEv').append(table);
                
            }
        });
        $('#btnEvent').show();
    });
    $('#btnInsertEvent').click(function () {
        $.post('insert.php',{
                DataEvento : $('#DateEvent').val(),
                Titolo: $('#InputEvent').val() ,
                Nickname : $('#NicknameEvent').val()
        });
        
    });
});