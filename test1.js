document.addEventListener('DOMContentLoaded', function() {
    var Tabs = Vue.extend({
        template: '<div class="tabar" :style="style.tabs">' +
                      '<template v-for="item in items" track-by="_uid">'+
                          '<a class="tab {{items.length-1 == $index ? \'tab-last\' : \'\'}}">{{ $index }} - {{ item.message }}</a>'+ 
                      '</template>'+
                      '<input type="checkbox" v-model="t"/>'+
                  '<div>'
    });
    
//     Vue.component('example', Tabs);

    eee = new Tabs({
        el: '#eee',
        replace: true,
        data: function() {
            return {
                items: [{
                    _uid: '001',
                    message: '大苹果'
                }, {
                    _uid: '002',
                    message: '大橘子'
                }],
                style : {
                    tabs : {
                        width: '500px'
                    }
                },
                id: 'ddd',
                tmp: true
            }

        },
        method : {
            id : (function () {
                var count = 0;

                return function () {
                    return 'x-' + count++;
                };

            })()
        },
        computed: {
            t: {
                get: function() {
                    return this.tmp;
                },
                set: function(value) {
                    this.tmp = value;
                }
            }
        }
    });
    /*=================================================*/
}, false);
