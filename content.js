console.log("Hello World");

var url1 = " https://codeforces.com/api/problemset.recentStatus?count=1000";
$.getJSON(url1, function (name) {
  var username = name.result[0].author.members[0].handle;
  $.getJSON(
    " https://codeforces.com/api/user.status?handle=" +
      username +
      "&from=1&count=10000",
    function (data) {
      console.log(data);
      // console.log(data.result[0].verdict);
      if (data.result[0].verdict != "OK") {
        chrome.runtime.sendMessage("", {
          type: "notification",
          options: {
            title: "Codeforces Notifier",
            message: data.result[0].verdict,
            iconUrl: "download.png",
            type: "basic",
          },
        });
      } else {
        chrome.runtime.sendMessage("", {
          type: "notification",
          options: {
            title: "Codeforces Notifier",
            message: data.result[0].verdict,
            iconUrl: "download.png",
            type: "basic",
          },
        });
      }
    }
  );
});
