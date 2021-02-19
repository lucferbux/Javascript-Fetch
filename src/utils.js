import  axios from "axios";

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

function poll(fn, retries = Infinity, timeoutBetweenAttempts = 1000){
    return Promise.resolve()
        .then( fn )
        .catch(function retry(err){
            if(retries-- > 0)
                return delay( timeoutBetweenAttempts )
                    .then( fn )
                    .catch( retry );
            throw err;
        });
}


export const  requestVideo = (url, callback) => {
    function validate(res){
        if(!res || res.status !== 200)  {
            throw res; 
        } else {
            callback();
        }
            
    }
    return poll(() => axios.get(url).then(validate), 15, 1000);
}

  
  