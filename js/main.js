var ActionJs = {
    Init: function() {
        ActionJs.ActionSubmitForm();
        ActionJs.ActionScroll();
    },
    ActionScroll: function() {
      $("#navbar-ul > li").click(function() {
        var obj = $(this).parents("ul").find('li');
        for (var i = 0; i < $(obj).length; i++)
            $(obj).removeClass("active");
        $(this).addClass("active");
        var id = $(this).find('a').attr("data-scroll");
        goToByScroll(id);
      });

      function goToByScroll(id) {
        var pos = $(id).offset().top - 70;
        $('html,body').animate({
                scrollTop: pos
            },
            'slow');
      }
      $(window).scroll(function() {
        var top = $(this).scrollTop();
        var obj = $("[data-name='scrolling']");
        var current = $(obj[0]);
        for (var i = 1; i < $(obj).length; i++) {
            if (top - ($(obj[i]).offset().top - 72) >= 0)
                current = $(obj[i]);
        }
        var link_current = $("#navbar-ul li").find("a[data-scroll='#" + $(current).attr("id") + "']");
        if (!$(link_current).parent().hasClass("active")) {
            $("#navbar-ul li").removeClass("active");
            $(link_current).parent().addClass("active");
        }
      });
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
