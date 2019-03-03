import gql from 'graphql-tag';
import { AppUser } from '../apollo/model/graphql';

export const ALL_APPLICATION_USERS = gql`
  query  {
    appUsers {
        id
        name
        surname
    }
  }
`;

export interface ApplicationUsersQueryResponse {
  appUsers: AppUser[]
}
