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
	    		$("<tr><td><font>Diabetes</font></td><td><font>Tebonin</font></td><td><font>21.12.2015</font></td><td><font>15 Uhr</font></td><td align='center'><button type='button' class='btn btn-warning'><img src='img/edit_icon.png' width='60' heigth='60'/></button></td></tr>" +
	    				"<tr><td><font>Diabetes</font></td><td><font>Tebonin</font></td><td><font>21.12.2015</font></td><td><font>15 Uhr</font><td align='center'><button type='button' class='btn btn-warning'><img src='img/edit_icon.png' width='60' heigth='60'/></button></td></tr>" +
	    				"<tr><td><font>Diabetes</font></td><td><font>Tebonin</font></td><td><font>21.12.2015</font></td><td><font>15 Uhr</font><td align='center'><button type='button' class='btn btn-warning'><img src='img/edit_icon.png' width='60' heigth='60'/></button></td></tr>" +
	    				"<tr><td><font>Diabetes</font></td><td><font>Tebonin</font></td><td><font>21.12.2015</font></td><td><font>15 Uhr</font><td align='center'><button type='button' class='btn btn-warning'><img src='img/edit_icon.png' width='60' heigth='60'/></button></td></tr>" +
	    				"<tr><td><font>Diabetes</font></td><td><font>Tebonin</font></td><td><font>21.12.2015</font></td><td><font>15 Uhr</font><td align='center'><button type='button' class='btn btn-warning'><img src='img/edit_icon.png' width='60' heigth='60'/></button></td></tr>" +
	    				"<tr><td><font>Diabetes</font></td><td><font>Tebonin</font></td><td><font>21.12.2015</font></td><td><font>15 Uhr</font><td align='center'><button type='button' class='btn btn-warning'><img src='img/edit_icon.png' width='60' heigth='60'/></button></td></tr>" +
	    				"<tr><td><font>Bluthochdruck</font></td><td><font>Tebonin</font></td><td><font>21.12.2015</font></td><td><font>15 Uhr</font><td align='center'><button type='button' class='btn btn-warning'><img src='img/edit_icon.png' width='60' heigth='60'/></button></td></tr>" +
	    				"<tr><td><font>Bluthochdruck</font></td><td><font>Tebonin</font></td><td><font>21.12.2015</font></td><td><font>15 Uhr</font></td><td align='center'><button type='button' class='btn btn-warning'><img src='img/edit_icon.png' width='60' heigth='60'/></button></td></tr>").appendTo("table[id='bootstrap-table']");
			    		
		};
});