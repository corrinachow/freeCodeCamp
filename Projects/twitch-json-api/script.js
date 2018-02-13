var channels = ["freecodecamp", "ESL_SC2"]//, "cretetion", "OgamingSC2", "storbeck", "RobotCaleb", "noobs2ninjas"];

$(document).ready(function() {
  channels.forEach(channel => {
    const getChannelStatus = (type, name) => {
      return 'https://wind-bow.glitch.me/twitch-api/' + type + '/' + name + '?callback=?';
    }
    $.getJSON(getChannelStatus('streams', channel), data => {
      var status,
        game;
      console.log(data);
      if (data.stream === null || data.stream === undefined) {
        status = 'Offline';
        game = 'Offline';
      } else {
        status = 'Online';
        game = data.stream.game;
      }
      console.log(channel + status + game);

      $.getJSON(getChannelStatus('channels', channel), data => {
        var html = '<div class="channel '+ status +'"><a href="' + data.url + ' "target="_blank">'; //makes entire div into link, assigns online/offline status

        var logoURL = data.logo != null ? data.logo : 'https://static-cdn.jtvnw.net/user-default-pictures/bb97f7e6-f11a-4194-9708-52bf5a5125e8-profile_image-300x300.jpg';
        html += '<p>'+ channel +'</p><img src="' + logoURL + '">';

        if (status === 'Offline') {
          html += '<p>' + status + '</p>';
        } else {
          html += '<p>' + game + ': ' + data.status + '</p>'
        }

        html += '</a></div>' //closes div.channel
        console.log(html)
        console.table(data);
        $('#viewer').append(html);
      });
    });

  });

  //where channels.forEach(channel ...) ends


});