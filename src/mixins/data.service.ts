import Vue from 'vue';
import { Mixin } from 'vue-mixin-decorator';
import { Observable } from 'rxjs/Observable';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/observable/throw';
import Axios from 'axios';

@Mixin
export class DataService extends Vue {

  getData: (url: string, extractMethod?: ((value: any, index: number) => any) | undefined) => Promise<Observable<any[]>>
  = async (url, extractMethod?) => {
    try {
      let response = await Axios.get(url);

      let data: any[] = response.data;
      if (extractMethod) {
        if (data instanceof Object && !(data instanceof Function)) {
          data = [data];
        }
        data.map(extractMethod);
      }
      return Observable.of(data).distinctUntilChanged();

    } catch (error) {
      return Observable.throw(error || "Server Error");
    }

  };

}
