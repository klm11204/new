// help.js

function HelpComponent() {
  // Add video player
  var videoContainer = document.createElement('div');
  videoContainer.innerHTML = '<iframe width="560" height="315" src="https://youtube.com/shorts/n0p9mrbqex4?feature=share" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';

  // Add description
  var description = document.createElement('div');
  description.innerHTML = '<p>How to buy BYF coin 🪙 follow the steps below:</p>' +
                          '<ol>' +
                          '<li>Go to Metamask Wallet.</li>' +
                          '<li>Type in the browser of Metamask <a href="https://byfcoin.net" target="_blank">byfcoin.net</a></li>' +
                          '<li>Connect your wallet by clicking on the connect button.</li>' +
                          '<li>Type the coin\'s quantity.</li>' +
                          '<li>Hit buy.</li>' +
                          '</ol>' +
                          '<p>Note: You should have some Ethereum to buy 🪙</p>';

  // Create the main container and append the video and description
  var mainContainer = document.createElement('div');
  mainContainer.appendChild(videoContainer);
  mainContainer.appendChild(description);

  return mainContainer;
}

// Execute the HelpComponent function when the DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
  var helpComponent = HelpComponent();
  document.body.appendChild(helpComponent);
});
