/* describe('unit test lightbox', function() {
    var result;
    var element;
    var scope;
    var compiled;
    beforeEach(function () {

       var html ='<div ng-show="showLightBox">'+
           ' <div class="backdrop"></div>'+
            '<div class="lightbox-control">'+
               ' <div class="title">'+
                  'Progress'+
                   '<span class="close" ng-click="close()"></span>'+
                '</div>'+
                    '<ng-transclude><ng-transclude>'+
                '</div>'+
        '</div>'+

        inject(function ($compile, $rootScope) {

            scope    = $rootScope.$new();
            element  = angular.element(html);
            compiled = $compile(element);

            compiled(scope);
            scope.$digest();
          });
       })     
           var result = element[0].querySelectorAll('.title');
             console.log(result);   
            it('should find the right element'), function () {
           expect(angular.element(result).hasClass('title')).toBe(true);
        }
});
*/ 