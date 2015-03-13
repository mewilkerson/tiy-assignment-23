this["JST"] = this["JST"] || {};
this["JST"]["header"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<header>\n  <div class=\"soundcloud\">\n    <h1>SoundCloud</h1>\n  </div>\n</header>";
},"useData":true});
this["JST"] = this["JST"] || {};
this["JST"]["sidebar"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<h2>Choose a Genre</h2>\n\n<ul>\n  <li><button class=\"genre-button\" data-name=\"alternative\">Alternative</button></li>\n  <li><button class=\"genre-button\" data-name=\"ambient\">Ambient</button></li>\n  <li><button class=\"genre-button\" data-name=\"classical\">Classical</button></li>\n  <li><button class=\"genre-button\" data-name=\"country\">Country</button></li>\n  <li><button class=\"genre-button\" data-name=\"dance\">Dance/EDM</button></li>\n  <li><button class=\"genre-button\" data-name=\"dubstep\">Dubstep</button></li>\n  <li><button class=\"genre-button\" data-name=\"electronic\">Electronic</button></li>\n  <li><button class=\"genre-button\" data-name=\"folk\">Folk</button></li>\n  <li><button class=\"genre-button\" data-name=\"rap\">Hip Hop/Rap</button></li>\n  <li><button class=\"genre-button\" data-name=\"indie\">Indie</button></li>\n  <li><button class=\"genre-button\" data-name=\"metal\">Metal</button></li>\n  <li><button class=\"genre-button\" data-name=\"pop\">Pop</button></li>\n  <li><button class=\"genre-button\" data-name=\"soul\">R&amp;B/Soul</button></li>\n  <li><button class=\"genre-button\" data-name=\"audiobooks\">Audiobooks</button></li>\n</ul>\n\n\n\n\n\n";
},"useData":true});
this["JST"] = this["JST"] || {};
this["JST"]["track"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    return "  <i class=\"fa fa-play-circle\"></i>\n";
},"3":function(depth0,helpers,partials,data) {
    return "  <i class=\"fa fa-ban\"></i>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<td class=\"artwork\">\n  <img src=\""
    + alias3(((helper = (helper = helpers.artwork_url || (depth0 != null ? depth0.artwork_url : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"artwork_url","hash":{},"data":data}) : helper)))
    + "\" alt=\""
    + alias3(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "\">\n</td>\n<td class=\"play\">\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.streamable : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "</td>\n<td class=\"title\">\n  <span>"
    + alias3(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "</td>\n</td>\n<td class=\"genre\">\n  <span>"
    + alias3(((helper = (helper = helpers.genre || (depth0 != null ? depth0.genre : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"genre","hash":{},"data":data}) : helper)))
    + "</td>\n</td>\n<td class=\"duration\">\n  <span>"
    + alias3(((helper = (helper = helpers.duration || (depth0 != null ? depth0.duration : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"duration","hash":{},"data":data}) : helper)))
    + "</span>\n</td>\n";
},"useData":true});
this["JST"] = this["JST"] || {};
this["JST"]["track_collection"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<thead>\n  <tr>\n    <th>Artwork</th>\n    <th></th>\n    <th>Title</th>\n    <th>Genre</th>\n    <th>Duration</th>\n  </tr>\n</thead>\n<tbody>\n\n</tbody>\n";
},"useData":true});