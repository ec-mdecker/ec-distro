//moves the quicktabs links into the contextual links
jQuery(document).ready(function ($) {
  $("[id^=block-mbp-defaults-mbp-]").each(function () {
    var links = $(this).find('ul.quicktabs-tabs').contents();
    $(this).find('.contextual-links-wrapper:first ul').append(links);
    $(this).find('.contextual-links-wrapper:first').css('right', '50px');
    $(this).find('h2.block-title:first').remove();
    $(this).find('ul.quicktabs-tabs').remove();
    $(this).find('li.block-configure').remove();
  });
});
