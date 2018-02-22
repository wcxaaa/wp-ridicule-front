import Vue from 'vue';
import Component from 'vue-class-component';
import { Observable } from 'rxjs/Observable';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/observable/throw';
import Axios from 'axios';

@Component
export class DataService extends Vue {

  getData: (url: string, extractMethod?: ((value: any, index: number) => any) | undefined) => Promise<Observable<any[]>>
  = async (url, extractMethod?) => {
    try {
      let response = await Axios.get(url);

      let data: any[] = response.data;

      if (data instanceof Object && !(data instanceof Array)) {
        data = [data];
      }

      if (extractMethod) {
        data.map(extractMethod);
      }
      return Observable.of(data).distinctUntilChanged();

    } catch (error) {
      return Observable.throw(error || "Server Error");
    }

  };

}
