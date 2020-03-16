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

var app6 = new Vue({
  el: '#app6',
  data: {
    title: 'Hola Usuario!',
    message: 'Nombre'
  }
})

//Templates
//hijo
Vue.component('todo-item', {
  props: ['todo'], //propiedad pasada del padre al hijo
  template: '<li>{{ todo.texto }}</li>'
})
//padre
var app7 = new Vue({
  el: '#app7',
  data: {
    listaCompra: [
      { id: 0, texto: 'Vegetales' },
      { id: 1, texto: 'Queso' },
      { id: 2, texto: 'Cualquier otra cosa que se supone que los humanos coman' }
    ]
  }
})

