describe('progressService test', function(){
    describe('when I call progressService', function(){
        beforeEach(module('lb-pb-app'));
        it('is not null', inject(function(progressService){ //parameter name = service name

             expect(progressService).not.to.equal(null);
        }))

    })

});