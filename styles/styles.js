var styles = {
                    board: {
                            get: function(){
                                return this.base;
                            },
                            base: {
                                backgroundColor: '#acf',
                                width: 450,
                                paddingLeft: 40,
                                margin: '0 auto'
                            }
                    },
                    tile: {
                        get: function(mode){
                            if (mode === 'init')
                               return this.base;
                            if (mode === 'hit'){
                                let obj = Object.assign({}, this.base);
                                return Object.assign(obj, this.hit);
                            }
                            if (mode === 'clear'){
                                let obj = Object.assign({}, this.base);
                                return Object.assign(obj, this.clear);
                            }
                        },
                        base: {
                                margin: 5,
                                height: 30,
                                width: 30,
                                backgroundColor: '#ccc'
                        },
                        hit: {
                            backgroundColor: '#fcc'
                        },
                        clear: {
                            backgroundColor: '#cfc'
                        }
                    },
                    
    }
module.exports = styles
