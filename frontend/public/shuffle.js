  function shuffle_arr(arr = []) {
        let shuffled_arr = [];

        while (arr.length > 0) {
            let choose_index = Math.floor(Math.random() * arr.length);
            let picked_number = arr.splice(choose_index , 1)[0];
            shuffled_arr.push(picked_number);
        };

        return shuffled_arr;
    
}
    
export default shuffle_arr;