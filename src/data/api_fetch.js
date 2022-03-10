var url = "https://api.twitter.com/2/users/by/username/$USERNAME";

var xhr = new XMLHttpRequest();
xhr.open("GET", url);

xhr.setRequestHeader("Authorization", "Bearer $ACCESS_TOKEN");

xhr.onreadystatechange = function () {
   if (xhr.readyState === 4) {
      console.log(xhr.status);
      console.log(xhr.responseText);
   }};

xhr.send();