const PhotoAlbum = {
	data(){
    return{
		index:-1,
        photo:[
            {
                title: 'Джереми Скотт и Ирина Шейк',
                photo:'5.jpg',
                alt: 'Джереми Скотт и Ирина Шейк',
                comment:'Джереми Скотт и Ирина Шей'
            },{
                title: 'Джастин в Drew и Хейли Бибер',
                photo:'6.jpg',
                alt: 'Джастин в Drew и Хейли Бибер',
                comment:'Джастин в Drew и Хейли Бибер'   
            },{
                title: 'Зои Кравиц',
                photo:'7.jpg',
                alt: 'Зои Кравиц',
                comment:'Зои Кравиц' 
            },{
                title: 'Джиджи Хадид',
                photo:'8.jpg',
                alt: 'Джиджи Хадид',
                comment:'Джиджи Хадид' 
            },{
                title: 'Кендалл Дженнер',
                photo:'9.jpg',
                alt: 'Кендалл Дженнер',
                comment:'Кендалл Дженнер' 
            },{
                title: 'Кайя Гербер',
                photo:'10.jpg',
                alt: 'Кайя Гербер',
                comment:'Кайя Гербер' 
            },{
                title: 'Мэйси Уильямс',
                photo:'11.jpg',
                alt: 'Мэйси Уильямс',
                comment:'Мэйси Уильямс' 
            },{
                title: 'Эмили Блант',
                photo:'12.jpg',
                alt: 'Эмили Блант',
                comment:'Эмили Блант' 
            },{
                title: 'Lil Nas X',
                photo:'13.jpg',
                alt: 'Lil Nas X',
                comment:'Lil Nas X' 
            },{
                title: 'Хелен Лисичан и Фаррелл Уильямс',
                photo:'14.jpg',
                alt: 'Хелен Лисичан и Фаррелл Уильямс',
                comment:'Хелен Лисичан и Фаррелл Уильямс' 
            },{
                title: 'Кара Делевинь',
                photo:'15.jpg',
                alt: 'Кара Делевинь',
                comment:'Кара Делевинь' 
            },{
                title: 'Трой Сиван',
                photo:'16.jpg',
                alt: 'Трой Сиван',
                comment:'Трой Сиван' 
            },{
                title: 'Граймс',
                photo:'17.jpg',
                alt: 'Граймс',
                comment:'Граймс' 
            },{
                title: 'Лили Рейнхарт',
                photo:'18.jpg',
                alt: 'Лили Рейнхарт',
                comment:'Лили Рейнхарт' 
            },{
                title: 'Тесса Томпсон',
                photo:'19.jpg',
                alt: 'Тесса Томпсон',
                comment:'Тесса Томпсон' 
            },{
                title: 'Наталия Брайант',
                photo:'20.jpg',
                alt: 'Наталия Брайант',
                comment:'Наталия Брайант' 
            },{
                title: 'Кристин Фросет',
                photo:'21.jpg',
                alt: 'Кристин Фросет',
                comment:'Кристин Фросет' 
            },{
                title: 'Кид Кади',
                photo:'22.jpg',
                alt: 'Кид Кади',
                comment:'Кид Кади' 
            },{
                title: 'Виттория Черетти',
                photo:'23.jpg',
                alt: 'Виттория Черетти',
                comment:'Виттория Черетти' 
            },{
                title: 'Уинни Харлоу',
                photo:'24.jpg',
                alt: 'Уинни Харлоу',
                comment:'Уинни Харлоу' 
            },{
                title: 'Эрика Баду',
                photo:'25.jpg',
                alt: 'Эрика Баду',
                comment:'Эрика Баду' 
            }
            
        ]
    }
}	
}
const app = Vue.createApp(PhotoAlbum)

app.component('album-item',{
	props:['packages'],
	emits: ["click"],
	 template: `
        <span class="album-item" @click="$emit('click')">
            <img :src="package.photo" :alt="package.alt">
        </span>
    `,
	data(){
		return{
			isOpened:false
		}
	}
})
		

app.component('img-popus',{
	props:['photos', 'index'],
	emits["close"],
	 template:
    '
		<teleport to ="body">
			<div class="img_popus" @click.self="$emit('close')">
				<button type="button" class ="to_left"
						@click="previos">&#8249;</button>
				<div class="content">
					<img :src="photo[id].photo" :alt="photo.alt">
					<div class="text">
						<h2>{{photos[id],title}}</h2>
						<p>{{photo[id].comment}}</p>
					</div>
				</div>
					<button type="button" class="to_right"
							@click="next">&#8250;</button>
			</div>
		</teleport>
'
data(){
	return{
		id:this.$props.intex
	}
},
	metods: {
	previous: function(){
		if(!this.id){
			this.id=this.$props.date.length-1
		} else{
			this.id--
		}
	},
	next:function(){
		if(this.id === this.$props.data.length -1){
			this.id=0
		}else{
			this.id++
		}
	}
}	
})
app.mount("#app");
       