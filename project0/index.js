function Gallery(images) {
    var html = $.map(images, function(image, index) {
        return '<div class="gallery-item">' +
            '<img class="gallery-image" src="' + image.src + '" alt="' + image.alt + '" />' +
            '<div class="gallery-caption">' + image.caption + '</div>' +
            '</div>';
    }).join('\n');

    $('.gallery').html(html);
}

var images = [
    {
        src: "img.jpg",
        alt: "Car engine",
        caption: "We can fix any car engine problem"
    },
    {
        src: "img.jpg",
        alt: "Car tire",
        caption: "We offer quality tire service and replacement"
    },
    {
        src: "img.jpg",
        alt: "Car paint",
        caption: "We can make your car look like new with our paint service"
    }
];

$(document).ready(function() {
    Gallery(images);
});

$(document).ready(
    () => {
        function init() {
            $('li.blade').each(function () {
                const vid = $(this).find('video')[0]
                var promise = vid.play()

                if (promise !== undefined) {
                    promise.then((promiseParam) => {
                        if (vid !== $('#hero-video')[0]) {
                            vid.pause()
                        }
                    }).catch(error => {
                        console.error("Autoplay was prevented:", error)
                    });
                }
            })


        }
        const enableCurrentVideo = () => {
            // $('li').css('background-color', '#fff')

            const middleOfTheScreen = window.innerHeight / 2;

            const currentBlade = $(
                'li.blade:in-viewport( ' +
                middleOfTheScreen +
                ', #viewport)')

            const currentVideo = currentBlade.find('video')[0]

            $('li.blade').each(function () {
                const vid = $(this).find('video')[0];
                if (
                    vid !== undefined &&
                    vid.playPromise !== undefined &&
                    vid !== currentVideo
                ) {
                    vid.playPromise.then(_ => {
                        vid.pause();
                    })
                }
            })

            currentVideo.playPromise = currentVideo.play()
            currentBlade.css('background-color', '#151E3F')

        }

        $(window).scroll(enableCurrentVideo)
        init()
        enableCurrentVideo()


    })