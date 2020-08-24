<template>
    <div>
        <h3>Quotes Added</h3>
        <div class="outer-bar">
            <div class="inner-bar" :style="{width: 10 * totalQuote + '%'}">
                {{ totalQuote }} / 10
            </div>
        </div>
    </div>
</template>

<script>
    import { quoteBus } from '../main';
    
    export default {
        data: function() {
            return {
                totalQuote: 1
            }
        },

        created() {
            quoteBus.$on('addQuoteClicked', () =>{
                this.totalQuote++;
            }),

            quoteBus.$on('quoteClicked', () =>{
                if(this.totalQuote > 1) {
                    this.totalQuote--;
                }
            })
        }
    }
</script>

<style scoped>
    .outer-bar {     
        border: 1px solid #eaeaea;
        border-radius: 3px;
        background-color: #f4f4f4;
    }

    .inner-bar {
        border: 1px solid #819daa;
        border-radius: 3px;
        background-color: #337bb8;
        color: white;
        text-align: center;
    }
    

</style>
