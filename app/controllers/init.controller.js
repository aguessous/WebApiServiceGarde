const Telephone = require('../models/telephone.model.js');

const Message = require('../models/message.model.js');

const Tuteur = require('../models/tuteur.model.js');
const Authentification = require('../models/authentification.model.js');
const Prestation = require('../models/prestation.model.js');
const Parent = require('../models/parent.model.js');
const Enfant = require('../models/enfant.model.js');
const Paiement = require('../models/paiement.model.js');
const Extra = require('../models/extra.model.js');
exports.init = (req, res) => {
	
  // Add Subject to MongoDB
  var tel1 = new Telephone({
	  numeroTel: '555-555-0001',
	  typeTel: 'Domicile'
  });
  
  var tel2 = new Telephone({
	  numeroTel: '555-555-0002',
	  typeTel: 'Travail'
  });
  
  

  tel1.save(function (err){
	 if(err) return console.error(err.stack)
	 console.log("tel 1 successfully added")
  });

  tel2.save(function (err){
    if(err) return console.error(err.stack)
    console.log("tel 2 successfully added")
   });

   var tuteur1 = new Tuteur({
	  nomTuteur: "Ssafini",
    prenomTuteur:"abdellah",
    chercherEnfantTuteur: "oui",
    urgenceTuteur: "oui"
  });
  tuteur1.telephones.push(tel1._id, tel2._id);
  tuteur1.save(function (err){
    if(err) return console.error(err.stack)
    console.log("tuteur1 successfully  added")
   });

   
var auth1 = new Authentification({
	  login: "abdellah",
    passWord: "cindy",
    droitAcces: "Parent"
  });

  auth1.save(function (err){
	 if(err) return console.error(err.stack)
	 console.log("auth1 successfully added")
  });

  var parent1 = new Parent({
    lienParent:"mère",
    nomParent:"Tremblay",
    prenomParent:"Sara",
    courrielParent:"sara@gmail.com",
    authentification:auth1._id
   });
   parent1.telephones.push(tel1._id, tel2._id);
 
   parent1.save(function (err){
    if(err) return console.error(err.stack)
    console.log("parent1 successfully added")
   });
   var prestation1 = new Prestation({
    intitule: "AM",
     prix: 10,
     date:"12/02/2019",
     etatPrestation:"non payé"
   });
 
   prestation1.save(function (err){
    if(err) return console.error(err.stack)
    console.log("successfully added")
   });

   var enfant1 = new Enfant({
    nomEnfant:"flouflou",
    prenomEnfant:"allen",
    dateNaissanceEnfant:"20/02/2012",
    sexeEnfant:"Fille",
    classeEnfant:"205",
   });
   enfant1.parents.push(parent1._id);
   enfant1.tuteurs.push(tuteur1._id);
   enfant1.prestations.push(prestation1._id);
 
   enfant1.save(function (err){
    if(err) return console.error(err.stack)
    console.log("enfant1 successfully added")
   });
   var paiement1 = new Paiement({
    datePaiement:"01/02/2019",
    montantPaiement:"150",
    enfant:enfant1._id
   });
   paiement1.prestations.push(prestation1._id);
   paiement1.save(function (err){
    if(err) return console.error(err.stack)
    console.log("successfully added")
   });

   var extra1 = new Extra({
    dateExta:"01/02/2019",
    prestationExtra:"AM",
    heureExtra:"07:50",
   });
 
   extra1.save(function (err){
    if(err) return console.error(err.stack)
    console.log("successfully added")
   });



   enfant1.extras.push(extra1._id);


  // Return Message
  res.send("Done Initial Data!");
}
