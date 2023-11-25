import { createRouter, createWebHistory } from 'vue-router'
import SearchPage from "../components/SearchPage.vue"
import UserDocumentsPage from "../components/UserDocumentsPage.vue"
import DocumentPage from "../components/DocumentPage.vue"
import UploadDocumentComponent from "../components/UploadDocumentComponent.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: SearchPage
    },
    {
      path: '/user/0',
      name: 'user',
      component: UserDocumentsPage
    },
    {
      path: '/upload',
      name: 'upload',
      component: UploadDocumentComponent
    },
    {
      path: '/document/:id',
      name: 'document',
      component: DocumentPage,
      props:true
    }
  ]
})

export default router
