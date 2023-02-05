<template>
    <div class="min-h-full bg-gray-200 flex">
        <Sidebar :class="{'-ml-[200px]':!sidebarOpened}"/>
        <div class="flex-1">
            <Navbar @toggle-sidebar="toggleSidebar"></Navbar>
            <main class="p-6">
                <router-view></router-view>
            </main>
        </div>
    </div>
</template>

<script>
import Sidebar from "./Sidebar.vue";
export default {
    name: "AppLayout",
    components: {Sidebar}
}
</script>

<style scoped>

</style>
