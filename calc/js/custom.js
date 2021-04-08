$('.button').click(function(){
	let number = $(this).text()
	let pre_input = $('.myinput').val()
	let new_input = pre_input + number 
	$('.myinput').val(new_input)
})
$('.button1').click(function(){
	let eq = $('.myinput').val()
	let result = eval(eq)
	$('.myinput').val(result)

})
