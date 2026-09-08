const calculateArea = (length, width) => {
    return length * width ;
    
 
};

const calculateVolume = ( height, calculateArea) => {
    const area = calculateArea(200,300);
    return height * area;
};
const volume = calculateVolume(20, calculateArea);
console.log(volume);