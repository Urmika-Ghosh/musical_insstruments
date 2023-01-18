import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString:string){
    if(value.length===0 || filterString===''){
      return value
    }
    const products = [];
    for(const user of value){
      if(user['name'].toLocaleLowerCase()===filterString.toLocaleLowerCase()){
        products.push(user);
      }
    }
    return products;
  }


  // transform(value: any[], filterString:string): any[] {
  //   if(!value){
  //     return [];
  //   }
  //   if(!filterString){
  //     return value;
  //   }
  //   filterString= filterString.toLocaleLowerCase();
  //   return value.filter(it =>{
  //     return it.toLocaleLowerCase().includes(filterString);
  //   });
  // }

}
