function eulerZahl () {
    //return Math.E;
    const divider = 1;
    const eulerZahl = 1;
    for ( let i = 0; i < 20; i++ ) {
        eulerZahl += 1 / divider
        divider.push( divider.at( -1 ) * divider.length );
    }
    console.log( eulerZahl )
}