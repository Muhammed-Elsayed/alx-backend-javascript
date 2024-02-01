/* eslint-disable */
export function handleResolve() {
    return {
      status: 200,
      body: 'success',
    };
  }
  
  export function handleReject() {
    return new Error();
  }
  
  export default function handleResponseFromAPI(promise) {
    return promise
      .then(handleResolve, handleReject)
      .finally(() => console.log('Got a response from the API'));
  }
  

  