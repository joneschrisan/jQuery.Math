(function($) {
    $.Math = $.Math || {};
    
    $.Math.toggleBit = function(num, bit) {
        var returns = false;
        if($.Math.hasBit(num, bit)) {
            $.Math.removeBit(num, bit);
        } else {
            $.Math.addBit(num, bit);
        }
        return returns;
    }
    
    $.Math.hasBit = function(num, bit) {
        if((num >> bit) % 2 != 0) return true;
        return false;
    }
    
    $.Math.addBit = function(num, bit) {
        return num | 1 << bit;
    }
    
    $.Math.removeBit = function(num, bit) {
        return num & ~(1 << bit);
    }
})(jQuery);