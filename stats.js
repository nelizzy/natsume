$(window).on("load", function() {

  var hp = {
    stat: "HP",
    lvl: 20
  };
  var cha = {
    stat: "CHA",
    lvl: 50
  };
  var sta = {
    stat: "STA",
    lvl: 20
  };
  var spd = {
    stat: "SPD",
    lvl: 33
  };
  var str = {
    stat: "STR",
    lvl: 10
  };
  var total = {
    stat: "TOTAL STATS",
    lvl: 133
  };

  $("[stat=\"str\"]").html(str["stat"] + " " + str["lvl"]);
  $("[stat=\"sta\"]").html(sta["stat"] + " " + sta["lvl"]);
  $("[stat=\"cha\"]").html(cha["stat"] + " " + cha["lvl"] + "+10");
  $("[stat=\"hp\"]").html(hp["stat"] + " " + hp["lvl"]);
  $("[stat=\"spd\"]").html(spd["stat"] + " " + spd["lvl"] + "+10");

  $("[stat='hp'] ~ .bar").css("width", function() {
    return hp["lvl"] + '%';
  });
  $("[stat='cha'] ~ .bar").css("width", function() {
    return cha["lvl"] + 10 + '%';
  });
  $("[stat='sta'] ~ .bar").css("width", function() {
    return sta["lvl"] + '%';
  });
  $("[stat='spd'] ~ .bar").css("width", function() {
    return spd["lvl"] + 10 + '%';
  });
  $("[stat='str'] ~ .bar").css("width", function() {
    return str["lvl"] + '%';
  });

$("[total]").html(total["stat"] + " " + total["lvl"]);

});
