function bob() {
  var x = 0;
  var rand;
  var virusval;
  if (x == 0) {
    var lol = confirm("Your PC is infected! Download PCFix to fix it!");
    if (lol == true) {
      for (virusval = 0; virusval < 5; virusval++) {
        rand = Math.floor((Math.random() * 3) + 1)
        if (rand == 1) {
          alert("SHOCKING TRUTH!  Microsoft Secret Revealed!");
        }
        if (rand == 2)
          alert("PC Deals like you've never seen them! Click OK!");

        if (rand == 3) {
          alert("Your PC has the Trojan virus! Clean it up by getting Clean-Up!")
        }
      }
    }
  }
}
