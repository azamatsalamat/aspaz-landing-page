import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css'
})
export class OrdersComponent implements OnInit, OnDestroy {
  private interval?: ReturnType<typeof setInterval>;
  animateOrdersCount = false;
  orders = 1000;
  
  ngOnInit(): void {
    const orders = localStorage.getItem('aspaz-orders-count');
    if (orders){
      this.orders = JSON.parse(orders);
    }

    this.interval = setInterval(() => {
      const rnd = Math.random();
      let increment = Math.floor(rnd / 0.3);
      this.orders += increment;

      if (increment > 0){
        this.saveCounter();
        this.animateOrdersCount = true;
        setTimeout(() => {
          this.animateOrdersCount = false;
        }, 2000);
      }
    }, 5000)
  }

  ngOnDestroy(): void {
    clearTimeout(this.interval);
  }

  private saveCounter(){
    localStorage.setItem('aspaz-orders-count', JSON.stringify(this.orders));
  }
}
