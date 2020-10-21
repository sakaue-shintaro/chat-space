$('.message__lower-message__content').each(function() {
    //http,httpsなどで始まる文字列を自動リンクにする
    $(this).html($(this).html().replace(/((http|https|ftp):\/\/[\w?=&.\/-;#~%-]+(?![\w\s?&.\/;#~%"=-]*>))/g, '<a href="$1>$1</a>'));
})