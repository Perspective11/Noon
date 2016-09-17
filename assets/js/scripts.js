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
    newBarChart();
    newChart();
});

function newBarChart() {
    var ctx = document.getElementById("serverChart");
    var serverChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
            datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}

function newChart()
{
    var ctx = document.getElementById("usersChart");
    var usersChart = new Chart(ctx, {
    type: 'line',
    data: {
            labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
            datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
    options: {
        legend: {
            display: true,
            labels: {
                fontColor: 'rgb(255, 99, 132)'
            }
        }
    }
});
}