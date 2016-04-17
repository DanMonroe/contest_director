export default function(server) {

      /*
       Seed your development database using your factories.
       This data will not be loaded in your tests.

       Make sure to define a factory for each model you want to create.
       */

      // server.createList('post', 10);


      let aircrafttype1 = server.create("aircrafttype", {"name": "Helicopter"});
      let aircrafttype2 = server.create("aircrafttype", {"name": "Airplane"});

      let contest1 = server.create("contest", {"name": "2016 AMA Helicopter Nationals", "aircrafttype": aircrafttype1});

      let pilotclass1 = server.create("pilotclass", {"name": "Sportsman", aircrafttypeId: aircrafttype1.id});
      let pilotclass2 = server.create("pilotclass", {"name": "Advanced", aircrafttypeId: aircrafttype1.id});
      let pilotclass3 = server.create("pilotclass", {"name": "Expert", aircrafttypeId: aircrafttype1.id});
      let pilotclass4 = server.create("pilotclass", {"name": "FAI F3C", aircrafttypeId: aircrafttype1.id});

      let pilotclass5 = server.create("pilotclass", {"name": "Pattern1", aircrafttypeId: aircrafttype2.id});


      let manSetP = server.create("maneuverset", {"name": "Schedule P", pilotclassId: pilotclass4.id});
      let manSetF = server.create("maneuverset", {"name": "Schedule F", pilotclassId: pilotclass4.id});
      let manSet2 = server.create("maneuverset", {"name": "Expert", pilotclassId: pilotclass3.id});
      let manSet3 = server.create("maneuverset", {"name": "Advanced", pilotclassId: pilotclass2.id});
      let manSet4 = server.create("maneuverset", {"name": "Sportsman", pilotclassId: pilotclass1.id});

      let man1 = server.create("maneuver", {"name": "Triangle 1", maneuversetId: manSetP.id, kfactor: 1.5});
      let man2 = server.create("maneuver", {"name": "Flower", maneuversetId: manSetP.id, kfactor: 1.5});
      let man3 = server.create("maneuver", {
            "name": "Candle with descending flip",
            maneuversetId: manSetP.id,
            kfactor: 1
      });
      let man4 = server.create("maneuver", {
            "name": "Pullback with 3 half loops",
            maneuversetId: manSetP.id,
            kfactor: 1
      });
      let man5 = server.create("maneuver", {"name": "UX", maneuversetId: manSetP.id, kfactor: 1});
      let man6 = server.create("maneuver", {
            "name": "Oval with travelling flip",
            maneuversetId: manSetP.id,
            kfactor: 1
      });
      let man7 = server.create("maneuver", {"name": "Opposite 2 rolls", maneuversetId: manSetP.id, kfactor: 1});
      let man8 = server.create("maneuver", {"name": "Double stall turns", maneuversetId: manSetP.id, kfactor: 1});
      let man9 = server.create("maneuver", {
            "name": "Autorotation with 2 90 deg turns",
            maneuversetId: manSetP.id,
            kfactor: 1
      });

      let man20 = server.create("maneuver", {"name": "Umbrella", maneuversetId: manSetF.id, kfactor: 1.5});
      let man21 = server.create("maneuver", {
            "name": "Continuous piroetting triangle",
            maneuversetId: manSetF.id,
            kfactor: 1.5
      });
      let man22 = server.create("maneuver", {
            "name": "Double candle with descending flip",
            maneuversetId: manSetF.id,
            kfactor: 1
      });
      let man23 = server.create("maneuver", {"name": "W", maneuversetId: manSetF.id, kfactor: 1});
      let man24 = server.create("maneuver", {
            "name": "Double stall turn and flip",
            maneuversetId: manSetF.id,
            kfactor: 1
      });
      let man25 = server.create("maneuver", {"name": "X", maneuversetId: manSetF.id, kfactor: 1});
      let man26 = server.create("maneuver", {
            "name": "Opposite half and full inverted rolls",
            maneuversetId: manSetF.id,
            kfactor: 1
      });
      let man27 = server.create("maneuver", {"name": "Loop with flip", maneuversetId: manSetF.id, kfactor: 1});
      let man28 = server.create("maneuver", {"name": "Autorotation with loop", maneuversetId: manSetF.id, kfactor: 1});


      /** pilots **/
      let pilot1 = server.create("pilot", {"firstName": "Dan", "lastName": "Monroe"});
      let pilot2 = server.create("pilot", {"firstName": "Curtis", "lastName": "Youngblood"});
      let pilot3 = server.create("pilot", {"firstName": "Craig", "lastName": "Bradley"});
      let pilot4 = server.create("pilot", {"firstName": "Leroy", "lastName": "Jenkins"});

      ///** registration **/
      let reg1 = server.create("registration", {
            "contestId": contest1.id,
            "pilotclassId": pilotclass4.id,
            "pilotId": pilot1.id
      });
      let reg2 = server.create("registration", {
            "contestId": contest1.id,
            "pilotclassId": pilotclass4.id,
            "pilotId": pilot2.id
      });
      let reg3 = server.create("registration", {
            "contestId": contest1.id,
            "pilotclassId": pilotclass4.id,
            "pilotId": pilot3.id
      });
      let reg4 = server.create("registration", {
            "contestId": contest1.id,
            "pilotclassId": pilotclass1.id,
            "pilotId": pilot4.id
      });

      let round1 = server.create("round", {"name": "Round 1", "contestId": contest1.id, "pilotclassId": pilotclass4.id,
            maneuversetId: manSetP.id,
            numjudges:4,
            drophigh:1,
            droplow:1
      });
      let round2 = server.create("round", {"name": "Round 2", "contestId": contest1.id, "pilotclassId": pilotclass4.id,
            maneuversetId: manSetP.id,
            numjudges:4,
            drophigh:1,
            droplow:1
      });

      let manScore1 = server.create('maneuverscore',{ maneuverId: man1.id, registrationId: reg1.id, roundId: round1.id});
      let manScore2 = server.create('maneuverscore',{ maneuverId: man2.id, registrationId: reg1.id, roundId: round1.id});
      let manScore3 = server.create('maneuverscore',{ maneuverId: man3.id, registrationId: reg1.id, roundId: round1.id});

      server.create('score', {id: 1, points: 1, maneuverscoreId: manScore1.id});
      server.create('score', {id: 2, points: 3, maneuverscoreId: manScore1.id});
      server.create('score', {id: 3, points: 5, maneuverscoreId: manScore1.id});
      server.create('score', {id: 4, points: 7, maneuverscoreId: manScore1.id});

      server.create('score', {id: 5, points: 2, maneuverscoreId: manScore2.id});
      server.create('score', {id: 6, points: 4, maneuverscoreId: manScore2.id});
      server.create('score', {id: 7, points: 6, maneuverscoreId: manScore2.id});
      server.create('score', {id: 8, points: 8, maneuverscoreId: manScore2.id});

      server.create('score', {id: 9, points: 1, maneuverscoreId: manScore3.id});
      server.create('score', {id: 10, points: 1, maneuverscoreId: manScore3.id});
      server.create('score', {id: 11, points: 2, maneuverscoreId: manScore3.id});
      server.create('score', {id: 12, points: 3, maneuverscoreId: manScore3.id});

}