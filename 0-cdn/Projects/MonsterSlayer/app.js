new Vue({
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameStarted: false,
        defaultScore: 10,
        logs: [],
    },
    watch: {


    },
    computed: {

    },

    methods: {
        startGame: function() {
            this.gameStarted = true
            this.playerHealth = 100
            this.monsterHealth = 100
            this.logs = []
        },

        
        attack: function() {                 
            this.yourAttack(1, 10)            
            if(this.monsterHealth < 100 && this.monsterHealth >= 0) {
                this.monsterAttack()
            }            
        },
        
        specialAttack: function() {            
            this.yourAttack(11, 20)                        
            if(this.monsterHealth < 100 && this.monsterHealth >= 0) {
                this.monsterAttack()
            }            
        },
        
        giveUp: function() {
            this.gameStarted = false
        },

        heal: function() {            
            if (this.playerHealth >= 100 - this.defaultScore) {
                this.playerHealth = 100
            } else {
                this.playerHealth += this.defaultScore               
            }
            this.logs.unshift({
                isPlayer: true,
                text: 'player heals himself for ' + this.defaultScore
            })
            this.monsterAttack()
        },
        
        yourAttack : function (min, max) {
            var damage = Math.max(Math.floor(Math.random() * max + min), min)
            this.monsterHealth -= damage
            this.logs.unshift({
                isPlayer: true,
                text: 'player hits monster for ' + damage
            })
            this.checkStatus()       
        },
        
        monsterAttack: function () {
            var damage = Math.floor(Math.random() * this.defaultScore + 4)
            this.playerHealth -= damage
            this.logs.unshift({
                isPlayer: false,
                text: 'monster hits player for ' + damage
            })
            this.checkStatus()
        },
        
        checkStatus: function() {                  
            if(this.monsterHealth > 0 && this.playerHealth > 0) {
                return;
            }
            
            this.gameStarted = false

            // Confirm dialog
            var message = ' !New Game?'            
            if(this.monsterHealth <= 0) {            
                message = 'You win' + message
            }else if(this.playerHealth <= 0) {
                message = 'Monster wins' + message
            }

            if(confirm(message)){ // OK for new game
                this.startGame()        
            } 
        }        
    }
})
