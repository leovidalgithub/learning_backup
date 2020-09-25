$(document).ready(function () {
	$('#regex1').val('[aeiou]'); // /[aeiou]/g
	$('#text1').val('This is a example phrase');

	// //excersise replacing vowels
	$('.textInput').on('change paste keyup', function (e) {
		var elementId = e.target.id;
		var boxNumber = parseInt(elementId.match(/\d/g)[0]);

		var regexStr = $('#regex' + boxNumber).val();
		var text = $('#text' + boxNumber).val();
		console.log(regexStr);
		var regex = new RegExp(regexStr, 'g');


		var result = text.replace(regex, '*');
		$('#textarea' + boxNumber).val(result);
	});

	// //excersise about anchor
	// $('#text').val('http://www.in3forbooks.com');
	// var regexStr = '(http://www.[a-zA-Z0-9._-]{4,})';
	// var replacing = '<a href=\'$1\'>$1</a>';
	// $('#regex').val(regexStr);

	// $('#text').on('change paste keyup', function (e) {
	// 	var regex = new RegExp(regexStr, 'gi');
	// 	var text = $('#text').val();
	// 	var result = text.replace(regex, replacing);
	// 	$('#textarea1').val(result);
	// });

	// var paragrahp = 'This book can be bought online at http://www.inforbooks.com';
	// var regex = new RegExp(regexStr, 'gi');
	// var pwithanchor = paragrahp.replace(regex, replacing);
	// $('#textarea2').val(paragrahp + '\n\n' + pwithanchor);
	// $('#p1').append(pwithanchor);
	
	// //exersise about matches
	// var content3 = 'Looking for um: <br>Lorem ipsum dolor um en los ums sit amet consectetur adipisicing elit. Error ducimus, ipsa quaerat excepturi, dolorum laudantium harum veritatis libero fugiat nostrum rem incidunt labore, molestias consequuntur. Quis veniam ad illum corrupti?';
	// $('#p2').text(content3);
	// var regex3 = new RegExp(/(um)/g);
	// var replacing3 = '<span>$1</span>';
	// var result3 = content3.replace(regex3, replacing3);
	// $('#p2').html(result3);
});

