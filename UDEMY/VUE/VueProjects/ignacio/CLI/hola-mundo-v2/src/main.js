import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

// $( document ).ready(function() {
//     $('html, body').animate({ scrollTop: $(document).height() }, 'slow');
// });

setTimeout(() => {
    window.scrollTo(0,document.body.scrollHeight);
}, 500);