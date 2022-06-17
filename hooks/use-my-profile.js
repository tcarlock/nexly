import axios from 'axios';
import useSWR from 'swr';

const fetcher = (...args) => {
  return axios(...args).then(res => res.data);
};

export default function useMyProfile () {
  const { data, error } = useSWR('/api/users/get-my-profile', fetcher)

  return {
    myProfile: data,
    isLoading: !error && !data,
    isError: error
  }
}