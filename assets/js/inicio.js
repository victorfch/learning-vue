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

