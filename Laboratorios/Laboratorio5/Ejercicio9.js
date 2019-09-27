function circle(rad) {
    var area = 0;
    area = Math.PI * (rad * rad);

    if (rad < 0 || rad == 0) {
        console.log(-1);
    }
    else {
        console.log(area);
    }
}
circle(-2);
circle(3);
circle(0);
