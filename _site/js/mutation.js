var elemToObserve = document.getElementById('bleh');
var prevClassState = elemToObserve.classList.contains('light-theme');
var observer = new MutationObserver(function(mutations) {
                    mutations.forEach(function(mutation) {
                        if(mutation.attributeName == "class"){
                            var currentClassState = mutation.target.classList.contains('light-theme');
                            if(prevClassState !== currentClassState)    {
                                prevClassState = currentClassState;
                                if(currentClassState)
                                    console.log("class added!");
                                else
                                    console.log("class removed!");
                            }
                        }
                    });
                });
observer.observe(elemToObserve, {attributes: true});
