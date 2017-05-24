var ActionJs = {
    Init: function() {
        ActionJs.ActionSubmitForm();
        ActionJs.ActionScroll();
    },
    ActionScroll: function() {
      var top = $(document).scrollTop(),
          section = $('[data-section]'),
          dataScroll = $('[data-scroll]'),
          navbar = $('[data-nav]');
      var current = section[0];
      for (var i = 1; i < section.length; i++) {
          if (top - ($(section[i]).offset().top - 72) >= 0){
            current = section[i];
          }
      }
      var currentLink = navbar.find('[data-scroll=' + $(current).data('section') + ']');
      if (!$(currentLink).hasClass('active')) {
          dataScroll.removeClass('active');
          $(currentLink).addClass('active');
      }
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

$(window).on('load scroll', function() {
  ActionJs.ActionScroll();
});
