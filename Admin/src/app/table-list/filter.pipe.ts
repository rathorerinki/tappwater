import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  // transform(customers: any[], term: any): any {
  
  //   if(!customers || !term){
  //   	return customers;
  // }
  // return customers.filter(customer=>
  // 	customer.name.toLOwerCase().indexOf(term.toLOwerCase())!==-1);
  	
  // }
transform(value: any, term: any): any {

	console.log(value);
  
  //   if(!customers || !term){
  //   	return customers;
  // }
  // return customers.filter(customer=>
  // 	customer.name.toLOwerCase().indexOf(term.toLOwerCase())!==-1);
  	
  }
}
