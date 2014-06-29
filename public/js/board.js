$(document).on('click','.show-desc',function(){
          var desc_id = $(this).attr('id');
          var current_status = $(this).attr('status');
          if(current_status == 'close') {
            $('div .hide-desc.'+desc_id).show('slow');
            $(this).attr('status','open');
            $(this).find('.btn-text').html('Read Less');
            $(this).find('i').removeClass('fa-arrow-down');
            $(this).find('i').addClass('fa-arrow-up');

          }
          else
          {
            $('div .hide-desc.'+desc_id).hide('slow');
            $(this).attr('status','close');
            $(this).find('.btn-text').html('Read More');
             $(this).find('i').addClass('fa-arrow-down');
            $(this).find('i').removeClass('fa-arrow-up');
          }      
   });