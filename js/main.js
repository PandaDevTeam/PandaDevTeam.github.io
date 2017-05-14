ActionJs = {
    Init: function() {
        ActionJs.ActionSubmitForm();
    },
    ActionSubmitForm: function() {
      $(".btn_box_register").bind('click', function (e) {
          if ($.trim($("#name").val()) != '' && $.trim($("#email").val()) != '' && $.trim($("#phone").val()) != '' && $.trim($("#message").val()) != '') {
              e.preventDefault();
              var url = 'https://docs.google.com/forms/d/e/1FAIpQLScfxD4linNmMmfa-M6NIBfP0rzKyxXbK1AdPZGvaQnImGeqQw/formResponse';
              debugger;
              var data = {
                  'entry.1995838144': $("#name").val(),
                  'entry.1451497906': $("#email").val(),
                  'entry.684954047': $("#phone").val(),
                  'entry.2010962721': $('#message').val()
              };
              $.ajax({
                  'url': url,
                  'method': 'POST',
                  'dataType': 'XML',
                  'data': data,
                  'statusCode': {
                      0: function () {
                          $("#name").val('');
                          $("#email").val('');
                          $("#phone").val('');
                          $("#message").val('');
                          $("#modal-success").modal();
                      },
                      200: function () {
                        $("#name").val('');
                        $("#email").val('');
                        $("#phone").val('');
                        $("#message").val('');
                          $("#modal-success").modal();
                      }
                  }
              });
          }
      });
    },
}
ActionJs.Init();
