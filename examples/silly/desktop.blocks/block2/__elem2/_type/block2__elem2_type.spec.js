modules.define('spec', function(provide) {

describe('mod "type" of "elem2" of "block2" may have some test', function() {

    it('Friday the 15th of May, was monday', function() {
        expect((new Date(2013, 4, 15)).getDay()).toEqual(3);
    });

});

provide();

});