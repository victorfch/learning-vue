var app = new Vue({
  el: '#app',
  data: {
    message: 'Hola Vue!'
  }
});

var app2 = new Vue({
  el: '#app2',
  data: {
    message: 'Cargada esta página el ' + new Date().toLocaleString()
  }
});

var app3 = new Vue({
  el: '#app3',
  data: {
    seen: true
  }
});

var app4 = new Vue({
  el: '#app4',
  data: {
    alumnos: [
      { text: "Frank" },
      { text: "Marta" },
      { text: "Guille" },
    ]
  }
});

var app5 = new Vue({
  el: '#app5',
  data: {
    message: 'Hola Vue.js!',
    isShow: true
  },
  methods: {
    hideOrShow: function () {
      this.isShow = !this.isShow
    }
  }
})

