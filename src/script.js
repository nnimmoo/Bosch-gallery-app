export default function setBodyColor({color}) {
    document.documentElement.style.setProperty('--bodyColor', color);
    color === "#000"?  document.documentElement.style.setProperty('--navColor', "#ad7d4d") :document.documentElement.style.setProperty('--navColor', "#000");
}