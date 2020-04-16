<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted() {
    //            console.log(11);
    //            let a = [1,2,3,4,5,6];
    //            let isProblem = 0;
    //            a.map(val => {
    //                console.log(val,'val');
    //                //0为否，只要有否，isProblem就是1
    //                if (val === 1) {
    //                    isProblem = 1;
    //                    return
    //                }else {
    //                    isProblem = 0
    //                }
    //            })
    //            console.log(isProblem,'isProblem');
  }
}
</script>
