function promptMe() {
  // Recycled code is the best code. (https://github.com/sargeant45/word-a-day/blob/gh-pages/index.html)
  var request = new XMLHttpRequest();
      request.onload = function() {
          // get the file contents
          var fileContent = this.responseText;
          // split into lines
          var fileContentLines = fileContent.split( '\n' );
          // get a random index (line number)
          var randomLineIndex = Math.floor( Math.random() * fileContentLines.length );
          // extract the value
          var randomLine = fileContentLines[ randomLineIndex ];
          // add the random line in a 'p'
          document.getElementsByName( 'prompt' )[0].innerHTML = randomLine;
      };
      request.open( 'GET', 'writingprompts.txt', true );
      request.send();
}