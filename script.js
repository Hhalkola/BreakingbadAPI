var app = new Vue({
    el: '#app',
    data: {
    //Array of characters
    characters: [
        {
            char_id: '',
            name: '',
            birthday: '',
            img: '',
            nickname: '',
            status: '',
            portrayed:'',
            occupation: []
        }
    ],
    //Helper to be used with combobox
    selectedIndex: 0
    },
    //Show data when loaded
    mounted: function(){
        this.get_characters()
    },
    methods: {
        //Api call
        get_characters: function(){
            axios.get('https://www.breakingbadapi.com/api/characters/')
            .then(function (response){
                //For dev purpose console.log to see what you get from url
                console.log(response)
            //Read data to characters
            this.app.characters = response.data;
            })
            //If error occurs
            .catch(function (error) {
                app.answer = 'Error! Could not reach the API. ' + error
              })
        },
        //Helper function to be called when selection changes in combobox
        switchView: function(event, selectedIndex) {
        console.log(event, selectedIndex);
        this.selectedIndex = selectedIndex;
        }
    }
})