<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Directives</h1>
                <p v-text="'hello'">Some text</p>
                <p v-html="'<strong>hello</strong>'">Some strong text</p>
            </div>
            <hr>
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Custom Directives</h1>
                <p v-highlight="'red'">Color this</p>
                <p v-highlight:bck.delayed="'red'">Color this</p>
                <p v-local-highlight:bck.delayed.blink="'yellow'">Color this from local directive with multiple modifiers</p>
                <p v-local-highlight:bck.delayed.blink="{mainColor: 'pink', secondColor: 'purple', delay: 500}">
                    Color this from local directive with multiple modifiers and passwing more complex values to directives</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        directives: {
            'local-highlight': {
                  bind(el, binding, vnode) {
                    var delay = 0;
                    
                    if (binding.modifiers['delayed']) {
                        delay = 2000;
                    }

                    if(binding.modifiers['blink']) {
                        let mainColor = binding.value.mainColor;
                        let secondColor = binding.value.secondColor;
                        let currentColor = mainColor;
                        setTimeout(()=> {
                            setInterval(() => {
                                // currentColor == secondColor ? currentColor = mainColor : currentColor = secondColor;
                                currentColor = (currentColor == secondColor) ? mainColor : secondColor;
                                if (binding.arg == 'bck') {
                                    el.style.backgroundColor = currentColor;
                                } else {
                                    el.style.color = currentColor;
                                }
                            }, binding.value.delay);
                        })
                    } else {
                        setTimeout(() => {
                            if (binding.arg == 'bck') {
                                el.style.backgroundColor = binding.value.mainColor;
                            } else {
                                el.style.color = binding.value.mainColor;
                            }
                        }, delay);
                    }

                }
            }
        }
    }
</script>

<style>

</style>
