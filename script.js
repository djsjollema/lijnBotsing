window.addEventListener("load", function() {
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");

    var r = new Vector(100, 100);
    var v = new Vector(7, 5);
    var F = new Vector(0, 1);

    var bal = new Bal(r.dx, r.dy, 20, "rgba(255,0,0,0.6)");
    var rooster = new Rooster(800, 800, 20, 20, 100, 100);

    ! function animate() {
        window.requestAnimationFrame(animate);
        context.clearRect(0, 0, 800, 800);
        rooster.teken(context);
        r = VectorOperaties.som(r, v);
        bal.x = r.dx;
        bal.y = r.dy;
        if (r.dx < 0 || r.dx > 800) v.dx = -v.dx;
        if (r.dy < 0 || r.dy > 800) {
            v.dy = -v.dy;
        }
        bal.teken(context);
        v.teken(r.dx, r.dy, 10, "blue", context);
    }()
})
