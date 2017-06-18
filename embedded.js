//
// embedded.js
//
// Library created to demonstrate pkx.
//

// module class that will be instantiated every time it is required
function Embedded(pkx, module, configuration) {
    this.getVersion = function() {
        return pkx.version;
    };

    this.whoami = function() {
        return require("cc.demo.embedded/embedded-data.json").whoami;
    };
}
// module factory
define(function() {
    return new (Function.prototype.bind.apply(Embedded, arguments));
});