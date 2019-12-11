<template>
  <div class="container">
    <ul class="w3-ul w3-card-4">
      <li id="idUserList" class="w3-bar" :key='emp.id' v-for='(emp, index) in empData'>
        <span
          onclick="this.parentElement.style.display='none'"
          class="w3-bar-item w3-button w3-white w3-xlarge w3-right"
        >×</span>
        <div class="w3-bar-item">
          <span id="idNameSpan" @click="onItemClick(index)">{{emp.name}}</span>
          <br />
          <span>{{emp.job}}</span>
        </div>
      </li>
    </ul>
  </div>
</template> 
<script>
export default {
    data(){
        return {
            empData : [
                {   id: 1,
                    name: 'Shivang Chaturvedi',
                    job:'Engineer'
                },
                {   id: 2,
                    name: 'Mohammad Siddiqui',
                    job:'Farmer'
                },
                {   id: 3,
                    name:'Frank Gallagher',
                    job: 'He drinks all day.. A narcissist Scammer!'
                }
            ]
        }
    },
    methods: {
        onItemClick(index){
            var id = index;
            this.$router.push({path:`/user/${id}`});
        }
    }
};
</script>
<style scoped>
#idNameSpan:hover {
    font-size: 20px;
    font-stretch: expanded;
    cursor: pointer;
}

#idUserList:hover{
    cursor: pointer;
}
</style>