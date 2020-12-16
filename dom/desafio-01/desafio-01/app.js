new Vue({
	el:'#desafio',
	data: {
		nome: 'Matheus',
        idade: '18',
        img: 'https://www.vovopalmirinha.com.br/wp-content/uploads/2016/06/pudim-1.jpg'
	},
	methods: {
			numeroAleatorio: function (){

                return Math.random()
            }
		}
	
})