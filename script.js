var app = new Vue({
    el: '#app',
    data: {
    characters: [
        {
            char_id: '',
            name: '',
            birthday: '',
            img: '',
            nickname: '',
            status: '',
            occupation: []
        }
    ],
    selectedIndex: 0
    },
    mounted: function(){
        this.get_characters()
    },
    methods: {
        get_characters: function(){
            axios.get('https://www.breakingbadapi.com/api/characters/')
            .then(function (response){
                console.log(response)
            this.app.characters = response.data;
            console.log(response.data)
            })
        },
        switchView: function(event, selectedIndex) {
        console.log(event, selectedIndex);
        this.selectedIndex = selectedIndex;
        }
    }
})