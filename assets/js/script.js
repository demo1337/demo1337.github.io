window.onload = function() {
//Script by THM 
$("#submit_now").click(function(){
	var input = $("#input_risk").val();
	if(input == ""){
		alert("Please enter in a value!");
	}else{
	var att1 = $("#att1").val();
	var att2 = $("#att2").val();
	var att3 = $("#att3").val();
	var att4 = $("#att4").val();
	var att5 = $("#att5").val();
	var att6 = $("#att6").val();
	var att7 = $("#att7").val();
	var att8 = $("#att8").val();
	var att9 = $("#att9").val();
	var att10 = $("#att10").val();
	var att11 = $("#att11").val();
	var att12 = $("#att12").val();
	var att13 = $("#att13").val();
	var att14 = $("#att14").val();
	var att15 = $("#att15").val();
	var att16 = $("#att16").val();
	var priority = "";
	var total = (+att1)+(+att2)+(+att3)+(+att4)+(+att5)+(+att6)+(+att7)+(+att8)+(+att9)+(+att10)+(+att11)+(+att12)+(+att13)+(+att14)+(+att15)+(+att16);
	if(total <= 17){
		priority = "Low";
	}else if(total >17 && total < 34){
		priority = "Medium";
	}else if(total >=34){
		priority = "High";
	}
	$("#output_table").append("<tr><th>"+priority+"</th><th>"+input+"</th><td>"+att1+"</td><td>"+att2+"</td><td>"+att3+"</td><td>"+att4+"</td><td>"+att5+"</td><td>"+att6+"</td><td>"+att7+"</td><td>"+att8+"</td><td>"+att9+"</td><td>"+att10+"</td><td>"+att11+"</td><td>"+att12+"</td><td>"+att13+"</td><td>"+att14+"</td><td>"+att15+"</td><td>"+att16+"</td><td>"+total+"</td></tr>");
}
});
};