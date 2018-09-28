$(window).on("load", function() {

  var hp = {
    stat: "HP",
    lvl: 10
  };
  var cha = {
    stat: "CHA",
    lvl: 21
  };
  var sta = {
    stat: "STA",
    lvl: 13
  };
  var spd = {
    stat: "SPD",
    lvl: 17
  };
  var str = {
    stat: "STR",
    lvl: 10
  };
  var total = {
    stat: "TOTAL STATS",
    lvl: 71
  };

  $("[stat=\"str\"]").html(str["stat"] + " " + str["lvl"]);
  $("[stat=\"sta\"]").html(sta["stat"] + " " + sta["lvl"]);
  $("[stat=\"cha\"]").html(cha["stat"] + " " + cha["lvl"]);
  $("[stat=\"hp\"]").html(hp["stat"] + " " + hp["lvl"]);
  $("[stat=\"spd\"]").html(spd["stat"] + " " + spd["lvl"]);

  $("[stat='hp'] ~ .bar").css("width", function() {
    return hp["lvl"] + '%';
  });
  $("[stat='cha'] ~ .bar").css("width", function() {
    return cha["lvl"] + '%';
  });
  $("[stat='sta'] ~ .bar").css("width", function() {
    return sta["lvl"] + '%';
  });
  $("[stat='spd'] ~ .bar").css("width", function() {
    return spd["lvl"] + '%';
  });
  $("[stat='str'] ~ .bar").css("width", function() {
    return str["lvl"] + '%';
  });

$("[total]").html(total["stat"] + " " + total["lvl"]);

});
