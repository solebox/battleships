function get_mode(value){
            if ((value * 10 % 10) == 1){
               return Math.round(value) == 0 ? 'clear' : 'hit';
            } else {
               return 'init'; 
            }
};

exports.get_mode = get_mode;
