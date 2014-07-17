$(document).ready(function() {

	var select_type;

	$('.cp-news-tab').click(function() {
		$('.cp-news-tab').toggleClass('active');
		var type = $(this).attr('id');
		getNews(type);
	});

	getNews('L');

	function getNews(select_type) {
	
		$('.news-listing').html('');
		var url = "https://spreadsheets.google.com/feeds/list/1JTsDRpE-7dhNB91LliHZfw6dwXc4YgBi1rjIj4UBuHc/od6/public/values?alt=json";             
	         
	    news_data = new Array();

	    $.getJSON(url, function (data) { 
	        $.each(data.feed.entry, function(i,entry) { 
	          
		        var date = entry.gsx$date.$t;
		        var title = entry.gsx$title.$t;
		        var description = entry.gsx$description.$t;
		        var type = entry.gsx$type.$t;

		        date = moment(date).format();

		        

		        if(type == select_type)
		        {
		    		news_data.push({	'news_date':date,
		    							'news_description':description,
		    							'news_title':title
		        	});
			    }
	    	});           
	    }).done(function() { 
	       
	        if(news_data.length > 0)
	        {
	        	news_list = '';
	        	//Sort based on sort number
	        	news_data = _.sortBy(news_data,function(sort_order) { return sort_order.news_date; });

	        	news_data.reverse();

	        	for(var i = 0; i < news_data.length; i++) {

	        		var news= 	"<div class='row'>" +
									"<div class='col-sm-2'>" +
							        	"<div class='cp-calendar'>" +
							        		"<div class='cp-calendar-year'>"+ moment(news_data[i]['news_date']).format('YYYY')+"</div>" +
	    									"<div class='cp-calendar-month'>"+ moment(news_data[i]['news_date']).format('DD')+' '+moment(news_data[i]['news_date']).format('MMM')+"</div>" +
	    								"</div>" +
	    							"</div>" +
						          	"<div class='col-sm-10'>" +
						          		"<div class='thumbnail'>" +
						          			"<h2>"+news_data[i]['news_title']+"</h2>" +
						            		"<p class='lead'>"+news_data[i]['news_description']+"</p>" +
										"</div>" +
									"</div>" +
								"</div>";
												;


	        		news_list = news_list.concat(news);
	        	}
	        }

        	//Load news Info
        	$('.news-listing').html(news_list);

        	if(news_data.length == 0)
		    {
		    	$('.news-listing').html("<div class='alert alert-default fade in'>No news archives found.</div>");
		    } 

		}); 

	     

	}
});