var clicks = 0;
function povecajBrKlikova() {
    clicks += 1;
    document.getElementById("klik").innerHTML = clicks;
};

/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'assets/particles.json', function() {
    console.log('callback - particles.js config loaded');
  });