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



var imageCheck = (id) => {
    return new Promise(function (resolve, rejected) {

        var img = new Image();
		img.src = "http://img.youtube.com/vi/" + id + "/mqdefault.jpg";
		img.onload = function () {
			resolve(this.width);
		}
    });
  };

export const  requestVideo = (url, callback) => {
    function validateUrl(res){
        if(!res || res.status !== 200)  {
            throw res; 
        } else {
            callback();
        }        
    }

    function validatePreview(width) {
        if (width === 120) {
			throw "error"; 
		} else {
            callback();
        }
    }
    //return poll(() => axios.get(url, {headers: {'Access-Control-Allow-Origin': '*'}}).then(validateUrl), 15, 1000);
    return poll(() => imageCheck(url).then(validatePreview), 15, 1000);
}

  
  