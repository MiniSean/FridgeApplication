export function calculateBrightness(color) {
    color = color.replace(/\s/g, '').toLowerCase();
    color = stringToColor(color);
    return calculateBrightnessFromHex(color);
}

export function calculateBrightnessFromHex(color) {
    // Remove any whitespace and convert to lowercase
    color = color.replace(/\s/g, '').toLowerCase();
  
    // Hex color
    if (color.startsWith('#')) {
      // Expand shorthand if necessary
      if (color.length === 4) {
        color = color.replace(/([a-f0-9])/g, '$1$1');
      }
  
      // Extract RGB values
      const red = parseInt(color.substr(1, 2), 16);
      const green = parseInt(color.substr(3, 2), 16);
      const blue = parseInt(color.substr(5, 2), 16);
  
      // Calculate brightness using relative luminance formula
      return 1 - ((red * 0.299) + (green * 0.587) + (blue * 0.114)) / 255;
    }
  
    // Invalid color format
    throw new Error('Invalid color format');
}

function stringToColor(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    let colour = '#';
    for (let i = 0; i < 3; i++) {
      let value = (hash >> (i * 8)) & 0xFF;
      colour += ('00' + value.toString(16)).substr(-2);
    }
    return colour;
}