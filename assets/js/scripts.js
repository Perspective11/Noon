jQuery(document).ready(function($) {
    // Stuff to do as soon as the DOM is ready. Use $() w/o colliding with other libs
    // $( "#course-content" ).accordion({
    //   collapsible: true
    // });

    $('[data-toggle="tooltip"]').tooltip();

    $('.questions-list.list-group > .list-group-item').on('click', function(event) {
        $(this).parent().parent().hide().siblings().hide();
        $('.question-thread.row').removeClass('hidden').show();
    });
    $('.discussion-back').on('click', function(event) {
        $('.question-thread.row').hide().siblings().show();
    });

    $('body').on('click.collapse-next.data-api', '[data-toggle=collapse-next]', function(e) {
        var $target = $(this).parent().next()
        $target.collapse('toggle')
    })
});
