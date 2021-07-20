const rreverse = require('./reverse');

function get_value(array){
    var sum=0;
    for(i=0; i<array.lenght; i++){
        sum=sum+array[i];
    }
    return sum;
}

test('have the same ASCII value', () => {
    expect(get_value(rreverse('eye')) === (get_value('eye'))).toBe(true);
  });