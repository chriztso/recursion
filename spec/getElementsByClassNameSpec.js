var htmlStrings = [
  '<div class="targetClassName"></div>',  //only 1 class
  '<div class="otherClassName targetClassName"></div>', //need to look through classes
  '<div><div class="targetClassName"></div></div>',    //class is nested in childNode
  '<div><div class="targetClassName"><div class="targetClassName"></div></div></div>', 
  '<div><div></div><div><div class="targetClassName"></div></div></div>',    //more nested
  '<div><div class="targetClassName"></div><div class="targetClassName"></div></div>',
  '<div><div class="somediv"><div class="innerdiv"><span class="targetClassName">yay</span></div></div></div>'
];

describe('getElementsByClassName', function() {

  it('should match the results of calling the built-in function', function() {
    $('body').addClass('targetClassName'); //need to look in document.body first
    htmlStrings.forEach(function(htmlString) {
      var $rootElement = $(htmlString);
      $('body').append($rootElement);  //body adds the html strings, these are childnodesnodes

      var result = getElementsByClassName('targetClassName');
      var expectedNodeList = document.getElementsByClassName('targetClassName');
      var expectedArray = Array.prototype.slice.apply(expectedNodeList);
      var equality = _.isEqual(result, expectedArray); // why can't we use `===` here?
      expect(equality).to.equal(true);

      $rootElement.remove();
    });
    $('body').removeClass('targetClassName');
  });

});
