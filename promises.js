var promise = new Promise(function(resolve, reject) {
    const string1 = "Divya";

    if(string1 === "Divya") {
        resolve();
    } else {
        reject();
    }
    });
    
    promise.then(function () {
            console.log('Success');
        }).
        catch(function () {
            console.log('Error');
        });
    
