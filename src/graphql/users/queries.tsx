import { gql } from "@apollo/client";

export const QUERY_USER_LOGIN = gql`
  query Query($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;
