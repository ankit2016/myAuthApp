import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mypipe'
})
export class MypipePipe implements PipeTransform {

  transform(value: any, mobileNo: any): any {
    if(mobileNo != null){
      return "+91-" + value;
    }else{
      return "N/A";
    }
    
  }

}
