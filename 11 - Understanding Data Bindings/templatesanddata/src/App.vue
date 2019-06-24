<template>
  <div class="bg-primary text-white text-center m-2 p-3">
    <h3>Product: {{ name | reverse | capitalize }}</h3>
    <h3>Price: {{ getTotalPrice(lowTaxRate).toFixed(2) | currency(3) }} (Low Rate)</h3>
    <h3>Price: {{ getTotalPrice(highTaxRate).toFixed(2) | currency }} (High Rate)</h3>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  filters: {
    currency: (value: number, places?: number): string => {
      return new Intl.NumberFormat(
        'en-US',
        {
          style: 'currency',
          currency: 'USD',
          minimumFractionDigits: places || 2,
          maximumFractionDigits: places || 2
        }
      ).format(value);
    },
    capitalize: (value: string): string => {
      return value[0].toUpperCase() + value.slice(1);
    },
    reverse: (value: string): string => {
      return value.split('').reverse().join('');
    }
  }
})
export default class App extends Vue {
  public name: string = 'Lifejacket';
  public price: number = 48.95;
  public lowTaxRate: number = 12;
  public highTaxRate: number = 20;

  public getTotalPrice(taxRate): number {
    return this.price + (this.price * (taxRate / 100));
  }
}
</script>
