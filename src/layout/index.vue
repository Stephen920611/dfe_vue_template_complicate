<template>
    <!-- <div :class="classObj" class="app-wrapper">
          <div v-if="device==='mobile'&&sidebar.opened" class="drawer-bg" @click="handleClickOutside"/>
          <sidebar class="sidebar-container"/>
          <div :class="{hasTagsView:needTagsView}" class="main-container">
              <div :class="{'fixed-header':fixedHeader}">
                  <navbar/>
                  &lt;!&ndash;顶部菜单栏&ndash;&gt;
                  &lt;!&ndash;<head-navbar/>&ndash;&gt;
                  <tags-view v-if="needTagsView"/>
              </div>
              <app-main/>
              <right-panel v-if="showSettings">
                  <settings/>
              </right-panel>
          </div>
      </div>-->
    <!--修改后-->
    <div :class="classObj" class="app-wrapper">
        <div v-if="device==='mobile'&&sidebar.opened" class="drawer-bg" @click="handleClickOutside"/>
        <head-navbar/>
        <sidebar v-if="hasSidebar" class="sidebar-container" style="padding-top: 60px"/>
        <div :class="{hasTagsView:needTagsView}">
            <div :class="{'fixed-header':fixedHeader}" class="navbar-container"
                 :style="!hasSidebar ? 'margin-left:0;width:100%' : null">
                <navbar/>
                <tags-view v-if="needTagsView"/>
            </div>
        </div>
        <div id="main-container" v-scrollBar class="main-container" :style="!hasSidebar ? 'margin-left:0' : null">
            <app-main/>
            <right-panel v-if="showSettings">
                <settings/>
            </right-panel>
        </div>
    </div>
</template>

<script>
    import RightPanel from '@/components/RightPanel'
    import {AppMain, Navbar, Settings, Sidebar, TagsView, HeadNavbar} from './components'
    import ResizeMixin from './mixin/ResizeHandler'
    import {mapState, mapGetters} from 'vuex'

    export default {
        name: 'Layout',
        components: {
            AppMain,
            Navbar,
            RightPanel,
            Settings,
            Sidebar,
            TagsView,
            HeadNavbar
        },
        mixins: [ResizeMixin],
        data() {
            return {
                headVisible: this.$store.state.app.headVisible
            }
        },
        computed: {
            ...mapGetters([
                'hasSidebar'
            ]),
            ...mapState({
                sidebar: state => state.app.sidebar,
                device: state => state.app.device,
                showSettings: state => state.settings.showSettings,
                needTagsView: state => state.settings.tagsView,
                fixedHeader: state => state.settings.fixedHeader
            }),
            classObj() {
                return {
                    hideSidebar: !this.sidebar.opened,
                    openSidebar: this.sidebar.opened,
                    withoutAnimation: this.sidebar.withoutAnimation,
                    mobile: this.device === 'mobile'
                }
            }
        },
        watch: {
            // 监听路由变化，路由改变滚动条返回到顶部
            $route() {
                document.getElementById('main-container').scrollTop = 0
            }
        },
        methods: {
            handleClickOutside() {
                this.$store.dispatch('app/closeSideBar', {withoutAnimation: false})
            }
        }
    }
</script>

<style lang="scss" scoped type="text/scss">
    @import "~@/styles/mixin.scss";
    @import "~@/styles/variables.scss";

    #app {
        .hideSidebar { //侧边栏收起时
            &>>> .navbar-container {
                width: calc(100% - 54px); //侧边栏的状况决定navbar-container的宽度
            }
        }
        .openSidebar { //侧边栏打开时
            &>>> .navbar-container {
                width: calc(100% - 210px); //侧边栏的状况决定navbar-container的宽度
            }
        }
    }

    .app-wrapper {
        @include clearfix;
        position: relative;
        height: 100%;
        width: 100%;

        &.mobile.openSidebar {
            position: fixed;
            top: 0;
        }
    }

    .drawer-bg {
        background: #000;
        opacity: 0.3;
        width: 100%;
        top: 0;
        height: 100%;
        position: absolute;
        z-index: 999;
    }

    .fixed-header {
        position: fixed;
        top: 0;
        right: 0;
        z-index: 9;
        width: calc(100% - #{$sideBarWidth});
        transition: width 0.28s;
    }

    .hideSidebar .fixed-header {
        width: calc(100% - 54px)
    }

    .mobile .fixed-header {
        width: 100%;
    }
</style>
