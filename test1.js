Vue.component('my-component', {
        template: '<div>{{msg}} {{privateMsg}}</div>',
        props: {
            msg: String
        },
        data: function() {
            return {
                privateMsg: 'component!'
            }
        }
    })

document.addEventListener('DOMContentLoaded', function() {
    
}, false);
