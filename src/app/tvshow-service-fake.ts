import {Observable, of}from 'rxjs';
import{ ITvshowService
} from'./tvshow.service';
import {ICurrentShow} from './icurrent-show';
export class TvshowServiceFake implements 
ITvshowService {
    private fakeTvshow: ICurrentShow ={
        name: 'girls',
        image: '',
        rating: '',
        language: 'eng',
        summary: 'summary'

    }
    public getShowsByName(showName: string): Observable<ICurrentShow[]> {
        return of(this.fakeTvshow);
    }
}