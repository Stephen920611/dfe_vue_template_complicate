<template>
    <div class="dashboard-container">
        <component :is="currentRole"/>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import adminDashboard from './admin'
    import editorDashboard from './editor'

    export default {
        name: 'Dashboard',
        components: {adminDashboard, editorDashboard},
        data() {
            return {
                currentRole: 'editorDashboard'
            }
        },
        computed: {
            ...mapGetters([
                'roles'
            ])
        },
        created() {
            //TODO 暂时都放成editor页面
//            if (!this.roles.includes('admin')) {
//                this.currentRole = 'editorDashboard'
//            }
            this.currentRole = 'editorDashboard'
        }
    }
</script>
