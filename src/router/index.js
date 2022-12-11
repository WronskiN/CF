import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage'
import ThankYouPage from '@/views/ThankYou'

const routes = [
    {
        path: '/',
        name: HomePage,
        component: HomePage
    },
    {
        path: '/thank-you',
        name: 'ThankYou',
        component: ThankYouPage,
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router