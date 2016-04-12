export default function(server) {

  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.

    Make sure to define a factory for each model you want to create.
  */

  // server.createList('post', 10);

  server.create("contest", {"name": "2016 AMA Helicopter Nationals"});

  let aircrafttype1 = server.create("aircrafttype", {"name": "Helicopter"});
  let aircrafttype2 = server.create("aircrafttype", {"name": "Airplane"});

  let pilotclass1 = server.create("pilotclass", {"name": "FAI F3C", aircrafttypeId: aircrafttype1.id});
  let pilotclass2 = server.create("pilotclass", {"name": "Expert", aircrafttypeId: aircrafttype1.id});
  let pilotclass3 = server.create("pilotclass", {"name": "Advanced", aircrafttypeId: aircrafttype1.id});
  let pilotclass4 = server.create("pilotclass", {"name": "Sportsman", aircrafttypeId: aircrafttype1.id});


  let manSetP = server.create("maneuverset", {"name": "Schedule P", pilotclassId: pilotclass1.id});
  let manSetF = server.create("maneuverset", {"name": "Schedule F", pilotclassId: pilotclass1.id});
  let manSet2 = server.create("maneuverset", {"name": "Expert", pilotclassId: pilotclass2.id});
  let manSet3 = server.create("maneuverset", {"name": "Advanced", pilotclassId: pilotclass3.id});
  let manSet4 = server.create("maneuverset", {"name": "Sportsman", pilotclassId: pilotclass4.id});

  let man1 = server.create("maneuver", {"name": "Triangle 1", maneuversetId: manSetP.id, kfactor: 1.5});
  let man2 = server.create("maneuver", {"name": "Flower", maneuversetId: manSetP.id, kfactor: 1.5});
  let man3 = server.create("maneuver", {"name": "Candle with descending flip", maneuversetId: manSetP.id, kfactor: 1});
  let man4 = server.create("maneuver", {"name": "Pullback with 3 half loops", maneuversetId: manSetP.id, kfactor: 1});
  let man5 = server.create("maneuver", {"name": "UX", maneuversetId: manSetP.id, kfactor: 1});
  let man6 = server.create("maneuver", {"name": "Oval with travelling flip", maneuversetId: manSetP.id, kfactor: 1});
  let man7 = server.create("maneuver", {"name": "Opposite 2 rolls", maneuversetId: manSetP.id, kfactor: 1});
  let man8 = server.create("maneuver", {"name": "Double stall turns", maneuversetId: manSetP.id, kfactor: 1});
  let man9 = server.create("maneuver", {"name": "Autorotation with 2 90 deg turns", maneuversetId: manSetP.id, kfactor: 1});

  let man20 = server.create("maneuver", {"name": "Umbrella", maneuversetId: manSetF.id, kfactor: 1.5});
  let man21 = server.create("maneuver", {"name": "Continuous piroetting triangle", maneuversetId: manSetF.id, kfactor: 1.5});
  let man22 = server.create("maneuver", {"name": "Double candle with descending flip", maneuversetId: manSetF.id, kfactor: 1});
  let man23 = server.create("maneuver", {"name": "W", maneuversetId: manSetF.id, kfactor: 1});
  let man24 = server.create("maneuver", {"name": "Double stall turn and flip", maneuversetId: manSetF.id, kfactor: 1});
  let man25 = server.create("maneuver", {"name": "X", maneuversetId: manSetF.id, kfactor: 1});
  let man26 = server.create("maneuver", {"name": "Opposite half and full inverted rolls", maneuversetId: manSetF.id, kfactor: 1});
  let man27 = server.create("maneuver", {"name": "Loop with flip", maneuversetId: manSetF.id, kfactor: 1});
  let man28 = server.create("maneuver", {"name": "Autorotation with loop", maneuversetId: manSetF.id, kfactor: 1});


  server.create("round", {"name": "Round 1"});
}
