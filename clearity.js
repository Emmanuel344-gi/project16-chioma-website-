var style= document.createElement('style');
var position = 'right';
style.innerHTML = `@keyframes scroll {
0%{
${position}: -${document.querySelector('.text').offsetWidth + 10}px
} 
100%{
${position}:100%;
}
}`;
document.head.prepend(style)