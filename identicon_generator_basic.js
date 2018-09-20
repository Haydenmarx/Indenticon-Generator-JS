const make_gliphy = (name='test', size=50, border=true) => {
  let coded = CryptoJS.MD5(name).toString().split('').slice(0,15);
  coded = coded.map(item => {
    if (Number.isNaN(Number(item))) {
        return item.charCodeAt();
    }
    return Number(item);
  })
  let canvas = document.createElement('canvas');
  typeof size === 'string' ? size = 50 : size;
  canvas.height = size * 5;
  canvas.width =  canvas.height;
  border === true ? canvas.style.border = '2px solid black' : false;
  let ctx = canvas.getContext('2d');
  ctx.fillStyle = `rgb(${coded[0]}, ${coded[1]}, ${coded[2]})`;
    let counter = 0;
    let row = 0;
    coded.forEach((item, index) => {
      if (counter === 0) {
        if(item%2===0) {
          ctx.fillRect(0, row * size, size, size);
          ctx.fillRect(size * 4, row * size, size, size);       
        }
        counter++;
      } else if (counter === 1) {
        if(item%2===0) {
          ctx.fillRect(size, row * size, size, size);
          ctx.fillRect(size * 3, row * size, size, size);
        }
        counter++;
      } else {
        if(item%2===0) {
          ctx.fillRect(size  * 2, row * size, size, size);
          counter = 0;
        }
        row ++;
      }
    })
  return canvas;
}
