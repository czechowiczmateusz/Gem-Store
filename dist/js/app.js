(function() {

    var app = angular.module('gems', []);

    app.controller("GemController", function() {
        this.products = gems;
    });

    var gems = [
        {
            name: 'Diamond',
            density: 3.5,
            image: 'src/scss/images/slot-machine.png'
        },
        {
            name: 'Ruby',
            density: 4.1,
            image: 'src/scss/images/precious-stone.png'
        },
        {
            name: 'Emerald',
            density: 2.7,
            image: 'src/scss/images/gemstone.png'
        },
        {
            name: 'Orange Sapphire',
            density: 3.9,
            image: 'src/scss/images/gem.png'
        }
];
})();

