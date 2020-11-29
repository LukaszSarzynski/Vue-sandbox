const oV = Vue.createApp({
    data() {
        return {
            tasks: []
        }
    },
    methods: {
        addTask() {
            this.tasks = ['#'+Math.floor(Math.random()*10000%10000+729), ...this.tasks];
        }
    }
});

oV.mount('#actual-task');