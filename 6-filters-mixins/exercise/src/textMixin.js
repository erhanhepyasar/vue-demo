export const textMixin = {
    computed: {
        reversedText() {
            return this.text2.split('').reverse().join('')
        },

        appendCount() {
            return this.text2 + this.text2.length
        }
    }
}