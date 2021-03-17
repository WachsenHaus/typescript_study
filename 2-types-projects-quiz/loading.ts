{
  /**
   * Print Loading State
   */
  type LoadingState = {
    state: 'loading';
  };

  type SuccessState = {
    state: 'success';
    response: {
      body: string;
    };
  };

  type FailState = {
    state: 'fail';
    reason: string;
  };

  type ResourceLoadState = LoadingState | SuccessState | FailState;

  printLoginState({ state: 'loading' }); // 👀 loading...
  printLoginState({ state: 'success', response: { body: 'loaded' } }); // 😃 loaded
  printLoginState({ state: 'fail', reason: 'no network' }); // 😱 no network

  function printLoginState( state:ResourceLoadState){
    if( state.state === "fail"){
      console.log(`😱 no network`);
    }else if(state.state === "loading"){
      console.log(`👀 loading...`);
    }else if(state.state === "success"){
      console.log(`😃 ${state.response.body}`);
    }else{
      throw new Error(`상태에러${state}`)
    }
  }
}
