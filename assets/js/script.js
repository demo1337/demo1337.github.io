window.onload = function() {
	//Script by THM 
		var mtt1 = $("#mtt1").val();
		var mtt2 = $("#mtt2").val();
		var mtt3 = $("#mtt3").val();
		var mtt4 = $("#mtt4").val();
		var mtt5 = $("#mtt5").val();
	$("#submit_miti").click(function(){
		mtt1 = $("#mtt1").val();
		mtt2 = $("#mtt2").val();
		mtt3 = $("#mtt3").val();
		mtt4 = $("#mtt4").val();
		mtt5 = $("#mtt5").val();
		$('div.newmiti').replaceWith(mtt1);
		$('div.newmiti1').replaceWith(mtt2);
		$('div.newmiti2').replaceWith(mtt3);
		$('div.newmiti3').replaceWith(mtt4);
		$('div.newmiti4').replaceWith(mtt5);
	});

	$("#submit_now").click(function(){
		var input = $("#input_risk").val();
		var input_risk_desc = $("#input_risk_desc").val();
		var count = $("#listofdawgs").children().length;
		$('div#value_risk1').text(count);

		if(input == ""){
			alert("Please enter in a value!");
		}else{
		var att1 = $("#att1").val();
		var att2 = $("#att2").val();
		var att3 = $("#att3").val();
		var att4 = $("#att4").val();
		var att5 = $("#att5").val();
		mtt1 = $("#mtt1").val();
		mtt2 = $("#mtt2").val();
		mtt3 = $("#mtt3").val();
		mtt4 = $("#mtt4").val();
		mtt5 = $("#mtt5").val();
		$('div#newmiti').text(mtt1);
		$('div#newmiti1').text(mtt2);
		$('div#newmiti2').text(mtt3);
		$('div#newmiti3').text(mtt4);
		$('div#newmiti4').text(mtt5);
		var priority = "";
		var total = (+att1)+(+att2)+(+att3)+(+att4)+(+att5);
		var mtotal = (+mtt1)+(+mtt2)+(+mtt3)+(+mtt4)+(+mtt5);
		total = total - mtotal;
		if(total <= 17){
			priority = "Low";
		}else if(total >17 && total < 34){
			priority = "Medium";
		}else if(total >=34){
			priority = "High";
		}
			//$("#output_table").append("<tr><th>"+priority+"</th><th>"+input+"</th><td>"+att1+"</td><td>"+att2+"</td><td>"+att3+"</td><td>"+att4+"</td><td>"+att5+"</td></tr>");
			$("#listofdawgs").append('<li>'+
								'<div class="collapsible-header"><i class="material-icons">fingerprint</i>'+input+'<div class="score">'+total+'</div></div>'+
								'<div class="collapsible-body  inside_info">'+
									'<ul class="collapsible" id="listofdawgs" data-collapsible="accordion">'+
										'<li><div class="collapsible-header"><i class="material-icons">info</i>'+input_risk_desc+'</div></li>'+
									'</ul>'+
									'<ul class="collapsible data_body" id="listofdawgs" data-collapsible="accordion">'+
										'<li><div class="collapsible-header"><i class="material-icons">add circle outline</i>'+att1+'<div class="data-score">Revenue Loss</div></div></li>'+
										'<li><div class="collapsible-header"><i class="material-icons">add circle outline</i>'+att2+'<div class="data-score">Retentional/Damage</div></div></li>'+
										'<li><div class="collapsible-header"><i class="material-icons">add circle outline</i>'+att3+'<div class="data-score">Compliance Requirement</div></div></li>'+
										'<li><div class="collapsible-header"><i class="material-icons">add circle outline</i>'+att4+'<div class="data-score">Privacy Implications</div></div></li>'+
										'<li><div class="collapsible-header"><i class="material-icons">add circle outline</i>'+att5+'<div class="data-score">Denial of Service</div></div></li>'+
									'</ul>'+
									'<ul class="collapsible data_body_minus" id="listofdawgs" data-collapsible="accordion">'+
										'<li><div class="collapsible-header"><i class="material-icons">remove circle outline</i><div class="newmiti">'+mtt1+'</div><div class="data-score">Vulnerability Management</div></div></li>'+
										'<li><div class="collapsible-header"><i class="material-icons">remove circle outline</i><div class="newmiti1">'+mtt2+'</div><div class="data-score">Identity Management</div></div></li>'+
										'<li><div class="collapsible-header"><i class="material-icons">remove circle outline</i><div class="newmiti2">'+mtt3+'</div><div class="data-score">Data Security</div></div></li>'+
										'<li><div class="collapsible-header"><i class="material-icons">remove circle outline</i><div class="newmiti3">'+mtt4+'</div><div class="data-score">Cyber Defence</div></div></li>'+
										'<li><div class="collapsible-header"><i class="material-icons">remove circle outline</i><div class="newmiti4">'+mtt5+'</div><div class="data-score">Security Operations</div></div></li>'+
									'</ul>'+
								'</div>'+
							'</li>');
		}
	});

};