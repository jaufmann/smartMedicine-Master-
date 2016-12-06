/**
 * 
 */

$(document).ready(function() {
   $("#btnMedikamenteVerwalten").click(function(event){
       $('#divContainer').load('medikamentenVerwaltung.html');
   });
   
   $("#btnMedikamentenUebersicht").click(function(event){
       $('#divContainer').load('medikamentenUebersicht.html');
   });
   
   
   $("#btnEditMedicine").click(function(event){
       $('#divContainer').load('editMedicine.html');
   });
   
   $("#btnVisuell").click(function(event){
       $('#divContainer').load('visuell.html');
   });

   
   $("#btnAkustisch").click(function(event){
       $('#divContainer').load('akustisch.html');
   });

   
   $("#btnVisuellZurueck").click(function(event){
	   $('#divContainer').load('benachrichtigungenVerwalten.html');
   });
   
   
   $("#btnAkustischZurueck").click(function(event){
	   $('#divContainer').load('benachrichtigungenVerwalten.html');
   });
   
   

   $("#btnMedikamenteLoeschen").click(function(event){
       $('#divContainer').load('medikamenteLoeschen.html');
   });
   
   $("#btnAddMedicineForwardFirst").click(function(event){
       $('#divContainer').load('addMedicine2.html');
   });
   
   
   $("#btnAddMedicineSecondBack").click(function(event){
       $('#divContainer').load('addMedicine.html');
   });
  
   
   $("#btnEinstellungen").click(function(event){
       $('#divContainer').load('einstellungen.html');
   });

   $("#btnPersonen").click(function(event){
       $('#divContainer').load('personen.html');
   });
   
   $("#medikamenteVerwaltenZurueck").click(function(event){
       $('#mainContainer').load('start.html');
   });
   
   $("#btnMedikamentenUebersichtZurueck").click(function(event){
       $('#divContainer').load('medikamentenVerwaltung.html');
   });
   
   

   $("#btnPersonenZurueck").click(function(event){
       $('#divContainer').load('einstellungen.html');
   }); 
   
   $("#btnBenachrichtigungen").click(function(event){
       $('#divContainer').load('benachrichtigungenVerwalten.html');
   });
   
   $("#btnMedikamentHinzufuegen").click(function(event){
       $('#divContainer').load('addMedicine.html');
   });
   
   $("#btnBenachrichtgungZurueck").click(function(event){
       $('#divContainer').load('einstellungen.html');
   });
});