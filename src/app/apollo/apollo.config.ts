import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { Apollo, ApolloModule } from 'apollo-angular';
import { HttpLink, HttpLinkModule } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { environment } from './../../environments/environment';

@NgModule({
    exports: [
        HttpClientModule,
        ApolloModule,
        HttpLinkModule
    ]
})
export class GraphQLModule {

    constructor(apollo: Apollo, httpLink: HttpLink) {
        const uri = environment.backend + environment.graphql; // '__SIMPLE_API_ENDPOINT__';
        const http = httpLink.create({ uri });

        /*
        const middleware = new ApolloLink((operation, forward) => {
            const token = localStorage.getItem('token');
            if (token) {
              operation.setContext({
                headers: new HttpHeaders().set('Authorization', `Bearer ${token}`)
              });
            }
            return forward(operation);
          });
        
          */
        apollo.create({
            link: http,
            cache: new InMemoryCache()
        });
    }
}