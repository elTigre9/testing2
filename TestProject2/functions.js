let changeBGColor = () => {
    console.log('change color');
    let thebar = document.getElementById('brobar');
    // when working to override something, use hexcolor not color name
    thebar.style.cssText = 'background-color: #f4f923 !important';
}

