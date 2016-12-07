/**
 * 
 */

$(document).ready(function() {
   $("#btnManageMedicine").click(function(event){
       $('#divContainer').load('manageMedicine.html');
   });
   
   $("#btnMedicineOverview").click(function(event){
       $('#divContainer').load('medicineOverview.html');
   });
   
   
   $("#btnEditMedicine").click(function(event){
       $('#divContainer').load('editMedicine.html');
   });
   

   $("#btnDeleteMedicine").click(function(event){
       $('#divContainer').load('deleteMedicine.html');
   });
   
   $("#btnVisual").click(function(event){
       $('#divContainer').load('visual.html');
   });

   $("#btnAcoustical").click(function(event){
       $('#divContainer').load('acoustical.html');
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

   $("#btnManageContactPerson").click(function(event){
       $('#divContainer').load('manageContactPerson.html');
   });
   
   $("#btnStart").click(function(event){
       $('#mainContainer').load('start.html');
   });
   
   $("#btnBackToManageMedicine").click(function(event){
       $('#divContainer').load('manageMedicine.html');
   });
   
   
   $("#btnManageNotification").click(function(event){
       $('#divContainer').load('manageNotification.html');
   });
   
   $("#btnMedikamentHinzufuegen").click(function(event){
       $('#divContainer').load('addMedicine.html');
   });
   
   $("#btnConfiguration").click(function(event){
       $('#divContainer').load('configuration.html');
   });
});