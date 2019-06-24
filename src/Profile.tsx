import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const GET_CURRENT_USER = gql`
  {
    viewer {
      login
      name
    }
  }
`;

interface Response {
  viewer: {
    name: string;
    login: string;
  };
}

const Profile: React.FC = () => {
  return (
    <Query<Response, {}> query={GET_CURRENT_USER}>
      {({ loading, error, data }) => {
        if (loading) {
          return 'Loading...';
        }
        if (error) {
          return `Error! ${error.message}`;
        }
        const { viewer } = data || { viewer: null };
        if (viewer) {
          return (
            <div>
              {viewer.name} <br /> {viewer.name}
            </div>
          );
        }
      }}
    </Query>
  );
};

export default Profile;
