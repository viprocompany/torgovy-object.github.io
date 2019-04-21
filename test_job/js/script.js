$(document).ready(function(){

	LoadProducts();
});	
	function LoadProducts(){
  // загрузка товара на страницу
  $.getJSON( "products.json", function( data ) {
  	 obj= data;  	
  	 obj1 = data[0];  	
  	 obj2 = data[1];  	
  	 obj3 = data[2];  	
        // console.log(smart_model);
    // console.log(objSmart[0].desc);	
    // console.log(objSmart[0]);		
     objSmart = obj1.items; 
     objTv = obj2.items; 
     objBi = obj3.items; 

      	// var out = '';
	// for (var key in obj){ 
	// 	 <header>Выберите товар для заказа</header>	
	// 	 <article><div class="subitems">
	// 	<select class="type_1"></select>
	// 	<select class="model_1"></select>
	// 		<p>Описание: </p>
	// 	<span id="desc_1"></span>
	// 	<p>Цена: </p>
	// 	<span id="price_1"></span>
	// 	<p>Количество: </p>
	// 	<label for="count_1"></label><input type="text" id="count_1">
	// 	</div></article>
	// 	 <aside class="image-thumbnail " id="img_1"></aside>	
	// 	  <footer class="order"><input type="button" value="Добавить в заказ"></footer>

	// }
	//  $("#products").html(out);

  	outType ="";
    outDesc ="";
    outPrice = "";
  
  	for (var key in obj){ 
  	outType+='<option data-art="'+key+'">'+data[key]['name']+'</option>';	
    		// выбераем дефолтное описание, цену , изображение  выбранной модели	 телефона 		
	  		$.each(obj, function(key, val){
	  			// outDesc ='<span data-desc="'+objSmart[0].name+'">'+objSmart[0].desc+'</span>'; 	
	  			// outPrice = '<span  data-price="'+objSmart[0].price+'">'+objSmart[0].price+' <small>бел. руб.</small></span>'
	  			// outImg ='<img style="height: 300px; margin-left:0;" data-img="'+objSmart[0].name+'" src="img/'+objSmart[0].img+'">';


  		});   	
  	}
  	if(outType != undefined)
  	{ 
  		// выводим типы товаров в селектах верхнего инпута
  	$(".type_1").html(outType);
// $(".model_1").html(outType);
  	// выводим списрк mоделей   

	  	
	  	
  	}

 // выбор артикула типа товара для последующего выбора моделей товара по типу товара
 // $('.type option').on('click',choiceType);
 //  выводим по клику типы товаров
  $('.type_1 option').on('click',function(){
  	// переменная атрибут артикул по его значению  определяем группы товара в селекте
  		articul = $(this).attr('data-art');
    console.log(articul);   
			
//  вывод моделей товара в зависимости от типа товара  
    for (var key in obj){ 
    	// переменная поля моделей товара
    		var outModel ="";
    		  outImg = "";     			 
  		$.each(obj, function(key, val){	
  			// по атрибуту артикула в поле типа товара определяем тип товара и выводим модели этого типа
  			if(articul == "0"){  	
  			// создаём массив названий моделей
		    let outModel = objSmart.map(({ name }) => name);
		    // заполняем селекты для моделей опциями значений моделей при клике на тип товара
		    $('.model_1').empty();
				$.each(outModel, function(i, p) {
		    $('.model_1').append($('<option></option>').val(i).html(p));
		    });
		       $('.model_1 option').on('click',function(){
			  	// переменная атрибут артикул по его значению  определяем модель товара в селекте
			   	articul_model = $(this).attr('value');
			  	console.log(articul_model);     
			  	     //  РАБОТАЕТ!!!!!!!!!!!
	  	     objImage = objSmart[articul_model].img; 
	  	     console.log(objImage);			  	     
	  	    outImg ='<img style="height: 300px; margin-left:0;" data-img="'+objSmart[articul_model].name+'" src="img/'+objImage+'">';
 				// выводим картинку 
	  	  $("#img_1").html(outImg);	
	  	  // ВЫВОД ЦЕНЫ
	  	  	outPrice = '<span  data-price="'+objSmart[articul_model].price+'">'+objSmart[articul_model].price+' <small>бел. руб.</small></span>'
			    // выводим цену выбранной модели 
	  	   $("#price_1").html(outPrice);	
	  	   // ВЫВОД ОПИСАНИЯ
	  	   	outDesc ='<span data-desc="'+objSmart[articul_model].name+'">'+objSmart[articul_model].desc+'</span>'; 	
  	    // выводим описание выбранной модели 
	  	     $("#desc_1").html(outDesc);	
			  	 //    $.each(objSmart,function(key,data) {
			  	 //    	console.log('Раздел: ' + key);
			  	 //    	$.each(data,function(key,data) {
			  	 //      	console.log('тип: '  + data);
			  	 //    		$.each(data,function(index,value) {
			  	 //          console.log('модель = ' + value['name'] + '; картинка = '+ value['img']);
			  	 //    });
       //      }); 
			    // });
	      }); 
  			}

  			if(articul == "1"){
  			let outModel = objTv.map(({ name }) => name);
		    $('.model_1').empty();
				$.each(outModel, function(i, p) {
		    $('.model_1').append($('<option></option>').val(i).html(p));
		    });	
		        $('.model_1 option').on('click',function(){
			  	// переменная атрибут артикул по его значению  определяем модель товара в селекте
			  	articul_model = $(this).attr('value');
			  	console.log(articul_model);  
			  	 objImage = objTv[articul_model].img; 
	  	     console.log(objImage);			  	     
	  	    outImg ='<img style="height: 300px; margin-left:0;" data-img="'+objTv[articul_model].name+'" src="img/'+objImage+'">';
 				// выводим картинку 
	  	  $("#img_1").html(outImg);	
			   // ВЫВОД ЦЕНЫ
	  	  	outPrice = '<span  data-price="'+objTv[articul_model].price+'">'+objTv[articul_model].price+' <small>бел. руб.</small></span>'
			    // выводим цену выбранной модели 
	  	   $("#price_1").html(outPrice);
	  	    // ВЫВОД ОПИСАНИЯ
	  	   outDesc ='<span data-desc="'+objTv[articul_model].name+'">'+objTv[articul_model].desc+'</span>'; 	
  	    // выводим описание выбранной модели 
	  	     $("#desc_1").html(outDesc);
			    });

  			}
  			if(articul == "2"){
  			let outModel = objBi.map(({ name }) => name);
		    $('.model_1').empty();
				$.each(outModel, function(i, p) {
		    $('.model_1').append($('<option></option>').val(i).html(p));
		    });	
		       $('.model_1 option').on('click',function(){
			  	// переменная атрибут артикул по его значению  определяем модель товара в селекте
			  	articul_model = $(this).attr('value');
			  	console.log(articul_model);   
			  	 objImage = objBi[articul_model].img; 
	  	     console.log(objImage);			  	     
	  	    outImg ='<img style="height: 300px; margin-left:0;" data-img="'+objBi[articul_model].name+'" src="img/'+objImage+'">';
 				// выводим картинку 
	  	  $("#img_1").html(outImg);	
			   // ВЫВОД ЦЕНЫ
	  	  	outPrice = '<span  data-price="'+objBi[articul_model].price+'">'+objBi[articul_model].price+' <small>бел. руб.</small></span>'
			    // выводим цену выбранной модели 
	  	   $("#price_1").html(outPrice);
	  	   	 // ВЫВОД ОПИСАНИЯ
	  	   outDesc ='<span data-desc="'+objBi[articul_model].name+'">'+objBi[articul_model].desc+'</span>'; 	
  	    // выводим описание выбранной модели 
	  	     $("#desc_1").html(outDesc);
			    });
  			}
  						// outModel +='<option >'+ val.items[0].name + '</option>';	
  			  					// console.log(obj1.items);	
  			// выводим списoк mоделей 
  	   // $(".model").html(outModel);    
  		}); 
    }
  });  

});
};

// function choiceType(){
// 	// выбор моделей товара из типов товара
// var	articul = $(this).attr('data-art');
// console.log(articul);
// }


// $.getJSON('products.json', function(data){
//   var it = []; 
//   $.each(data, function(key, val){
//   	 it.push('<li id="' + key + '">' + val + '</li>'); 
//   });
//   $('<ul/>', {  	 	  
//     'class': 'my-new-list',
//     html: it.join('')
//   }).appendTo('body');
// });

 // по событии change в .type
  //  var outModel =$(this).(items.name.value);
  // $('.model').html(outModel);
 
// просит вывод через http
// $.getJSON( "products.js", function( json ) {
//   console.log( "JSON Data: " + json.name[0].name );
// });


// попробовать парсить?????????????????????????????????
// var jsonString = data;
 
// var out = JSON.parse ( jsonString );
 
// alert ( out.name );
// alert ( out.name[1].items[?]? );


 
    // var outDesc ='';
    // var outPrice ='';



 // $.getJSON('products.json', function(data) {
 //            for(var i=0;i<data.name.length;i++){
 //                $('#test').append('<tr><td>' + data.name[i].id + '</td><td>' + data.name[i].name + 
 //                '</td><td>' + data.name[i].desc + '</td><tr>');
 //            }
 //    });