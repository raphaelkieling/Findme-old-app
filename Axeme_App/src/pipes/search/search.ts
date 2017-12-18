import { Pipe, PipeTransform } from '@angular/core';
import { Pessoa } from '../../domain/pessoa';

/**
 * Generated class for the SearchPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(items: any[], search: string) {
    return items.filter((item: Pessoa) => {
      return (item.nome.toLocaleLowerCase().includes(search.toLocaleLowerCase()));
    })

  }
}
