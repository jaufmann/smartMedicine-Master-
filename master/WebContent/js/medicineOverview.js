/**
 * @author Waldemar Jaufmann
 * @author Thomas Seewald
 */
$(function(){ 
	$('#bootstrap-table').ready(function() {
		load_delete_products();
		  $('#bootstrap-table').bdt();
	      $("#page-rows-form").children("option[value='3']").prop('selected',true)
	});
	
	function load_delete_products() {
	    		$("<tr><td><font>Diabetes</font></td><td><font>Tebonin</font></td><td><font>21.12.2015</font></td><td><font>15 Uhr</font></td></tr>" +
	    				"<tr><td><font>Diabetes</font></td><td><font>Tebonin</font></td><td><font>21.12.2015</font></td><td><font>15 Uhr</font></td></tr>" +
	    				"<tr><td><font>Diabetes</font></td><td><font>Tebonin</font></td><td><font>21.12.2015</font></td><td><font>15 Uhr</font></td></tr>" +
	    				"<tr><td><font>Diabetes</font></td><td><font>Tebonin</font></td><td><font>21.12.2015</font></td><td><font>15 Uhr</font></td></tr>" +
	    				"<tr><td><font>Diabetes</font></td><td><font>Tebonin</font></td><td><font>21.12.2015</font></td><td><font>15 Uhr</font></td></tr>" +
	    				"<tr><td><font>Diabetes</font></td><td><font>Tebonin</font></td><td><font>21.12.2015</font></td><td><font>15 Uhr</font></td></tr>" +
	    				"<tr><td><font>Bluthochdruck</font></td><td><font>Tebonin</font></td><td><font>21.12.2015</font></td><td><font>15 Uhr</font></td></tr>" +
	    				"<tr><td><font>Bluthochdruck</font></td><td><font>Tebonin</font></td><td><font>21.12.2015</font></td><td><font>15 Uhr</font></td></tr>").appendTo("table[id='bootstrap-table']");
			    		
		};
});