<template>
    <div style="height:100%" class="login">
        <div class="one"/>
        <div class="two">
            <div class="title logo"><img src="../../assets/image/logo.png"></div>
            <div class="title biaoqian">
                <div class="guanli">烟台市</div>
                <div class="system">扶贫开发监测管理系统</div>
            </div>
        </div>
        <el-row class="login-container">
            <div class="title">管理员登录</div>
            <el-form
                    ref="loginForm"
                    :model="loginForm"
                    :rules="rules"
                    class="login-form"
                    auto-complete="on"
                    label-position="left"
                    style="margin-top:40px"
            >
                <!-- 用户名 -->
                <el-form-item prop="username">
                    <el-input
                            ref="username"
                            v-model="loginForm.username"
                            placeholder="请输入用户名"
                            name="username"
                            type="text"
                            tabindex="1"
                            auto-complete="on"
                    />
                    <span class="svg-container">
                        <svg-icon icon-class="user"/>
                    </span>
                </el-form-item>
                <!-- 密码 -->
                <el-form-item prop="password">
                    <el-input
                            :key="passwordType"
                            ref="password"
                            v-model="loginForm.password"
                            :type="passwordType"
                            placeholder="请输入密码"
                            name="password"
                            tabindex="2"
                            auto-complete="on"
                    />
                    <span class="show-pwd" @click="showPwd">
                        <svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'"/>
                    </span>
                </el-form-item>
                <el-form-item class="yanzheng" prop="verifyCode">
                    <el-input v-model="loginForm.vertifyCode" placeholder="请输入验证码" auto-complete="on"/>
                </el-form-item>
                <img :src="verifyCodeBase64" class="vertify-image" @click="getVerifyImage">
                <!-- 按钮 -->
                <el-button
                        :loading="loading"
                        type="primary"
                        style="width:100%;margin-bottom:20px;"
                        @click.native.prevent="handleLogin"
                >登录
                </el-button>
            </el-form>
        </el-row>
        <div class="three"/>
        <div class="four">Copyright © 2018 &nbsp;&nbsp; 技术支持：东方电子股份有限公司</div>
    </div>
</template>

<script>
    import {validUsername} from '@/utils/validate'
    import {getVerify} from '@/api/user'
    import LangSelect from '@/components/LangSelect'
    import SocialSign from './components/SocialSignin'

    export default {
        name: 'Login',
        components: {LangSelect, SocialSign},
        data() {
            const validateUsername = (rule, value, callback) => {
                if (!validUsername(value)) {
                    callback(new Error('Please enter the correct user name'))
                } else {
                    callback()
                }
            }
            const validatePassword = (rule, value, callback) => {
                if (value.length < 6) {
                    callback(new Error('密码不能少于6位数'))
                } else {
                    callback()
                }
            }
            return {
                verifyCodeBase64: 'base64',
                loginForm: {
                    username: 'wangkai',
                    password: 'fupin@123',
                    vertifyCode: ''
                },
                rules: {
                    username: [{required: true, message: '必填', trigger: 'change'}],
                    password: [{required: true, trigger: 'blur', validator: validatePassword}],
                    vertifyCode: [{required: true, message: '必填', trigger: 'change'}]
                },
                passwordType: 'password',
                capsTooltip: false,
                loading: false,
                showDialog: false,
                redirect: undefined,
                otherQuery: {}
            }
        },
        watch: {
            $route: {
                handler: function (route) {
                    const query = route.query
                    if (query) {
                        this.redirect = query.redirect
                        this.otherQuery = this.getOtherQuery(query)
                    }
                },
                immediate: true
            }
        },
        created() {
            this.getVerifyImage()
            // window.addEventListener('storage', this.afterQRScan)
        },
        mounted() {
            if (this.loginForm.username === '') {
                this.$refs.username.focus()
            } else if (this.loginForm.password === '') {
                this.$refs.password.focus()
            }
        },
        destroyed() {
            // window.removeEventListener('storage', this.afterQRScan)
        },
        methods: {
            // 获取验证码
            getVerifyImage() {
                getVerify().then(res => {
                    this.verifyCodeBase64 = res.data
                })
            },

            checkCapslock(e) {
                const {key} = e
                this.capsTooltip = key && key.length === 1 && (key >= 'A' && key <= 'Z')
            },
            showPwd() {
                if (this.passwordType === 'password') {
                    this.passwordType = ''
                } else {
                    this.passwordType = 'password'
                }
                this.$nextTick(() => {
                    this.$refs.password.focus()
                })
            },
            // 登录
            handleLogin() {
                this.$refs.loginForm.validate(valid => {
                    if (valid) {
                        this.loading = true
                        this.$store.dispatch('user/login', this.loginForm)
                            .then(resp => {
                                console.log(this.redirect,'this.redirect');
                                this.$router.push({path: this.redirect || '/', query: this.otherQuery}) // 登录成功之后重定向到首页
                                this.loading = false
                            })
                            .catch((err) => {
                                // 公共方法有，所以不需要加提示了
                                //                                this.$message.error(err.msg)
//                                this.getVerifyImage();
                                this.loading = false
                            })
                    } else {
                        console.log('错误的提交!!')
                        return false
                    }
                })
            },
            getOtherQuery(query) {
                return Object.keys(query).reduce((acc, cur) => {
                    if (cur !== 'redirect') {
                        acc[cur] = query[cur]
                    }
                    return acc
                }, {})
            }
            // afterQRScan() {
            //   if (e.key === 'x-admin-oauth-code') {
            //     const code = getQueryObject(e.newValue)
            //     const codeMap = {
            //       wechat: 'code',
            //       tencent: 'code'
            //     }
            //     const type = codeMap[this.auth_type]
            //     const codeName = code[type]
            //     if (codeName) {
            //       this.$store.dispatch('LoginByThirdparty', codeName).then(() => {
            //         this.$router.push({ path: this.redirect || '/' })
            //       })
            //     } else {
            //       alert('第三方登录失败')
            //     }
            //   }
            // }
        }
    }
</script>

<style lang="scss">
    /* 修复input 背景不协调 和光标变色 */
    /* Detail see https://github.com/PanJiaChen/vue-element-admin/pull/927 */

    $bg: #283443;
    $light_gray: #606266;
    $cursor: #fff;

    @supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
        .login-container .el-input input {
            color: $cursor;
        }
    }

    .login-container {
        .el-input {
            display: inline-block;
            height: 47px;
            width: 90%;

            input {
                background: transparent;
                border: 0px;
                -webkit-appearance: none;
                border-radius: 0px;
                color: $light_gray;
                height: 40px;
                caret-color: $cursor;
                &:-webkit-autofill {
                    box-shadow: 0 0 0px 1000px $cursor inset !important;
                    -webkit-text-fill-color: #606266 !important;
                }
            }
        }
    }
</style>

<!--<style lang="scss" scoped>-->
<!--$bg: #2d3a4b;-->
<!--$dark_gray: #889aa4;-->
<!--$light_gray: #eee;-->

<!--.login-container {-->
<!--min-height: 100%;-->
<!--width: 100%;-->
<!--background-color: $bg;-->
<!--overflow: hidden;-->

<!--.login-form {-->
<!--position: relative;-->
<!--width: 520px;-->
<!--max-width: 100%;-->
<!--padding: 160px 35px 0;-->
<!--margin: 0 auto;-->
<!--overflow: hidden;-->
<!--}-->

<!--.tips {-->
<!--font-size: 14px;-->
<!--color: #fff;-->
<!--margin-bottom: 10px;-->

<!--span {-->
<!--&:first-of-type {-->
<!--margin-right: 16px;-->
<!--}-->
<!--}-->
<!--}-->

<!--.svg-container {-->
<!--padding: 6px 5px 6px 15px;-->
<!--color: $dark_gray;-->
<!--vertical-align: middle;-->
<!--width: 30px;-->
<!--display: inline-block;-->
<!--}-->

<!--.title-container {-->
<!--position: relative;-->

<!--.title {-->
<!--font-size: 26px;-->
<!--color: $light_gray;-->
<!--margin: 0px auto 40px auto;-->
<!--text-align: center;-->
<!--font-weight: bold;-->
<!--}-->

<!--.set-language {-->
<!--color: #fff;-->
<!--position: absolute;-->
<!--top: 3px;-->
<!--font-size: 18px;-->
<!--right: 0px;-->
<!--cursor: pointer;-->
<!--}-->
<!--}-->

<!--.show-pwd {-->
<!--position: absolute;-->
<!--right: 10px;-->
<!--top: 7px;-->
<!--font-size: 16px;-->
<!--color: $dark_gray;-->
<!--cursor: pointer;-->
<!--user-select: none;-->
<!--}-->

<!--.thirdparty-button {-->
<!--position: absolute;-->
<!--right: 0;-->
<!--bottom: 6px;-->
<!--}-->

<!--@media only screen and (max-width: 470px) {-->
<!--.thirdparty-button {-->
<!--display: none;-->
<!--}-->
<!--}-->
<!--}-->
<!--</style>-->

<style lang="scss">
    @import "@/styles/login.scss";
</style>
