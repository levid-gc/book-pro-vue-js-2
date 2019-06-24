<template>
  <div class="container-fluid text-center">
    <div class="bg-primary text-white m-2 p-3">
      <h3>Product: <span v-text="name"></span></h3>
      <span v-html="fragment"></span>
    </div>
    <button v-on:click="handleClick" class="btn btn-primary">Press Me</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class App extends Vue {
  public name: string = 'Lifejacket';
  public fragment: string = `
    <div class="form-group">
      Password
      <input class="form-control" />
    </div>
  `;

  public handleClick(): void {
    //
  }
}
</script>
