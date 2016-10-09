document.addEventListener('DOMContentLoaded', function() {
    var Example = Vue.extend({
        template: '<div>a: {{ a }}, b: {{ b }}</div>',
        data: function() {
            return {
                a : 1,
                b : 2
            }
        }
    });
    Vue.component('example', Example);

    eee = new Example({el:'#eee'})

}, false);
