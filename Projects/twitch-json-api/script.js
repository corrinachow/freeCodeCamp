var channels = ["freecodecamp", "ESL_SC2", "cretetion", "OgamingSC2", "storbeck", "RobotCaleb", "noobs2ninjas"];

$(document).ready(function() {
  channels.forEach(channel => {
    const getChannelStatus = (type, name) => {
      return 'https://wind-bow.glitch.me/twitch-api/' + type + '/' + name + '?callback=?';
    }
    $.getJSON(getChannelStatus('streams', channel), data => {
      var status,
        game;
      if (data.stream === null || data.stream === undefined) {
        status = 'offline';
        game = 'offline';
      } else {
        status = 'online';
        game = data.stream.game;
      }

      $.getJSON(getChannelStatus('channels', channel), data => {
        var logoURL = data.logo != null ? data.logo : 'https://static-cdn.jtvnw.net/user-default-pictures/bb97f7e6-f11a-4194-9708-52bf5a5125e8-profile_image-300x300.jpg',
        name = data.display_name != null ? data.display_name : channel;
        description = status == 'online' ? ': ' + (data.status).substr(0,12) + '...' : '';
        var html = '<div class="row channel ' + status + '"><div class="col-xs-2 col-sm-3 text-center" id="logo"><img src="' + logoURL + '" class="logo"></div><div class="col-xs-10 col-sm-8 name" id="name"><a href="' + data.url + '" target="_blank">' + name + '</a></div><div class="col-xs-10 col-sm-8 game" id="streaming">' + game + '<span class="hidden-xs">' + description + '</span></div></div>';
        status === 'online' ? $('#viewer').prepend(html) : $('#viewer').append(html);
      });
    });
  });
});

$('.selector').on('click', function() {
  if (this.id == 'online') {
    $('.online').fadeIn(300);
    $('.offline').fadeOut(300);
  } else if (this.id == 'offline') {
    $('.online').fadeOut(300);
    $('.offline').fadeIn(300);
  } else if (this.id == 'all') {
    $('.channel').fadeIn(300);
  }
});