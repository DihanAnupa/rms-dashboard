<template>
<div id ="app">
  <v-app id="insspire">
  <v-container>
      <v-tabs v-model="tab" background-color="white" color="red darken-1">
        <v-tab v-for="item in items" :key="item.tab">
          {{ item.tab }}
        </v-tab>
      </v-tabs>
      <v-tabs-items v-model="tab">
        <v-tab-item v-for="item in items" :key="item.tab">
          <v-card flat>
            <v-card-text>
              <component v-bind:is="item.content"></component>
            </v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs-items>

  </v-container>
  </v-app>
</div>
</template>

<script>
import addOrder from '../components/addOrder'
import manageOrders from '../components/manageOrders'

export default{
  name:'Order',
  components:{
    addOrder,
    manageOrders
  },
  data() {
    return {
      tab: null,
      items: [
        { tab: 'Add Order', content: 'addOrder' },
        { tab: 'Manage Orders', content: 'manageOrders' }
      ]
    };
  }
};
</script>