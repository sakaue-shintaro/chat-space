$(function(){
  function buildHTML(message){
    if (message.image) {
      var html =
      `<div class="message">
        <div class="message__upper-message">
          <div class="message__upper-message__user-name">
            ${message.user_name}
      </div>
        <div class="message__upper-message__date">
          ${message.date}
        </div>
      </div>
          <div class="message__lower-message">
            <p class="lower-message__content">
              ${message.text}
              ${message.image}
          </p>
        </div>
      </div>`;
    }
    else {
      var html =
      `<div class="message">
        <div class="message__upper-message">
          <div class="message__upper-message__user-name">
            ${message.user_name}
        </div>
        <div class="message__upper-message__date">
          ${message.date}
        </div>
        </div>
        <div class="message__lower-message">
          <p class="lower-message__content">
          ${message.text}
          </p>
        </div>
      </div>`;
    }
    console.log(message)
    return html
  }
  $('#new_message').on('submit',function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url:url,
      type:'POST',
      data:formData,
      dataType:'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.main-chat__main-content__message-space').append(html);
      $('.main-chat__main-content__message-space').animate({ scrollTop: $('.main-chat__main-content__message-space')[0].scrollHeight});
      $('#new_message')[0].reset();
      $('.send-btn').prop('disabled', false);

    })
    .fail(function(){
      alert('error');
    })
  })
})