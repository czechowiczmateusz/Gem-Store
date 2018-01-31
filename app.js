(function() {

    var app = angular.module('gems', []);

    app.controller("GemController", function() {
        this.products = gems;
    });

    var gems = [
        {
            name: 'Diamond',
            density: 3.5,
            image: 'styles/scss/images/slot-machine.png'
        },
        {
            name: 'Diamond',
            density: 3.5,
            image: 'styles/scss/images/precious-stone.png'
        },
        {
            name: 'Diamond',
            density: 3.5,
            image: 'styles/scss/images/gemstone.png'
        },
        {
            name: 'Diamond',
            density: 3.5,
            image: 'styles/scss/images/gem.png'
        }
];
})();

