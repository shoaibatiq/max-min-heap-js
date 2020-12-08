class MaxHeap {
  constructor() {
    this.values = [41, 39, 33, 18, 27, 12];
  }
  insert(value) {
    this.values.push(value);
    this.bubbleUp(this.values);
  }

  bubbleUp(values) {
    let temp;
    let last = values.length - 1;
    let last_p = Math.floor((last - 1) / 2);
    while (values[last] > values[last_p] && last_p >= 0) {
      //[values[last], values[last_p]] = [values[last_p], values[last]]
      temp = values[last];
      values[last] = values[last_p];
      values[last_p] = temp;
      last = last_p;
      last_p = Math.floor((last - 1) / 2);
    }
    return values;
  }

  extractMax(){
      let last = this.values.length - 1;
      [this.values[last], this.values[0]] = [this.values[0], this.values[last]]
      let max = this.values.pop();
      let i=0;
      let swap_ind;
      while(i*2+1 <= this.values.length - 1){
          if(this.values[i] < this.values[i*2+1] || this.values[i] < this.values[i*2+2]){
              if(this.values[i*2+2] !== undefined)
                swap_ind = this.values[i*2+1] > this.values[i*2+2] ? i*2+1 : i*2+2;
              else
                swap_ind= i*2+1;
              [this.values[i], this.values[swap_ind]] = [this.values[swap_ind], this.values[i]]
              i = swap_ind;
          }
          else break;
      }
      return max;
  }
}

class MinHeap {
    constructor() {
      this.values = [];
    }
    insert(value) {
      this.values.push(value);
      this.bubbleUp(this.values);
    }
  
    bubbleUp(values) {
      let temp;
      let last = values.length - 1;
      let last_p = Math.floor((last - 1) / 2);
      while (values[last] < values[last_p] && last_p >= 0) {
        //[values[last], values[last_p]] = [values[last_p], values[last]]
        temp = values[last];
        values[last] = values[last_p];
        values[last_p] = temp;
        last = last_p;
        last_p = Math.floor((last - 1) / 2);
      }
      return values;
    }
  
    extractMin(){
        let last = this.values.length - 1;
        [this.values[last], this.values[0]] = [this.values[0], this.values[last]]
        let max = this.values.pop();
        let i=0;
        let swap_ind;
        while(i*2+1 <= this.values.length - 1){
            if(this.values[i] > this.values[i*2+1] || this.values[i] > this.values[i*2+2]){
                if(this.values[i*2+2] !== undefined)
                  swap_ind = this.values[i*2+1] < this.values[i*2+2] ? i*2+1 : i*2+2;
                else
                  swap_ind= i*2+1;
                [this.values[i], this.values[swap_ind]] = [this.values[swap_ind], this.values[i]]
                i = swap_ind;
            }
            else break;
        }
        return max;
    }
  }

// let heap = new MinHeap();

// heap.insert(55);
// heap.insert(1);
// heap.insert(45);
// heap.insert(199);
// heap.insert(65);
// heap.insert(2);




// console.log(heap.values);
module.exports = [MinHeap, MaxHeap]
