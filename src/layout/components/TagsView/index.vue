<template>
    <div id="tags-view-container" class="tags-view-container">
        <scroll-pane ref="scrollPane" class="tags-view-wrapper">
            <!--原有tags 超出滚动条滚动-->
            <!-- <router-link
                                 v-for="tag in visitedViews"
                                 ref="tag"
                                 :key="tag.path"
                                 :class="isActive(tag)?'active':''"
                                 :to="{ path: tag.path, query: tag.query, fullPath: tag.fullPath }"
                                 tag="span"
                                 class="tags-view-item"
                                 @click.middle.native="!isAffix(tag)?closeSelectedTag(tag):''"
                                 @contextmenu.prevent.native="openMenu(tag,$event)"
                               >
                                 {{ generateTitle(tag.title) }}
                                 <span v-if="!isAffix(tag)" class="el-icon-close" @click.prevent.stop="closeSelectedTag(tag)" />
                               </router-link>-->

            <!--超出 显示左右按钮滚动-->
            <el-tabs type="card" class="tabs-container">
                <el-tab-pane
                        v-for="tag in visitedViews"
                        :key="tag.path"
                        tag="span"
                >
                    <router-link
                            slot="label"
                            ref="tag"
                            :key="tag.path"
                            :class="isActive(tag)?'active':''"
                            :to="{ path: tag.path, query: tag.query, fullPath: tag.fullPath }"
                            class="tags-view-item"
                            tag="span"
                            @click.middle.native="!isAffix(tag)?closeSelectedTag(tag):''"
                            @contextmenu.prevent.native="openMenu(tag,$event)"
                            @click.native="isShowSlideBar(tag)"
                    >
                        {{ generateTitle(tag.title) }}
                        <span v-if="!isAffix(tag)" class="el-icon-close" @click.prevent.stop="closeSelectedTag(tag)"/>
                    </router-link>
                </el-tab-pane>

            </el-tabs>
        </scroll-pane>

        <div
                class="close-contextmenu"
                @click.prevent.stop="openAllMenu"
        >
            操作
        </div>
        <ul v-show="visible" :style="{left:left+'px',top:top+'px'}" class="contextmenu">
            <li @click="refreshSelectedTag(selectedTag)">{{ $t('tagsView.refresh') }}</li>
            <li v-if="!isAffix(selectedTag)" @click="closeSelectedTag(selectedTag)">{{ $t('tagsView.close') }}</li>
            <li @click="closeOthersTags">{{ $t('tagsView.closeOthers') }}</li>
            <li @click="closeAllTags(selectedTag)">{{ $t('tagsView.closeAll') }}</li>
        </ul>
    </div>
</template>

<script>
    import ScrollPane from './ScrollPane'
    import {generateTitle} from '@/utils/i18n'
    import path from 'path'

    export default {
        components: {ScrollPane},
        data() {
            return {
                visible: false,
                top: 0,
                left: 0,
                selectedTag: {},
                affixTags: []
            }
        },
        computed: {
            visitedViews() {
                return this.$store.state.tagsView.visitedViews
            },
            routes() {
                return this.$store.state.permission.routes
            }
        },
        watch: {
            $route() {
                this.addTags()
                this.moveToCurrentTag()
            },
            visible(value) {
                if (value) {
                    document.body.addEventListener('click', this.closeMenu)
                } else {
                    document.body.removeEventListener('click', this.closeMenu)
                }
            }
        },
        mounted() {
            this.initTags()
            this.addTags()
        },
        methods: {
            // 国际化标题
            generateTitle, // generateTitle by vue-i18n

            /**
             * 是否显示侧边栏
             * @param tag {Object} 点击tag的数据
             */
            isShowSlideBar(tag) {
                const {dispatch} = this.$store;
                // 是否显示侧边栏
                if (!(tag.hasOwnProperty('meta') && tag.meta.hasOwnProperty('isShowSlideBar') && tag.meta.isShowSlideBar)) {
                    dispatch({
                        type: 'app/updateSidebar', // 调用action
                        sidebarData: null, // 侧边栏的数据
                        hasSidebar: false, // 是否显示侧边栏
                        sidebarParents: null// 点击的顶部标题的数据
                    })
                }
            },
            // 当前页是否显示
            isActive(route) {
                return route.path === this.$route.path
            },
            // 是否有关闭标签页的功能
            isAffix(tag) {
                return tag.meta && tag.meta.affix
            },
            filterAffixTags(routes, basePath = '/') {
                let tags = []
                routes.forEach(route => {
                    if (route.meta && route.meta.affix) {
                        const tagPath = path.resolve(basePath, route.path)
                        tags.push({
                            fullPath: tagPath,
                            path: tagPath,
                            name: route.name,
                            meta: {...route.meta}
                        })
                    }
                    if (route.children) {
                        const tempTags = this.filterAffixTags(route.children, route.path)
                        if (tempTags.length >= 1) {
                            tags = [...tags, ...tempTags]
                        }
                    }
                })
                return tags
            },
            // 初始化标签
            initTags() {
                const affixTags = this.affixTags = this.filterAffixTags(this.routes)
                for (const tag of affixTags) {
                    // Must have tag name
                    if (tag.name) {
                        this.$store.dispatch('tagsView/addVisitedView', tag)
                    }
                }
            },
            //添加tags标签
            addTags() {
                const {name} = this.$route
                if (name) {
                    this.$store.dispatch('tagsView/addView', this.$route)
                }
                return false
            },
            //路由改变，移动到当前界面
            moveToCurrentTag() {
                const tags = this.$refs.tag
                this.$nextTick(() => {
                    for (const tag of tags) {
                        if (tag.to.path === this.$route.path) {
                            this.$refs.scrollPane.moveToTarget(tag)
                            // 当查询不同时，则更新
                            if (tag.to.fullPath !== this.$route.fullPath) {
                                this.$store.dispatch('tagsView/updateVisitedView', this.$route)
                            }
                            break
                        }
                    }
                })
            },
            // 选项卡-刷新
            refreshSelectedTag(view) {
                this.$store.dispatch('tagsView/delCachedView', view).then(() => {
                    const {fullPath} = view
                    this.$nextTick(() => {
                        this.$router.replace({
                            path: '/redirect' + fullPath
                        })
                    })
                })
            },
            // 关闭该选项卡
            closeSelectedTag(view) {
                this.$store.dispatch('tagsView/delView', view).then(({visitedViews}) => {
                    if (this.isActive(view)) {
                        this.toLastView(visitedViews, view)
                    }
                })
            },
            // 选项卡-关闭其他
            closeOthersTags() {
                this.$router.push(this.selectedTag)
                this.$store.dispatch('tagsView/delOthersViews', this.selectedTag).then(() => {
                    this.moveToCurrentTag()
                })
            },
            // 选项卡-关闭全部
            closeAllTags(view) {
                this.$store.dispatch('tagsView/delAllViews').then(({visitedViews}) => {
                    if (this.affixTags.some(tag => tag.path === view.path)) {
                        return
                    }
                    this.toLastView(visitedViews, view)
                })
            },
            //关闭全部后，跳转到固定路由或者首页
            toLastView(visitedViews, view) {
                const latestView = visitedViews.slice(-1)[0]
                if (latestView) {
                    this.$router.push(latestView.fullPath)
                } else {
                    // 现在默认是如果没有标签视图，则重定向到主页，
                    // 您可以根据需要进行调整。
                    if (view.name === 'Dashboard') {
                        // to reload home page
                        this.$router.replace({path: '/redirect' + view.fullPath})
                    } else {
                        this.$router.push('/')
                    }
                }
            },

            // 右击打开关闭选项
            openMenu(tag, e) {
                const menuMinWidth = 105
                const offsetLeft = this.$el.getBoundingClientRect().left // container margin left
                const offsetWidth = this.$el.offsetWidth // container width
                const maxLeft = offsetWidth - menuMinWidth // left boundary
                const left = e.clientX - offsetLeft + 15 // 15: margin right

                if (left > maxLeft) {
                    this.left = maxLeft
                } else {
                    this.left = left
                }

                //      this.top = e.clientY
                // 点击时，位于视窗的高度，减去顶部导航60
                this.top = e.clientY - 60
                this.visible = true
                this.selectedTag = tag
            },
            // 关闭选项
            closeMenu() {
                this.visible = false
            },
            // 点击右侧全部菜单，打开选项
            openAllMenu(e) {
                const self = this
                const tags = this.$refs.tag
                // 记录当前路由
                for (const tag of this.visitedViews) {
                    if (tag.path === this.$route.path) {
                        self.selectedTag = tag
                        break
                    }
                }
                const menuMinWidth = 105
                const offsetLeft = this.$el.getBoundingClientRect().left // container margin left
                const offsetWidth = this.$el.offsetWidth // container width
                const maxLeft = offsetWidth - menuMinWidth + 15 // left boundary
                const left = e.clientX - offsetLeft + 15 // 15: margin right
                if (left > maxLeft) {
                    this.left = maxLeft
                } else {
                    this.left = left
                }
                // this.top = e.clientY
                // 点击时，位于视窗的高度，减去顶部导航60
                this.top = 90
                this.visible = true
            }
        }
    }
</script>

<style lang="scss" scoped type="text/scss">
    .tags-view-container {
        /*position: fixed;*/
        /*z-index: 1000;*/
        /*top: 110px;*/
        height: 34px;
        width: 100%;
        background: #fff;
        border-bottom: 1px solid #d8dce5;
        box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .12), 0 0 3px 0 rgba(0, 0, 0, .04);
        display: flex;
        justify-content: space-between;
        .tags-view-wrapper {
            .tags-view-item {
                display: inline-block;
                position: relative;
                cursor: pointer;
                height: 26px;
                line-height: 26px;
                border: 1px solid #d8dce5;
                color: #495060;
                background: #fff;
                padding: 0 8px;
                font-size: 12px;
                margin-left: 5px;
                margin-top: 4px;
                &:first-of-type {
                    margin-left: 15px;
                }
                &:last-of-type {
                    margin-right: 15px;
                }
                &.active {
                    background-color: #42b983;
                    color: #fff;
                    border-color: #42b983;
                    &::before {
                        content: '';
                        background: #fff;
                        display: inline-block;
                        width: 8px;
                        height: 8px;
                        border-radius: 50%;
                        position: relative;
                        margin-right: 2px;
                    }
                }
            }
        }
        .close-contextmenu {
            font-size: 12px;
            width: 100px;
            line-height: 34px;
            text-align: center;
            /*border-left: 1px solid #d8dce5;*/
            box-shadow: -1px 0px 2px 0 rgba(0, 0, 0, 0.12);
            &:hover {
                cursor: pointer;
            }
        }
        .contextmenu {
            margin: 0;
            background: #fff;
            z-index: 3000;
            position: absolute;
            list-style-type: none;
            padding: 5px 0;
            border-radius: 4px;
            font-size: 12px;
            font-weight: 400;
            color: #333;
            /*box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, .3);*/
            box-shadow: 2px 2px 3px 2px rgba(0, 0, 0, .3);
            li {
                margin: 0;
                padding: 7px 16px;
                cursor: pointer;
                &:hover {
                    background: #eee;
                }
            }
        }
    }
</style>
<style lang="scss" scoped type="text/scss">
    //reset element css of el-icon-close
    .tags-view-wrapper {
        .tags-view-item {
            & > > > .el-icon-close {
                width: 16px;
                height: 16px;
                vertical-align: 2px;
                border-radius: 50%;
                text-align: center;
                transition: all .3s cubic-bezier(.645, .045, .355, 1);
                transform-origin: 100% 50%;
                &:before {
                    transform: scale(.6);
                    display: inline-block;
                    vertical-align: -3px;
                }
                &:hover {
                    background-color: #b4bccc;
                    color: #fff;
                }
            }
        }
    }
</style>

<!--左右按键滚动样式-->
<style lang="scss" scoped type="text/scss">
    .tabs-container {
        .tags-view-item {
            &:first-of-type {
                margin-left: 5px !important;
            }
            &:last-of-type {
                margin-right: 5px !important;
            }
        }
        & > > > .el-tabs__nav-next, & > > > .el-tabs__nav-prev {
            line-height: 34px !important;
            font-size: 15px;
            padding: 0 5px;
        }
        /deep/ {
            .el-tabs__nav {
                border: none;
            }
            .el-tabs__item:last-child {
                padding-right: 0 !important;
            }
            .el-tabs__item {
                border-bottom: none;
                border-left: none;
                padding: 0;
                height: 30px;
                line-height: 30px;
                &:first-child {
                    margin-left: 10px !important;
                }
                &:last-child {
                    margin-right: 10px !important;
                }
                & > > > .is-active {
                    color: #fff;
                }
            }
            .el-tabs__nav-wrap {
                margin-bottom: 0;
            }
            .el-tabs__header {
                border-bottom: none;
            }
            .el-tabs__content {
                display: none;
            }
            .el-tabs__item:nth-child(2) {
                padding-left: 0 !important;
            }
            .el-icon-close {
                vertical-align: middle !important;
                &:before {
                    vertical-align: middle !important;
                }
            }
        }

    }

    .scroll-container {
        & > > > .is-vertical {
            display: none !important;
        }
    }

    .tags-view-container > > > .el-tabs__header {
        margin: 0 !important;
    }
</style>
