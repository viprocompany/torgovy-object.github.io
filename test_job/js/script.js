$(document).ready(function(){

	LoadProducts();
});	
	function LoadProducts(){
  // загрузка товара на страницу
  $.getJSON( "products.json", function( data ) {
  	 obj= data;  	
  	 // obj1 = data[0];  	
  	 // obj2 = data[1];  	
  	 // obj3 = data[2];  
  	
    //  objSmart = data[0].items; 
    //  objTv = obj2.items; 
    //  objBi = obj3.items; 

  	outType ="";
    outDesc ="";
    outPrice = "";
  	// выводим типы товаров в селектах верхнего инпута
  	for (var key in obj){ 
  	outType+='<option data-art="'+key+'">'+data[key]['name']+'</option>';	    	
  	}
  	if(outType != undefined)
  	{   	
  	$(".type_1").html(outType); 		  	
  	}

 // выбор артикула типа товара для последующего выбора моделей товара по типу товара
 // $('.type option').on('click',choiceType);
 //  выводим по клику типы товаров
  $('.type_1 option').on('click',function(){
  	// переменная атрибут артикул по его значению  определяем группы товара в селекте
  		articul = $(this).attr('data-art');
    console.log(articul);   
			
//  вывод моделей товара в зависимости от типа товара  
    for (var key in data){ 
    	// переменная поля моделей товара
    		var outModel ="";
    		  outImg = "";     			 
  		$.each(data, function(key, val){	
  			// по атрибуту артикула в поле типа товара определяем тип товара и выводим модели этого типа
  			// if(articul == "0"){  	
  			// создаём массив названий моделей
		    let outModel = data[articul].items.map(({ name }) => name);
		    // заполняем селекты для моделей опциями значений моделей при клике на тип товара
		    $('.model_1').empty();
				$.each(outModel, function(i, p) {
		    $('.model_1').append($('<option></option>').val(i).html(p));
		    });
		       $('.model_1 option').on('click',function(){
			  	// переменная атрибут артикул по его значению  определяем модель товара в селекте
			   	articul_model = $(this).attr('value');
			  	console.log(articul_model);     
			  	     //  СОЗДАЁМ ОБЪЕКТ ДЛЯ ОБРАЩЕНИЯ К ИМЕНИ КАРТИНКИ
	  	     objImage = data[articul].items[articul_model].img; 
	  	       //  СОЗДАЁМ ОБЪЕКТ ДЛЯ ОБРАЩЕНИЯ К ИМЕНИ ТОВАРА
	  	     objName = data[articul].items[articul_model].name;
	  	     console.log(objImage);			  	     
	  	    outImg ='<img style="height: 300px; margin-left:0;" data-img="'+objName+'" src="img/'+objImage+'">';
 				// выводим картинку 
	  	  $("#img_1").html(outImg);	
	  	  // ОБЪЕКТ ДЛЯ ПОЛУЧЕНИЯ  ЦЕНЫ
	  	    objPrice = data[articul].items[articul_model].price;
	  	    // ВЫВОД ЦЕНЫ
	  	  	outPrice = '<span  data-price="'+objPrice+'">'+objPrice+' <small>бел. руб.</small></span>'
			    // выводим цену выбранной модели 
	  	   $("#price_1").html(outPrice);
	  	   	// ОБЪЕКТ ДЛЯ ПОЛУЧУНИЯ ОПИСАНИЯ ТОВАРА
	  	   	objDesc = data[articul].items[articul_model].desc;
	  	   // ВЫВОД ОПИСАНИЯ
	  	   	outDesc ='<span data-desc="'+objName+'">'+objDesc+'</span>'; 	
  	    // выводим описание выбранной модели 
	  	     $("#desc_1").html(outDesc);				  	
	      }); 
  			// }

  		// 	if(articul == "1"){
  		// 	let outModel = objTv.map(({ name }) => name);
		  //   $('.model_1').empty();
				// $.each(outModel, function(i, p) {
		  //   $('.model_1').append($('<option></option>').val(i).html(p));
		  //   });	
		  //       $('.model_1 option').on('click',function(){
			 //  	// переменная атрибут артикул по его значению  определяем модель товара в селекте
			 //  	articul_model = $(this).attr('value');
			 //  	console.log(articul_model);  
			 //  	 objImage = objTv[articul_model].img; 
	  	//      console.log(objImage);			  	     
	  	//     outImg ='<img style="height: 300px; margin-left:0;" data-img="'+objTv[articul_model].name+'" src="img/'+objImage+'">';
 			// 	// выводим картинку 
	  	//   $("#img_1").html(outImg);	
			 //   // ВЫВОД ЦЕНЫ
	  	//   	outPrice = '<span  data-price="'+objTv[articul_model].price+'">'+objTv[articul_model].price+' <small>бел. руб.</small></span>'
			 //    // выводим цену выбранной модели 
	  	//    $("#price_1").html(outPrice);
	  	//     // ВЫВОД ОПИСАНИЯ
	  	//    outDesc ='<span data-desc="'+objTv[articul_model].name+'">'+objTv[articul_model].desc+'</span>'; 	
  	 //    // выводим описание выбранной модели 
	  	//      $("#desc_1").html(outDesc);
			 //    });

  		// 	}
  		// 	if(articul == "2"){
  		// 	let outModel = objBi.map(({ name }) => name);
		  //   $('.model_1').empty();
				// $.each(outModel, function(i, p) {
		  //   $('.model_1').append($('<option></option>').val(i).html(p));
		  //   });	
		  //      $('.model_1 option').on('click',function(){
			 //  	// переменная атрибут артикул по его значению  определяем модель товара в селекте
			 //  	articul_model = $(this).attr('value');
			 //  	console.log(articul_model);   
			 //  	 objImage = objBi[articul_model].img; 
	  	//      console.log(objImage);			  	     
	  	//     outImg ='<img style="height: 300px; margin-left:0;" data-img="'+objBi[articul_model].name+'" src="img/'+objImage+'">';
 			// 	// выводим картинку 
	  	//   $("#img_1").html(outImg);	
			 //   // ВЫВОД ЦЕНЫ
	  	//   	outPrice = '<span  data-price="'+objBi[articul_model].price+'">'+objBi[articul_model].price+' <small>бел. руб.</small></span>'
			 //    // выводим цену выбранной модели 
	  	//    $("#price_1").html(outPrice);
	  	//    	 // ВЫВОД ОПИСАНИЯ
	  	//    outDesc ='<span data-desc="'+objBi[articul_model].name+'">'+objBi[articul_model].desc+'</span>'; 	
  	 //    // выводим описание выбранной модели 
	  	//      $("#desc_1").html(outDesc);
			 //    });
  		// 	}
     
  		}); 
    }
  });  

});
};
