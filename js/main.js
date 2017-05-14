var ActionJs = {
    Init: function() {
        ActionJs.ActionSubmitForm();
    },
    ActionSubmitForm: function() {
      $("#news-letter-form").on('submit', function (event) {
        event.preventDefault();
        var url = 'https://docs.google.com/forms/d/e/1FAIpQLScfxD4linNmMmfa-M6NIBfP0rzKyxXbK1AdPZGvaQnImGeqQw/formResponse',
            name = $("#name"),
            email = $("#email"),
            phone = $("#phone"),
            message = $("#message");
        if ($.trim(name.val()) && $.trim(email.val()) && $.trim(phone.val()) && $.trim(message.val())) {
            var data = {
                'entry.1995838144': name.val(),
                'entry.1451497906': email.val(),
                'entry.684954047': phone.val(),
                'entry.2010962721': message.val()
            };
            $.ajax({
                url: url,
                method: 'POST',
                datatype: 'application/json',
                crossDomain: true,
                data: data,
                success: function() {
                  name.val(''); email.val(''); phone.val(''); message.val('');
                  alert('Thank you for your info!');
                },
                error: function () {
                  name.val(''); email.val(''); phone.val(''); message.val('');
                  alert('Thank you for your info!');
                },
            });
          }
      });
    },
}
ActionJs.Init();
