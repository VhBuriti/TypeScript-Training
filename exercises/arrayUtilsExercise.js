class ArrayUtils {
    constructor() {
      throw new Error('ArrayUtils cannot be instantiated.');
    }
   
    static average(arr) {
      if (arr.length === 0) throw new Error('Array cannot be empty.');
      return arr.reduce((sum, num) => sum + num, 0) / arr.length;
    }
   
    static max(arr) {
      return Math.max(...arr);
    }
  }