githubUserSearch.controller("GitUserSearchController", ["$resource", function($resource) {
  var self = this;
  var access_token = "16a14aa440f71ea6928510feef4440d8b658a250";
  var searchResource = $resource("https://api.github.com/search/users");

  self.doSearch = function() {
    self.searchResult = searchResource.get(
      { access_token: access_token,
        q: self.searchTerm
      }
    );
  };
}]);

