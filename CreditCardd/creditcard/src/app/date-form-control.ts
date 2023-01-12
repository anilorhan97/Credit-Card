import { FormControl } from "@angular/forms";
//Üst taraf otomatik olarak gelecektir. DateFormControl adında class oluşturup extends ile FormControl'ü miras alacaktır.
export class DateFormControl extends FormControl{
//go to definition'a giderek setValue kullancağız. SetValue aldığı parametrelere bakılır..
    override setValue(value:string | null , options:any) //quick yardımı ile override edildi.
    { //Super ile güncellemek gerekir, kalıtım olduğu için. //emitModelToViewChange ile değer güncellenir.   
        if(!value){ //değili yani boş ise
            super.setValue('',{...options,emitModelToViewChange:true}) //BOŞ değer Güncellenebilir.
            return;
        }
        if(value?.match(/[^0-9|\/]/gi)){ //Match eşleşiyorsa demek.. Burada anlatılmak istenen 0-9 arası ve / eklenebilir.. this ile this.value üstüne..
            super.setValue(this.value,{...options,emitModelToViewChange:true}); //this.value şimdikiye kadar olan değer. Value ise inputtan yolladığımız değer.
            return;
        }
        if(value.length === 2 && this.value.length === 3)
        { //olanı geri döneriz.
            super.setValue(value ,{...options,emitModelToViewChange:true}); //this.value şimdikiye kadar olan değer. Value ise inputtan yolladığımız değer.
            return;
        }
        if(value.length === 2)
        { //olanı geri döneriz.
            super.setValue(value + '/' ,{...options,emitModelToViewChange:true}); //this.value şimdikiye kadar olan değer. Value ise inputtan yolladığımız değer.
            return;
        }
        if(value.length > 5)
        { //olanı geri döneriz.
            super.setValue(this.value,{...options,emitModelToViewChange:true}); //this.value şimdikiye kadar olan değer. Value ise inputtan yolladığımız değer.
            return;
        }
        super.setValue(value,{...options,emitModelToViewChange:true});
    }
}   