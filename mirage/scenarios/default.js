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

  let man1 = server.create("maneuver", {"name": "Test 1", maneuversetId: manSetP.id});
  let man2 = server.create("maneuver", {"name": "Test 2", maneuversetId: manSetP.id});


  server.create("round", {"name": "Round 1"});
}
