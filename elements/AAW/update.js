function(instance, properties, context) {

   

    if (properties.element_id == "This") {
        var detect_id = instance.data.id
    } else {
        var detect_id = properties.element_id
    };


    inView.threshold(properties.threshold);

    inView.offset({
        top: properties.top,
        right: properties.right,
        bottom: properties.bottom,
        left: properties.left
    });




    $(document).ready(function() {

        instance.publishState('is_visible', inView.is(document.querySelector('#' + detect_id)));

        inView('#' + detect_id)
            .on('enter', el => {
                instance.triggerEvent('enters_viewport', function(err) {});
                instance.publishState('is_visible', inView.is(document.querySelector('#' + detect_id)));
            })
            .on('exit', el => {
                instance.triggerEvent('exits_viewport', function(err) {});
                instance.publishState('is_visible', inView.is(document.querySelector('#' + detect_id)));
            });


    });




}