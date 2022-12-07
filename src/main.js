import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import BackButton from './components/UI/BackButton.vue'
import ContinueButton from './components/UI/ContinueButton.vue'
import AgeOption from './components/UI/AgeOption.vue'
import BaseInput from './components/UI/BaseInput.vue'
import BaseOptions from './components/UI/BaseOptions.vue'


const app = createApp(App);

app.component('back-button', BackButton);
app.component('continue-button', ContinueButton);
app.component('age-option', AgeOption);
app.component('base-input', BaseInput);
app.component('base-options', BaseOptions);

app.use(router).mount('#app');