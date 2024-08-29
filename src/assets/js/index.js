import { createApp } from "vue";
import Nav from "@/components/Nav.vue";
import TaskContainer from '@/components/TaskContainer.vue';

createApp(Nav).mount("#header");
createApp(TaskContainer).mount("#app");