$(document).ready(function(){
$('#count_1').val('');
	LoadProducts();
	
});	
function LoadProducts(){
  // загрузка товара на страницу
  $.getJSON( "products.json", function( data ) {	
  	outType ="";
  	articul = "";
  	search = "";
  	// выводим типы товаров  верхнего инпута
  	for (var key in data){ 
  		outType+='<option data-art="'+key+'">'+data[key]['name']+'</option>';	 
    	}
  	if(outType != undefined)
  	{   	
  	// отображение списка типов товара в опциях верхнего инпута
  		$(".type_1").html(outType); 	  	 	  	
  	}

 //  выводим по клику типы товаров
$('.type_1 option').on('click',showGood);
function showGood(){
	// переменная атрибут артикул по его значению  определяем группы товара в селекте
	articul = $(this).attr('data-art');
	console.log(articul);   
	// переменная поля моделей товара
	var outModel ="";	
	//  вывод моделей товара в зависимости от типа товара  
	for (var key in data){ 
	 
	$.each(data, function(key, val){	

	// создаём массив названий моделей в выпападющем списке
	let outModel = data[articul].items.map(({ name }) => name);
	// заполняем селекты для моделей опциями значений моделей при клике на тип товара
	$('.model_1').empty();
	$.each(outModel, function(i, p) {
	$('.model_1').append($('<option></option>').val(i).html(p));
	});
	
	$('.model_1 option').on('click',showModel);   		
	}); 
	}
}; 

// ВЫВОД ИНФОРМАЦИЮ О МОДЕЛИ
$('.model_1 option').on('click', showModel);
  outDesc ="";
  outPrice = "";
  outImg = "";  
function showModel(){
// переменная атрибут артикул. по его значению  определяем модель товара в селекте
	articul_model = $(this).attr('value');
	console.log(articul_model);     

	//  ОБЪЕКТ ДЛЯ ОБРАЩЕНИЯ К ИМЕНИ ТОВАРА
	objName = data[articul].items[articul_model].name;
		// ОБЪЕКТ ДЛЯ ПОЛУЧУНИЯ ОПИСАНИЯ ТОВАРА
	objDesc = data[articul].items[articul_model].desc;
	// ВЫВОД ОПИСАНИЯ
	outDesc ='<span data-desc="'+objName+'">'+objDesc+'</span>'; 	
	// вывод описание выбранной модели 
	$("#desc_1").html(outDesc);	
	// ОБЪЕКТ ДЛЯ ПОЛУЧЕНИЯ  ЦЕНЫ
	objPrice = data[articul].items[articul_model].price;
	// ВЫВОД ЦЕНЫ
	outPrice = '<span class="red" data-price="'+objPrice+'">'+objPrice+' <small>бел. руб.</small></span>';
	// вывод ценs выбранной модели 
	$("#price_1").html(outPrice.replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 '));
	//  ОБЪЕКТ ДЛЯ ОБРАЩЕНИЯ К ИМЕНИ КАРТИНКИ
	objImage = data[articul].items[articul_model].img; 
	// console.log(objImage);			  	     
	outImg ='<img  data-img="'+objName+'" src="img/'+objImage+'">';
	// вывод картинк 
	$("#img_1").html(outImg);	
	
	// ВЫВОД КНОПКИ ДЛЯ ЗАКАЗА 
	outBtn = '<button class="add" data-order-name="'+objName+'" data-order-price="'+objPrice+'" data-order-img="'+objImage+'">Добавить в заказ</button>';
	$(".order").html(outBtn);		

	$('button.add').on('click', addToOrder);
};
});
}
// ФУНКЦИЯ ДОБАВЛЕНИЯ ТОВАРА В КОРЗИНУ

function addToOrder (){
	orderImage = $(this).attr('data-order-img');	
	orderName = $(this).attr('data-order-name');
	orderCount = $('#count_1').val();
	orderPrice = $(this).attr('data-order-price');

	objCard = "";
	objCard +='<div class="card_order"><div class="card_order_image image-thumbnail"><img "style="height: 50px;"  src="img/'+orderImage+'"></div>';
	objCard += '<div class="card_order_name"><h4 class="h4">'+orderName+'</h4></div>';
	objCard += '	<div class="card_order_count"><span>'+orderCount+' шт.</span></div>';
	objCard += '<div class="card_order_price red"><span  >'+orderPrice+' <small> руб.</small></span></div>';
	objCard += '<a class="close_order " data-sum="'+orderCount*orderPrice+'"></a></div>	';
	// ДОБАВИТЬ ЗАКАЗ В КОРЗИНУ ПРИ ЗАПОЛНЕННОМ ИНПУТЕ
	if(orderCount>0){
		$('.card_order_2').after(objCard);
	}
	// УДАЛИТЬ ЗАКАЗ ИЗ КОРЗИНЫ
	$('.close_order').on('click', function(){	
		$(this).parent().remove();	
	})		
	}
addToOrder();

$(document).on('click',calculate 
	// function(){
	//  outSumm = "";
	//  outSumm = "22";
 //   outSumm = $('.close_order').attr('data-sum').val();
 //    // outSumm = $('.close_order').each(attr('data-sum'))val();
 //  $('#summ').html(outSumm);
 //  console.log(outSumm);
// }
);

function calculate(){
        var  outSumm = 0;
 // $('.close_order').attr('data-sum').empty();
        // outSumm = $('.close_order').attr('data-sum');
        // outSumm = parseInt(outSumm);

        //      $('#summ').html(outSumm);
        //      console.log(outSumm);
        // $('.close_order').each(function(all){          
        //    //  var now = $(this).attr('data-sum').html();
        //    //  outSumm = parseInt(outSumm);
        //    //  now = parseInt(now);
        //    //  outSumm = outSumm+now;
      
        // });

$('.close_order').each(function(){
    // outSumm = $(this).attr('data-sum').empty();
    outSumm = parseInt(outSumm);
    outSumm += parseInt($('.close_order').attr('data-sum'));
});
  $('#summ').html(outSumm);
  
    // console.log(outSumm.replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 '));
}
calculate(); 
  	
  // default
 //  var out = '';
	// for (var key in data){ 
	// 	out += '<header>Выберите товар для заказа</header>';
	// 	out += '<article><div class="subitems">';
	// 	out += '<select class="type_1">'+outType+'</select>' ;
	// 	out += '<select class="model_1"></select>' ;
	// 	out += 	'<p>Описание: </p>' ;
	// 	out += '<span id="desc_1">'+data[0].items[0].desc+'</span>';
	// 	out += '<p>Цена: </p>' ;
	// 	out += '<span  data-price="'+data[0].items[0].price+'">'+data[0].items[0].price+' <small>бел. руб.</small></span>'
	// 	out += '<p>Количество: </p>' ;
	// 	out += '<label for="count_1"></label><input type="text" id="count_1">' ;
	// 	out += '</div></article>' ;
	// 	out += '<aside class="image-thumbnail " id="img_1"><img style="height: 300px; margin-left:0;" data-img="'+data[0].items[0].name+'" src="img/'+data[0].items[0].img+'"></aside>' ;	
	// 	out +=  '<footer class="order"><button class="add" data-order="'+data[0].items[0].name+'" value="Добавить в заказ">Добавить в заказ</button></footer>' ;
	// }
	//  $(".products").html(out);